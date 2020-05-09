
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data.models;

namespace backend.Interfaces
{
  public interface IInvestmentRepository
  {
    Task<Investment> Create(Investment investment);
    Task Edit(Investment investment);
    Task Delete(Investment investment);
    Task<List<Investment>> GetAll();
    Task<Investment> GetById(int searchId);
  }
}