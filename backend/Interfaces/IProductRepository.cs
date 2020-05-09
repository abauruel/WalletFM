using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data.models;
using Microsoft.EntityFrameworkCore;

namespace backend.Interfaces
{
  public interface IProductRepository
  {
    Task<Product> Create(Product Product);
    Task Edit(Product Product);
    Task Delete(Product Product);
    Task<List<Product>> GetAll();
    Task<Product> GetById(int searchId);
  }
}