using System;
using System.Collections.Generic;

using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using backend.ViewModels;
using backend.repositories;
using backend.Interfaces;
using AutoMapper;
using backend.Data.models;

namespace backend.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ClientController : ControllerBase
  {
    private readonly IClientRepository _clientRepository;
    private readonly IMapper _mapper;
    public ClientController(IClientRepository clientRepository, IMapper mapper)
    {
      _clientRepository = clientRepository;
      _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<List<ClientViewModel>>> Get()
    {
      var clients = _mapper.Map<List<ClientViewModel>>(await _clientRepository.GetAllClients());

      return clients;

    }
    [HttpGet]
    [Route("{id:int}")]
    public async Task<ActionResult<ClientViewModel>> GetById(int id)
    {
      var client = _mapper.Map<ClientViewModel>(await _clientRepository.GetClientById(id));

      return client;

    }


    [HttpPost]
    public async Task<ActionResult<ClientViewModel>> Post(
      [FromBody] ClientViewModel model)
    {

      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var client = _mapper.Map<ClientViewModel>(await _clientRepository.Create(_mapper.Map<Client>(model)));

      return client;


    }




  }
}
