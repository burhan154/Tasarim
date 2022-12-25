using Business.Abstract;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

namespace Business.Concrete
{
    class CurentUserManager :ICurentUserService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public CurentUserManager(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;

        }
        public string UserId()
        {
            var userType = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.Role);
            //var userType = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
            if (userType == null || !userType.Subject.IsAuthenticated)
                return null;
            return _httpContextAccessor.HttpContext?.User?.FindFirst(ClaimTypes.NameIdentifier).Value;
        }
    }
}
