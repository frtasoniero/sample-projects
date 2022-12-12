using System;

namespace ActivityApp.Domain.Entities
{
    public class Activity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Priority Priority { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime? EndTime { get; set; }

        public Activity() => StartTime = DateTime.Now;

        public Activity(int id, String title, String description) : this()
        {
            Id = id;
            Title = title;
            Description = description;
        }

        public void Conclusion()
        {
            EndTime = EndTime == null
                ? DateTime.Now
                : throw new Exception($"Activity already finished! Conclusion date: {EndTime?.ToString("dd/MM/yyyy hh:mm")}");
        }
    }
}
