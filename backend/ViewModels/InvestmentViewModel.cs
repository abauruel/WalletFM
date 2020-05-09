using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace backend.ViewModels
{
  public class InvestmentViewModel
  {

    [Key]
    public int ID { get; set; }



    [Required(ErrorMessage = "Campo Obrigatório")]
    [Range(1, int.MaxValue, ErrorMessage = " O valor dever ser maior que zero")]
    public decimal Value { get; set; }

    public int ProductID { get; set; }

    public ProductViewModel Product { get; set; }
    public int ClientID { get; set; }
    public ClientViewModel Client { get; set; }

  }
}