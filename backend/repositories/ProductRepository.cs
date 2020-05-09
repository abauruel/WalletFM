using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data.Context;
using backend.Interfaces;
using backend.Data.models;
using Microsoft.EntityFrameworkCore;

namespace backend.repositories
{
  public class ProductRepository : IProductRepository
  {
    private readonly DataContext _context;
    public ProductRepository(DataContext context)
    {
      _context = context;
    }
    public async Task<Product> Create(Product product)
    {
      _context.Add(product);
      await _context.SaveChangesAsync();
      return product;
    }

    public async Task Delete(Product product)
    {
      _context.Remove(product);
      await _context.SaveChangesAsync();
    }

    public async Task Edit(Product product)
    {
      _context.Update(product);
      await _context.SaveChangesAsync();
    }

    public async Task<List<Product>> GetAll()
    {
      return await _context.Products
        .Include(p => p.Category)
        .Include(p => p.Broker)
        .ToListAsync();
    }

    public async Task<Product> GetById(int searchId)
    {
      return await _context.Products
        .Include(x => x.Category)
        .Include(x => x.Broker)
        .FirstOrDefaultAsync(x => x.ID == searchId);
    }
  }
}