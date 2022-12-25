using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Dtos
{
    public class HastaIlacSaatleriDto
    {
        public int HastaId { get; set; }
        public List<HastaIlac> HastaIlaclari { get; set; }
    }
}
