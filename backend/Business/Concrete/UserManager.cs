using System;
using System.Collections.Generic;
using System.Text;
using Business.Abstract;
using Core.Entities.Concrete;
using Core.Entities.Dtos;
using DataAccess.Abstract;
using Entities.Concrete;

namespace Business.Concrete
{
    public class UserManager:IUserService
    {
        IUserInfoDal _userInfoDal;

        public UserManager(IUserInfoDal userInfoDal)
        {
            _userInfoDal = userInfoDal;
        }

        public List<OperationClaim> GetClaims(UserInfo user)
        {
            return _userInfoDal.GetClaims(user);
        }

        public UserInfo Add(User user)
        {
            return _userInfoDal.AddUserWithPassword(user);
        }

        public User GetUserByMail(string email)
        {
            return _userInfoDal.GetUserByMail(email);
        }

        public UserInfo GetUserInfoByMail(string email)
        {
            return _userInfoDal.Get(u => u.Email == email);
        }
    }
}
