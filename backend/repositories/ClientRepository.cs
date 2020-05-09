using System.Collections.Generic;
using backend.Data.models;
using System.Linq;
using backend.Data.Context;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using backend.Interfaces;

namespace backend.repositories
{
  public class ClientRepository : IClientRepository
  {
    private readonly DataContext _context;

    public ClientRepository(DataContext context)
    {
      _context = context;
    }


    public async Task<Client> Create(Client client)
    {
      _context.Add(client);
      client.ID = await _context.SaveChangesAsync();
      return client;

    }

    public async Task Delete(Client client)
    {
      _context.Remove(client);
      await _context.SaveChangesAsync();

    }


    public async Task Edit(Client client)
    {
      _context.Update(client);
      await _context.SaveChangesAsync();
    }

    public async Task<List<Client>> GetAllClients()
    {
      return await _context.Clients
        .Include(x => x.Investments)
        .ToListAsync();
    }

    public async Task<Client> GetClientById(int searchId)
    {
      return await _context.Clients
      .Include(c => c.Investments).ThenInclude(i => i.Product).ThenInclude(p => p.Broker)
      .FirstOrDefaultAsync(x => x.ID == searchId);
    }
    public void Dispose()
    {
      throw new System.NotImplementedException();
    }


    public async Task<List<Client>> SearchClientsByCpf(string search)
    {
      return await _context.Clients
      .Include(c => c.Investments)
      .Where(c => c.CPF.Contains(search))
      .ToListAsync();
    }


  }
}