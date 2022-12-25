using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Core.DataAccess.EntityFramework;
using Core.Entities.Concrete;
using Core.Entities.Dtos;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Remotion.Linq.Parsing.Structure.IntermediateModel;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfUserInfoDal:EfEntityRepositoryBase<UserInfo,Context>,IUserInfoDal
    {
        public UserInfo AddUserWithPassword(User user)
        {
            using (var context = new Context())
            {
                UserInfo userInfo = new UserInfo
                {
                    Email = user.Email,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Status = user.Status,
                };
                Add(userInfo);
                context.UsersPasswords.Add(new UserPassword
                {
                    UserId = userInfo.Id,
                    PasswordHash = user.PasswordHash,
                    PasswordSalt = user.PasswordSalt
                });
                context.SaveChanges();
                return userInfo;
            }
        }

        public List<OperationClaim> GetClaims(UserInfo user)
        {
            using (var context = new Context())
            {
                var result = from operationClaim in context.OperationClaims
                    join userOperationClaim in context.UserOperationClaims
                        on operationClaim.Id equals userOperationClaim.OperationClaimId
                    where userOperationClaim.UserId == user.Id
                    select new OperationClaim {Id = operationClaim.Id, Name = operationClaim.Name};
                return result.ToList();
            }
        }

        //public UserInfo GetLoggedInUser()
        //{
        //    using (var context = new Context())
        //    {
        //        //context.User
        //        HttpContext httpContext;
        //        httpContext.User.FindFirst()

        //       //context.
        //    }
        //}

        public User GetUserByMail(string email)
        {
            using (var context = new Context())
            {
                var userInfo = Get(u => u.Email == email);
                if (userInfo == null)
                {
                    return null;
                }
                var userPassword = context.UsersPasswords.SingleOrDefault(u => u.UserId == userInfo.Id);
                return new User
                {
                    Id = userInfo.Id,
                    Email = userInfo.Email,
                    FirstName = userInfo.FirstName,
                    LastName = userInfo.LastName,
                    Status = userInfo.Status,
                    PasswordHash = userPassword.PasswordHash,
                    PasswordSalt = userPassword.PasswordSalt,
                };
            }
        }
    }
}
