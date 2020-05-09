using System;
using System.ComponentModel.DataAnnotations;

namespace backend.ViewModels
{
  public class ProductViewModel
  {
    [Key]
    public int ID { get; set; }


    [Required(ErrorMessage = "Campo Obrigatório")]
    public string Name { get; set; }

    public int CategoryId { get; set; }
    public int BrokerID { get; set; }

    public CategoryViewModel Category { get; set; }
    public BrokerViewModel Broker { get; set; }

  }
}