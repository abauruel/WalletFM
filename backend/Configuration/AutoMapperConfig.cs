using AutoMapper;
using backend.Data.models;
using backend.ViewModels;

namespace backend.Configuration
{
  public class AutoMapperConfig : Profile
  {
    public AutoMapperConfig()
    {
      CreateMap<Client, ClientViewModel>().ReverseMap();
      CreateMap<Category, CategoryViewModel>().ReverseMap();
      CreateMap<Broker, BrokerViewModel>().ReverseMap();
      CreateMap<Product, ProductViewModel>().ReverseMap();
      CreateMap<Investment, InvestmentViewModel>().ReverseMap();


    }
  }
}