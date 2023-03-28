using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Final_Movie_Rental.Models
{
    public class MovieContext : DbContext
    {
        public MovieContext() : base("NewDataBaseDBEntities")
        {
        }

        public DbSet<Movy> Movies { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movy>()
                .HasKey(m => m.Id);

            modelBuilder.Entity<Movy>()
                .Property(m => m.Title)
                .IsRequired()
                .HasMaxLength(255);

            modelBuilder.Entity<Movy>()
                .Property(m => m.Genre)
                .IsRequired()
                .HasMaxLength(50);

            modelBuilder.Entity<Movy>()
                .Property(m => m.ReleaseDate)
                .IsRequired();

            modelBuilder.Entity<Movy>()
                .Property(m => m.Price)
                .IsRequired();

            modelBuilder.Entity<Movy>()
                .ToTable("Movies");
        }
    }
}