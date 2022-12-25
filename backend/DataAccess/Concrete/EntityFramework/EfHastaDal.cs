using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.Concrete;
using System.Collections.Generic;
using System.Linq;
using Entities.Dtos;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfHastaDal : EfEntityRepositoryBase<Hasta, Context>, IHastaDal
    {
        public HastaIlacSaatleriDto GetIlacById(int hastaId)
        {
            using (var context = new Context())
            {
                return new HastaIlacSaatleriDto
                {
                    HastaId = hastaId,
                    HastaIlaclari = context.HastaIlac.Where(x => x.HastaId == hastaId).ToList()
                };
                

                //Hasta hasta = context.Hasta.SingleOrDefault(x => x.Id == hastaId);
                //hasta.AileHekimi = context.Users.FirstOrDefault(x => x. ==);
                //hasta.HastaIlaclari = context.HastaIlac.Where(x=>x.HastaId==hasta.Id).ToList();
                //return hasta;
            }
        }
    }
}
