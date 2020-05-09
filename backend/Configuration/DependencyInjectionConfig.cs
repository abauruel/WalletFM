using backend.Data.Context;
using backend.Interfaces;
using backend.repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace backend.Configuration
{
  public static class DependencyInjectionConfig
  {
    public static IServiceCollection ResolveDependencies(this IServiceCollection services)
    {

      services.AddScoped<DataContext>();
      services.AddScoped<IClientRepository, ClientRepository>();
      services.AddScoped<IBrokerRepository, BrokerRepository>();
      services.AddScoped<ICategoryRepository, CategoryRepository>();
      services.AddScoped<IInvestmentRepository, InvestmentRepository>();
      services.AddScoped<IProductRepository, ProductRepository>();

      return services;
    }
  }
}