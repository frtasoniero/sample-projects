using System;
using System.Threading.Tasks;
using ActivityApp.Domain.Entities;
using ActivityApp.Domain.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ActivityApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        private readonly IActivityService _activityService;

        public ActivityController(IActivityService activityService)
        {
            _activityService = activityService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var activities = await _activityService.GetAllActivities();
                if (activities == null) { return NoContent(); }

                return Ok(activities);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Error when trying to get activities. Error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var activity = await _activityService.GetActivityById(id);
                if (activity == null) { return NoContent(); }

                return Ok(activity);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Error when trying to get activity with id ${id}. Error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Activity model)
        {
            try
            {
                var activity = await _activityService.AddActivity(model);
                if (activity == null) { return NoContent(); }

                return Ok(model);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Error when trying to add an activity with id ${model.Id}. Error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Activity model)
        {
            try
            {
                if (model.Id != id) this.StatusCode(StatusCodes.Status409Conflict,
                    "Trying to update the wrong activity!");

                var activity = await _activityService.UpdateActivity(model);
                if (activity == null) { return NoContent(); }

                return Ok(activity);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Error when trying to update an activity with id ${model.Id}. Error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var activity = await _activityService.GetActivityById(id);
                if (activity == null) 
                {
                    this.StatusCode(StatusCodes.Status409Conflict,
                    "Trying to delete an activity that do not exist!");
                }

                if (await _activityService.DeleteActivity(id))
                {
                    return Ok(new { message = "Deleted!" });
                }
                else
                {
                    return BadRequest("An error has happened when trying to delete an activity!");
                }
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Error when trying to delete an activity with id ${id}. Error: {ex.Message}");
            }
        }
    }
}
