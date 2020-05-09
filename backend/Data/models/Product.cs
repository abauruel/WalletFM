using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Data.models
{
  public class Product
  {
    [Key]
    public int ID { get; set; }


    [Required(ErrorMessage = "Campo Obrigatório")]
    public string Name { get; set; }

    public int CategoryId { get; set; }
    public int BrokerID { get; set; }

    public Category Category { get; set; }
    public Broker Broker { get; set; }

  }
}