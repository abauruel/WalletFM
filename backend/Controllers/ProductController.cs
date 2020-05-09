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
  public class ProductController : ControllerBase
  {
    private IProductRepository _productRepository;
    private IMapper _mapper;
    public ProductController(IProductRepository productRepository, IMapper mapper)
    {
      _productRepository = productRepository;
      _mapper = mapper;
    }


    [HttpGet]
    public async Task<ActionResult<List<ProductViewModel>>> Get()
    {
      return _mapper.Map<List<ProductViewModel>>(await _productRepository.GetAll());

    }
    [HttpGet]
    [Route("{id:int}")]
    public async Task<ActionResult<ProductViewModel>> GetById(int id)
    {
      return _mapper.Map<ProductViewModel>(await _productRepository.GetById(id));

    }

    [HttpPost]
    public async Task<ActionResult<ProductViewModel>> Post(
      [FromBody] ProductViewModel model)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      await _productRepository.Create(_mapper.Map<Product>(model));
      return model;



    }



  }
}
