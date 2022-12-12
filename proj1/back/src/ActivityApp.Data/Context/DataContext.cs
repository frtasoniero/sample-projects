using ActivityApp.Data.Mappings;
using ActivityApp.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace ActivityApp.Data.Context
{
    public class DataContext : DbContext
    {
        public DbSet<Activity> Activities { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ActivityMapping());
        }
    }
}
