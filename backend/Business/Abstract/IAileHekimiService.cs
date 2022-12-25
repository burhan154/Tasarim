using Core.Entities.Concrete;
using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IAileHekimiService
    {
        IDataResult<UserInfo> GetAileHekimiInfoById(int aileHekimiId);
        IResult Add(AileHekimi aileHekimi);
        IResult Delete(AileHekimi aileHekimi);
        IResult Update(AileHekimi aileHekimi);
    }
}
