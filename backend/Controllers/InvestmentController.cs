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
  public class InvestmentController : ControllerBase
  {
    private readonly IInvestmentRepository _investimentRepository;
    private readonly IMapper _mapper;

    public InvestmentController(IInvestmentRepository investmentRepository, IMapper mapper)
    {
      _investimentRepository = investmentRepository;
      _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<List<InvestmentViewModel>>> Get()
    {
      return _mapper.Map<List<InvestmentViewModel>>(await _investimentRepository.GetAll());

    }
    [HttpGet]
    [Route("{id:int}")]
    public async Task<ActionResult<InvestmentViewModel>> GetById(int id)
    {
      return _mapper.Map<InvestmentViewModel>(await _investimentRepository.GetById(id));

    }

    [HttpPost]
    public async Task<ActionResult<InvestmentViewModel>> Post(

      [FromBody] InvestmentViewModel model)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      await _investimentRepository.Create(_mapper.Map<Investment>(model));

      return model;



    }



  }
}
