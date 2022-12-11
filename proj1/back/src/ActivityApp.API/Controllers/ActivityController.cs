using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ActivityApp.API.Data;
using ActivityApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace ActivityApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        private readonly DataContext context;

        public ActivityController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Activity> Get()
        {
            return this.context.Activities;
        }

        [HttpGet("{id}")]
        public Activity Get(int id)
        {
            return this.context.Activities.FirstOrDefault(item => item.Id == id);
        }

        [HttpPost]
        public Activity Post(Activity activity)
        {
            this.context.Activities.Add(activity);

            if (this.context.SaveChanges() > 0) { return this.context.Activities.FirstOrDefault(item => item.Id == activity.Id); }
            else throw new Exception("Cannot add a new activity!");
        }

        [HttpPut("{id}")]
        public Activity Put(int id, Activity activity)
        {
            if (activity.Id != id) throw new Exception("Cannot update this activity!");

            this.context.Update(activity);

            if (this.context.SaveChanges() > 0) { return this.context.Activities.FirstOrDefault(item => item.Id == id); }
            else throw new Exception("Cannot add a new activity!");
        }

        [HttpDelete("{id}")]
        public Boolean Delete(int id)
        {
            var activity = this.context.Activities.FirstOrDefault(item => item.Id == id);

            if (activity == null) throw new Exception("Cannot remove this activity!");

            this.context.Remove(activity);

            return this.context.SaveChanges() > 0;
        }
    }
}
