using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ActivityApp.Domain.Interfaces.Repositories
{
    public interface ICommonRepo
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        void DeleteAll<T>(IEnumerable<T> entity) where T : class;

        Task<bool> SaveChangesAsync();
    }
}
