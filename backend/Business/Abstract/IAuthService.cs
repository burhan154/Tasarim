using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities.Concrete;
using Core.Entities.Dtos;
using Core.Utilities.Results;
using Core.Utilities.Security.Jwt;
using Entities.Dtos;

namespace Business.Abstract
{
    public interface IAuthService
    {
        IDataResult<UserInfo> Register(UserForRegisterDto userForRegisterDto,string password);
        IDataResult<UserInfo> Login(UserForLoginDto userForLoginDto);
        IResult UserExists(string email);
        IDataResult<AccessToken> CreateAccessToken(UserInfo user);
    }
}
