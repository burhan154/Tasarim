using Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.Concrete
{
    public class Ilac:IEntity
    {
        public int Id { get; set; }
        public string IlacAdi { set { ad = value.Trim(); } get { return ad; } }
        public string IlacDetayi { set { detay = value.Trim(); } get { return detay; } }

        public List<IlacSaati> IlacSaatleri { get; set; }

        private string ad;
        private string detay;
    }
}
