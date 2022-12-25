using Core.Utilities.Results;
using Entities.Concrete;
using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IHastaIlacService
    {
        IDataResult<List<HastaIlac>> GetAllByHastaId(int hastaId);
        IDataResult<List<HastaIlac>> GetAllByIlacId(int ilacId);
        IResult Add(HastaIlac hastaIlac);
        IResult Delete(HastaIlac hastaIlac);
        IResult Update(HastaIlac hastaIlac);
    }
}
