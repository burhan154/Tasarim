using Business.Abstract;
using Core.Entities.Concrete;
using DataAccess.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Business.Concrete
{
    class UserInfoManager: IUserInfoService
    {
        IUserInfoDal _userInfoDal;

        public UserInfoManager(IUserInfoDal userInfoDal)
        {
            _userInfoDal = userInfoDal;
        }

        public UserInfo GetUserInfoById(int userId)
        {
            return _userInfoDal.Get(u => u.Id == userId);
        }

        public List<UserInfo> GetAllNullHasta()
        {
            //var a  =_userInfoDal.GetClaims(new UserInfo).FirstOrDefault(x => x.Name == "user") == null;
            //var b = _userInfoDal.GetList();
            //_userInfoDal.GetClaims
            return _userInfoDal.GetList().Where(u=> _userInfoDal.GetClaims(u).FirstOrDefault(x => x.Name == "user")!=null).ToList();
        }
    }
}
