using VoyagerCore.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace VoyagerCore.DAL
{
    public class VoyagerContext : DbContext
    {
        public VoyagerContext(DbContextOptions<VoyagerContext> options) : base(options)
        {

        }
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    if (!optionsBuilder.IsConfigured)
        //    {
        //        var connString = "Server=DESKTOP-OPDSRE7\\mssqllocaldb;Database=VoyagerDB;ConnectRetryCount=0;MultipleActiveResultSets=true\"";
        //        optionsBuilder
        //            .UseSqlServer(connString, providerOptions => providerOptions.CommandTimeout(60))
        //            .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
        //    }
        //    base.OnConfiguring(optionsBuilder);
        //}

        public DbSet<Passenger> Passengers { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<Route> Routes { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<Bus> Buses { get; set; }
        public DbSet<Expedition> Expeditions { get; set; }
        public DbSet<Host> Hosts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
           // modelBuilder.Entity<Ticket>()
           //.HasOptional<Expedition>(s => s.Expedition)
           //.WithMany()
           //.WillCascadeOnDelete(false);
        }
    }
}
