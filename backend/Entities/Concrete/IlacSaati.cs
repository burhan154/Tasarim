using Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.Concrete
{
    public class IlacSaati : IEntity
    {
        public int Id { get; set; }
        public string Saat { get; set; } 
        public int Adet { get; set; }
        public int IlacId { get; set; }
    }
}


//private string pSaat;
//public string Saat { get { return pSaat.ToString(@"hh\:mm"); } set{ TimeSpan.Parse(value); } } 

//public TimeSpan Saat { set { pSaat = value.ToString(@"hh\:mm"); } get {  return TimeSpan.Parse(pSaat); } }