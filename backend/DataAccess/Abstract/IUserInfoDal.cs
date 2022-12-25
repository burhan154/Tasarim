using System;
using System.Collections.Generic;
using System.Text;
using Core.DataAccess;
using Core.Entities.Concrete;
using Core.Entities.Dtos;
using Entities.Concrete;

namespace DataAccess.Abstract
{
    public interface IUserInfoDal:IEntityRepository<UserInfo>
    {
        List<OperationClaim> GetClaims(UserInfo userInfo);
        UserInfo AddUserWithPassword(User user);
        User GetUserByMail(string email);
       // UserInfo GetLoggedInUser();
    }
}
