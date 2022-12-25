using Core.Utilities.Results;
using Entities.Concrete;
using System.Collections.Generic;

namespace Business.Abstract
{
    public interface IIlacService
    {
        IDataResult<Ilac> GetById(int ilacId);
        IDataResult<List<Ilac>> GetList();
        IResult Add(Ilac ilac);
        IResult Delete(Ilac ilac);
        IResult Update(Ilac ilac);
    }
}
