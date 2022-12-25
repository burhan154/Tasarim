using Core.DataAccess;
using Entities.Concrete;
using Entities.Dtos;

namespace DataAccess.Abstract
{
    public interface IHastaDal : IEntityRepository<Hasta>
    {
        HastaIlacSaatleriDto GetIlacById(int hastaId);
    }
}
