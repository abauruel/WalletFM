
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data.models;

namespace backend.Interfaces
{
  public interface ICategoryRepository
  {
    Task<Category> Create(Category category);
    Task Edit(Category category);
    Task Delete(Category category);
    Task<List<Category>> GetAll();
    Task<Category> GetById(int searchId);
  }
}