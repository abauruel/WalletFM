using System.Collections.Generic;
using backend.Data.models;
using System.Linq;
using backend.Data.Context;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using backend.Interfaces;


namespace backend.repositories
{
  public class BrokerRepository : IBrokerRepository
  {
    private readonly DataContext _context;
    public BrokerRepository(DataContext context)
    {
      _context = context;
    }

    public async Task<Broker> Create(Broker broker)
    {
      _context.Add(broker);
      broker.ID = await _context.SaveChangesAsync();
      return broker;
    }

    public async Task Delete(Broker broker)
    {
      _context.Remove(broker);
      await _context.SaveChangesAsync();
    }

    public async Task<Broker> Edit(Broker broker)
    {
      _context.Update(broker);
      await _context.SaveChangesAsync();
      return broker;
    }

    public async Task<List<Broker>> GetAll()
    {
      return await _context.Brokers.Include(b => b.Products).ToListAsync();
    }

    public async Task<Broker> GetById(int searchId)
    {
      return await _context.Brokers.Include(b => b.Products).FirstOrDefaultAsync(x => x.ID == searchId);
    }
  }
}