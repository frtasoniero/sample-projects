using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ActivityApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace ActivityApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        public IEnumerable<Activity> Activities = new List<Activity>()
        {
            new Activity(1),
            new Activity(2),
            new Activity(3)
        };

        [HttpGet]
        public IEnumerable<Activity> Get()
        {
            return Activities;
        }

        [HttpGet("{id}")]
        public Activity Get(int id)
        {
            return Activities.FirstOrDefault(item => item.Id == id);
        }

        [HttpPost]
        public IEnumerable<Activity> Post(Activity activity)
        {
            return Activities.Append<Activity>(activity);
        }

        [HttpPut("{id}")]
        public String Put(int id, Activity activity)
        {
            return "My first put method!";
        }

        [HttpDelete("{id}")]
        public String Delete(int id)
        {
            return "My first delete method!";
        }
    }
}
