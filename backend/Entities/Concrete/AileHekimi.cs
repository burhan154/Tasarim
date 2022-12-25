using Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.Concrete
{
    public class AileHekimi : IEntity
    {
        public int Id { get; set; }
        public List<Hasta> Hastalar { get; set; }
    }
}

//[ForeignKey("User")]
//public List<Randevu> Randevular { get; set; }