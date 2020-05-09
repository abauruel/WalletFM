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
  public class CategoryController : ControllerBase
  {
    private ICategoryRepository _categoryRepository;
    private IMapper _mapper;
    public CategoryController(ICategoryRepository categoryRepository, IMapper mapper)
    {
      _categoryRepository = categoryRepository;
      _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<List<CategoryViewModel>>> Get()
    {
      var categories = _mapper.Map<List<CategoryViewModel>>(await _categoryRepository.GetAll());
      return categories;

    }

    [HttpGet]
    [Route("{id:int}")]
    public async Task<ActionResult<CategoryViewModel>> GetById(int id)
    {
      var categories = _mapper.Map<CategoryViewModel>(await _categoryRepository.GetById(id));
      return categories;

    }

    [HttpPost]
    public async Task<ActionResult<CategoryViewModel>> Post(
      [FromBody] CategoryViewModel model)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      await _categoryRepository.Create(_mapper.Map<Category>(model));
      return model;



    }



  }
}
