
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data.models;

namespace backend.Interfaces
{
  public interface IBrokerRepository
  {
    Task<Broker> Create(Broker broker);
    Task<Broker> Edit(Broker broker);
    Task Delete(Broker broker);
    Task<List<Broker>> GetAll();
    Task<Broker> GetById(int searchId);
  }
}