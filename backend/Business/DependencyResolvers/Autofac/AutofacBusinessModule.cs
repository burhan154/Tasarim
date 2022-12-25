using Autofac;
using System;
using System.Collections.Generic;
using System.Text;
using Autofac.Extras.DynamicProxy;
using Business.Abstract;
using Business.Concrete;
using Castle.DynamicProxy;
using Core.Utilities.Interceptors;
using Core.Utilities.Security.Jwt;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework;

namespace Business.DependencyResolvers.Autofac
{
    public class AutofacBusinessModule:Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            //builder.RegisterType<HastaManager>().As<IHastaService>();
            //builder.RegisterType<EfProductDal>().As<IProductDal>();

            //builder.RegisterType<CategoryManager>().As<ICategoryService>();
            //builder.RegisterType<EfCategoryDal>().As<ICategoryDal>();

            builder.RegisterType<CurentUserManager>().As<ICurentUserService>();

            builder.RegisterType<EfAileHekimiDal>().As<IAileHekimiDal>();
            builder.RegisterType<EfHastaIlacDal>().As<IHastaIlacDal>();
            builder.RegisterType<EfIlacDal>().As<IIlacDal>();
            builder.RegisterType<EfIlacSaatiDal>().As<IIlacSaatiDal>();
            builder.RegisterType<EfHastaDal>().As<IHastaDal>();

            builder.RegisterType<EfUserInfoDal>().As<IUserInfoDal>();
            builder.RegisterType<EfUserPasswordDal>().As<IUserPasswordDal>();


            builder.RegisterType<UserManager>().As<IUserService>();
            builder.RegisterType<UserInfoManager>().As<IUserInfoService>();
            builder.RegisterType<EfUserInfoDal>().As<IUserInfoDal>();

            builder.RegisterType<AuthManager>().As<IAuthService>();
            builder.RegisterType<JwtHelper>().As<ITokenHelper>();

            var assembly = System.Reflection.Assembly.GetExecutingAssembly();

            builder.RegisterAssemblyTypes(assembly).AsImplementedInterfaces()
                .EnableInterfaceInterceptors(new ProxyGenerationOptions()
                {
                    Selector = new AspectInterceptorSelector()
                }).SingleInstance();

        }
    }
}
