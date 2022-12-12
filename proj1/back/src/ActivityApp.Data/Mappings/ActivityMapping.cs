using ActivityApp.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ActivityApp.Data.Mappings
{
    public class ActivityMapping : IEntityTypeConfiguration<Activity>
    {
        public void Configure(EntityTypeBuilder<Activity> builder)
        {
            builder.ToTable("Activities");

            builder.Property(a => a.Title).HasColumnType("varchar(100)");
            builder.Property(a => a.Description).HasColumnType("varchar(255)");
        }
    }
}
