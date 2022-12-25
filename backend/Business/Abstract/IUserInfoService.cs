using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities.Concrete;
using Core.Entities.Dtos;
using Entities.Concrete;

namespace Business.Abstract
{
    public interface IUserInfoService
    {
        UserInfo GetUserInfoById(int userId);
        List<UserInfo> GetAllNullHasta();
    }
}
