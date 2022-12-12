using ActivityApp.Data.Context;
using ActivityApp.Domain.Entities;
using ActivityApp.Domain.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ActivityApp.Data.Repositories
{
    public class ActivityRepo : CommonRepo, IActivityRepo
    {
        private readonly DataContext _context;

        public ActivityRepo(DataContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Activity>> GetAllAsync()
        {
            IQueryable<Activity> query = _context.Activities;

            query = query.AsNoTracking()
                         .OrderBy(item => item.Id);

            return await query.ToArrayAsync();
        }

        public async Task<Activity> GetByIdAsync(int id)
        {
            IQueryable<Activity> query = _context.Activities;

            query = query.AsNoTracking()
                         .OrderBy(item => item.Id)
                         .Where(item => item.Id == id);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Activity> GetByTitleAsync(string title)
        {
            IQueryable<Activity> query = _context.Activities;

            query = query.AsNoTracking()
                         .OrderBy(item => item.Id)
                         .Where(item => item.Title == title);

            return await query.FirstOrDefaultAsync();
        }
    }
}
