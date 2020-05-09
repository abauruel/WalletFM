using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data.Context;
using backend.Interfaces;
using backend.Data.models;
using Microsoft.EntityFrameworkCore;

namespace backend.repositories
{
  public class InvestmentRepository : IInvestmentRepository
  {
    private readonly DataContext _context;
    public InvestmentRepository(DataContext context)
    {
      _context = context;
    }
    public async Task<Investment> Create(Investment investment)
    {
      _context.Add(investment);
      await _context.SaveChangesAsync();
      return investment;
    }

    public async Task Delete(Investment investment)
    {
      _context.Remove(investment);
      await _context.SaveChangesAsync();
    }

    public async Task Edit(Investment investment)
    {
      _context.Update(investment);
      await _context.SaveChangesAsync();
    }

    public async Task<List<Investment>> GetAll()
    {


      return await _context.Investments
         .Include(i => i.Client)
        .Include(i => i.Product).ThenInclude(p => p.Broker)
        .ToListAsync();




    }

    public Task<Investment> GetById(int searchId)
    {
      return _context.Investments
        .Include(i => i.Client)
        .Include(i => i.Product).ThenInclude(p => p.Broker)
        .FirstOrDefaultAsync(i => i.ID == searchId);
    }
  }
}