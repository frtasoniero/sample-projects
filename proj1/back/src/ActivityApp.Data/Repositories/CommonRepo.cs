using ActivityApp.Data.Context;
using ActivityApp.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ActivityApp.Data.Repositories
{
    public class CommonRepo : ICommonRepo
    {
        private readonly DataContext _context;

        public CommonRepo(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public void DeleteAll<T>(IEnumerable<T> entities) where T : class
        {
            _context.RemoveRange(entities);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0; 
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
    }
}
