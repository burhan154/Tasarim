using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities.Concrete;
using Core.Entities.Dtos;
using Entities.Concrete;

namespace Business.Abstract
{
    public interface IUserService
    {
        List<OperationClaim> GetClaims(UserInfo user);
        UserInfo Add(User user);
        User GetUserByMail(string email);
        UserInfo GetUserInfoByMail(string email);
    }
}
