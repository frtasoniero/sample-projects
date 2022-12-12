using ActivityApp.Domain.Entities;
using ActivityApp.Domain.Interfaces.Repositories;
using ActivityApp.Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ActivityApp.Domain.Services
{
    public class ActivityService : IActivityService
    {
        private readonly IActivityRepo _activityRepo;

        public ActivityService(IActivityRepo activityRepo)
        {
            _activityRepo = activityRepo;
        }

        public async Task<Activity> AddActivity(Activity model)
        {
            if (await _activityRepo.GetByTitleAsync(model.Title) != null)
            {
                throw new Exception("There is already an activity with this title!");
            }

            if (await _activityRepo.GetByIdAsync(model.Id) == null) 
            {
                _activityRepo.Add(model);
                if (await _activityRepo.SaveChangesAsync()) return model;
            }

            return null;
        }

        public async Task<bool> EndActivity(Activity model)
        {
            if (model != null)
            {
                model.Conclusion();
                _activityRepo.Update<Activity>(model);
                return await _activityRepo.SaveChangesAsync();
            }

            return false;
        }

        public async Task<bool> DeleteActivity(int activityId)
        {
            var activity = await _activityRepo.GetByIdAsync(activityId);
            if (activity == null)
            {
                throw new Exception("This activity do not exist!");
            }

            _activityRepo.Delete(activity);

            if (await _activityRepo.SaveChangesAsync() ) return true;

            return false;
        }

        public async Task<Activity> GetActivityById(int activityId)
        {
            try
            {
                var activity = await _activityRepo.GetByIdAsync(activityId);
                if (activity == null) return null;

                return activity;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<IEnumerable<Activity>> GetAllActivities()
        {
            try
            {
                var activities = await _activityRepo.GetAllAsync();
                if (activities == null) return null;

                return activities;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Activity> UpdateActivity(Activity model)
        {
            if (model.EndTime != null)
            {
                throw new Exception("Can not update already concluded activity!");
            }

            if (await _activityRepo.GetByIdAsync(model.Id) != null)
            {
                _activityRepo.Update(model);
                if (await _activityRepo.SaveChangesAsync()) return model;
            }

            return null;
        }
    }
}
