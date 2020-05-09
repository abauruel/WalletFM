using System;
using System.ComponentModel.DataAnnotations;

namespace backend.ViewModels
{
  public class CategoryViewModel
  {
    [Key]
    public int ID { get; set; }

    [Required(ErrorMessage = "Campo Obrigatório")]
    public string Name { get; set; }

  }
}