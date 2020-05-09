using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
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
  public class BrokerController : ControllerBase
  {
    private IBrokerRepository _brokerRepository;
    private IMapper _mapper;
    public BrokerController(IBrokerRepository brokerRepository, IMapper mapper)
    {
      _brokerRepository = brokerRepository;
      _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<List<BrokerViewModel>>> Get()
    {
      return _mapper.Map<List<BrokerViewModel>>(await _brokerRepository.GetAll());
    }

    [HttpGet]
    [Route("{id:int}")]
    public async Task<ActionResult<BrokerViewModel>> GetById(int id)
    {
      return _mapper.Map<BrokerViewModel>(await _brokerRepository.GetById(id));
    }

    [HttpPost]
    public async Task<ActionResult<BrokerViewModel>> Post([FromBody] BrokerViewModel model)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      await _brokerRepository.Create(_mapper.Map<Broker>(model));
      return model;

    }



  }
}
