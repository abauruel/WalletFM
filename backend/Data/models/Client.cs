using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace backend.Data.models
{
  public class Client
  {

    [Key]
    public int ID { get; set; }

    [Required(ErrorMessage = "Campo Obrigatório")]
    public string Name { get; set; }

    [Required(ErrorMessage = "Campo Obrigatório")]
    public string CPF { get; set; }

    [Required(ErrorMessage = "Campo Obrigatório")]
    public string Address { get; set; }


    public List<Investment> Investments { get; set; }
  }
}
