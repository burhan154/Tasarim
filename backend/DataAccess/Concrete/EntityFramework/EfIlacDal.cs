using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.Concrete;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfIlacDal : EfEntityRepositoryBase<Ilac, Context>, IIlacDal
    {
        //public Ilac GetIlacById(int ilacId)
        //{
        //    using (var context = new Context())
        //    {


        //        return new HastaIlacSaatleriDto
        //        {
        //            Id = hastaId,
        //            HastaIlaclari = context.HastaIlac.Where(x => x.HastaId == hastaId).ToList()
        //        };


        //        //Hasta hasta = context.Hasta.SingleOrDefault(x => x.Id == hastaId);
        //        //hasta.AileHekimi = context.Users.FirstOrDefault(x => x. ==);
        //        //hasta.HastaIlaclari = context.HastaIlac.Where(x=>x.HastaId==hasta.Id).ToList();
        //        //return hasta;
        //    }
        //}
    }
}
