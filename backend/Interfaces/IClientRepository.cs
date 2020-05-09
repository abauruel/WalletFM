using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data.models;
using Microsoft.EntityFrameworkCore;

namespace backend.Interfaces
{
  public interface IClientRepository
  {
    Task<Client> Create(Client client);
    Task Edit(Client client);
    Task Delete(Client client);
    Task<List<Client>> GetAllClients();
    Task<List<Client>> SearchClientsByCpf(string search);
    Task<Client> GetClientById(int searchId);
  }
}