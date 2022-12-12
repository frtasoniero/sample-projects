using ActivityApp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ActivityApp.Domain.Interfaces.Services
{
    public interface IActivityService
    {
        Task<Activity> AddActivity(Activity model);
        Task<Activity> UpdateActivity(Activity model);
        Task<Activity> GetActivityById(int activityId);
        Task<IEnumerable<Activity>> GetAllActivities();
        Task<bool> DeleteActivity(int activityId);
        Task<bool> EndActivity(Activity model);

    }
}
