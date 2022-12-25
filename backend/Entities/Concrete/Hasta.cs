using Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.Concrete
{
    public class Hasta : IEntity
    {
        public int Id { get; set; }
        public int AileHekimiId { get; set; }
        public List<HastaIlac> HastaIlaclari { get; set; } 
    }
}




//public AileHekimi AileHekimi { get; set; }
//public List<Randevu> Randevular { get; set; }