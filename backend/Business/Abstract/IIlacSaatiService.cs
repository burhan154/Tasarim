using Core.Utilities.Results;
using Entities.Concrete;
using System.Collections.Generic;

namespace Business.Abstract
{
    public interface IIlacSaatiService
    {
        IDataResult<IlacSaati> GetById(int ilacSaatiId);
        IDataResult<List<IlacSaati>> GetListbyIlacId(int ilacId);
        IResult Add(IlacSaati ilacSaati);
        IResult Delete(IlacSaati ilacSaati);
        IResult DeleteAllByIlacId(int ilacId);
        IResult Update(IlacSaati ilacSaati);

        IResult AddList(List<IlacSaati> ilacSaatleri);
        IResult DeleteList(List<IlacSaati> ilacSaatleri);
        IResult UpdateList(List<IlacSaati> ilacSaatleri);
    }
}
