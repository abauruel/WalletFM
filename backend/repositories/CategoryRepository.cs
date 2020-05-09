using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data.Context;
using backend.Interfaces;
using backend.Data.models;
using Microsoft.EntityFrameworkCore;

namespace backend.repositories
{

  public class CategoryRepository : ICategoryRepository
  {
    private readonly DataContext _context;
    public CategoryRepository(DataContext context)
    {
      _context = context;
    }
    public async Task<Category> Create(Category category)
    {
      _context.Add(category);
      category.ID = await _context.SaveChangesAsync();
      return category;
    }

    public async Task Delete(Category category)
    {
      _context.Remove(category);
      await _context.SaveChangesAsync();
    }

    public async Task Edit(Category category)
    {
      _context.Update(category);
      await _context.SaveChangesAsync();
    }

    public async Task<List<Category>> GetAll()
    {
      return await _context.Categories.ToListAsync();
    }

    public async Task<Category> GetById(int searchId)
    {
      return await _context.Categories.FirstOrDefaultAsync(x => x.ID == searchId);
    }
  }
}