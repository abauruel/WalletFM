using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data.models;
using Microsoft.EntityFrameworkCore;

namespace backend.Interfaces
{
  public interface IRepository<TEntity>
  {
    Task<TEntity> Create(Client client);
    Task<TEntity> Edit(Client client);
    Task Delete(Client client);
    Task<List<TEntity>> GetAll();
    Task<TEntity> GetById(int searchId);

    List<TEntity> Search(string search);
  }
}