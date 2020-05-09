using Microsoft.EntityFrameworkCore;
using backend.Data.models;
using System.Collections.Generic;

namespace backend.Data.Context
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      // modelBuilder.Entity<Client_Investment>().HasKey(x => new { x.ClientID, x.InvestmentID });
      // modelBuilder.Entity<Client_Investment>()
      //             .HasOne(ci => ci.Client).WithMany(ci => ci.Client_Investment).HasForeignKey(c => c.ClientID);
      // modelBuilder.Entity<Client_Investment>()
      //             .HasOne(ci => ci.Investment).WithMany(ci => ci.Client_Investment).HasForeignKey(i => i.InvestmentID);
      base.OnModelCreating(modelBuilder);
    }


    public DbSet<Client> Clients
    { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Broker> Brokers { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Investment> Investments { get; set; }



  }



}