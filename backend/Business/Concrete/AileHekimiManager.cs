using Business.Abstract;
using Business.Constants;
using Business.ValidationRules.FluentValidation;
using Core.Aspects.Autofac.Caching;
using Core.Aspects.Autofac.Logging;
using Core.Aspects.Autofac.Performance;
using Core.Aspects.Autofac.Transaction;
using Core.Aspects.Autofac.Validation;
using Core.CrossCuttingConcerns.Logging.Log4Net.Loggers;
using Core.Utilities.Business;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Business.BusinessAspects.Autofac;
using Entities.Dtos;
using Core.Entities.Concrete;

namespace Business.Concrete
{
    public class AileHekimiManager : IAileHekimiService
    {
        private IAileHekimiDal _aileHekimiDal;
        private IUserInfoService _userInfoService;

        public AileHekimiManager(IAileHekimiDal aileHekimiDal, IUserInfoService userInfoService)
        {
            _aileHekimiDal = aileHekimiDal;
            _userInfoService = userInfoService;
        }

        public IResult Add(AileHekimi aileHekimi)
        {
            _aileHekimiDal.Add(aileHekimi);
            return new SuccessResult(Messages.AileHekimiEklendi);
        }

        public IResult Delete(AileHekimi aileHekimi)
        {
            _aileHekimiDal.Delete(aileHekimi);
            return new SuccessResult(Messages.AileHekimiSilindi);
        }

        public IResult Update(AileHekimi aileHekimi)
        {
            _aileHekimiDal.Update(aileHekimi);
            return new SuccessResult(Messages.AileHekimiGuncellendi);
        }


        public IDataResult<UserInfo> GetAileHekimiInfoById(int aileHekimiId)
        {
            //var aileHekimi = _aileHekimiDal.Get(a => a.Id == aileHekimiId);
            //if (aileHekimi == null)
             //   return new ErrorDataResult<UserInfo>();

            return new SuccessDataResult<UserInfo>(_userInfoService.GetUserInfoById(aileHekimiId));
        }

    }
}
