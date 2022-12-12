using ActivityApp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ActivityApp.Domain.Interfaces.Repositories
{
    public interface IActivityRepo : ICommonRepo
    {
        Task<IEnumerable<Activity>> GetAllAsync();
        Task<Activity> GetByIdAsync(int id);
        Task<Activity> GetByTitleAsync(String title);
    }
}
