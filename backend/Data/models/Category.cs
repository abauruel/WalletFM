using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Data.models
{
  public class Category
  {
    [Key]
    public int ID { get; set; }

    [Required(ErrorMessage = "Campo Obrigatório")]
    public string Name { get; set; }

  }
}