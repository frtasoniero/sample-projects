using System;
using System.Collections;
using System.Linq;
using System.Threading.Tasks;
using ActivityApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace ActivityApp.API.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Activity> Activities { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    }
}
