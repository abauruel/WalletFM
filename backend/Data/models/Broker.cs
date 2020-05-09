using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace backend.Data.models
{
  public class Broker
  {
    [Key]
    public int ID { get; set; }

    [Required(ErrorMessage = "Campo Obrigatório")]
    public string Name { get; set; }

    public List<Product> Products { get; set; }



  }
}