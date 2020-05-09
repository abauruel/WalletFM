using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace backend.ViewModels
{
  public class BrokerViewModel
  {
    [Key]
    public int ID { get; set; }

    [Required(ErrorMessage = "Campo Obrigatório")]
    public string Name { get; set; }

    public List<ProductViewModel> Products { get; set; }



  }
}