using Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.Concrete
{
    public class HastaIlac : IEntity
    {
        public int Id { get; set; }

        public int HastaId { get; set; }

        public int IlacId { get; set; }
        public Ilac Ilac { get; set; }

        public DateTime Baslangic { get; set; }
        public DateTime Bitis { get; set; }
    }
}
