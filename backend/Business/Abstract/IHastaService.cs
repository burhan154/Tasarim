using Core.Entities.Concrete;
using Core.Utilities.Results;
using Entities.Concrete;
using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IHastaService
    {
        IDataResult<UserInfo> GetHastaInfoById(int hastaId);
        IDataResult<List<UserInfo>> GetHastaInfoList(int aileHekimiId);
        IDataResult<List<UserInfo>> GetHastaWithoutAileHekimi();
        IResult Add(Hasta hasta);
        IResult Delete(Hasta hasta);
        IResult Update(Hasta hasta);
    }
}
