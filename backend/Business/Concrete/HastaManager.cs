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
    public class HastaManager : IHastaService
    {
        private IHastaDal _hastaDal;
        private IUserInfoService _userInfoService;

        public HastaManager(IHastaDal hastaDal, IUserInfoService userInfoService)
        {
            _hastaDal = hastaDal;
            _userInfoService = userInfoService;
        }

        //public IDataResult<Hasta> GetById(int hastaId)
        //{
        //    //return new SuccessDataResult<Hasta>(_hastaDal.GetIlacById(hastaId));
        //    return new SuccessDataResult<Hasta>(_hastaDal.Get(p => p.Id == hastaId));
        //}

        //public IDataResult<HastaIlacSaatleriDto> GetById2(int hastaId)
        //{
        //    return new SuccessDataResult<HastaIlacSaatleriDto>(_hastaDal.GetIlacById(hastaId));
        //    //return new SuccessDataResult<Hasta>(_hastaDal.Get(p => p.Id == hastaId));
        //}

        //public IDataResult<List<Hasta>> GetList()
        //{
        //    return new SuccessDataResult<List<Hasta>>(_hastaDal.GetList().ToList());
        //}

        public IResult Add(Hasta hasta)
        {
            _hastaDal.Add(hasta);
            return new SuccessResult(Messages.HastaEklendi);
        }

        public IResult Delete(Hasta hasta)
        {
            _hastaDal.Delete(hasta);
            return new SuccessResult(Messages.HastaSilindi);
        }

        public IResult Update(Hasta hasta)
        {
            _hastaDal.Update(hasta);
            return new SuccessResult(Messages.HastaGuncellendi);
        }


        public IDataResult<UserInfo> GetHastaInfoById(int hastaId)
        {
            var hasta = _hastaDal.Get(a => a.Id == hastaId);
            if (hasta == null)
                return new ErrorDataResult<UserInfo>();

            return new SuccessDataResult<UserInfo>(_userInfoService.GetUserInfoById(hastaId));
        }

        public IDataResult<List<UserInfo>> GetHastaInfoList(int aileHekimiId)
        {
            var hastaList = _hastaDal.GetList(hasta => hasta.AileHekimiId == aileHekimiId);
            List<UserInfo> userInfo = new List<UserInfo>();
            foreach (var hasta in hastaList)
            {
                userInfo.Add(_userInfoService.GetUserInfoById(hasta.Id));
            }
            return new SuccessDataResult<List<UserInfo>>(userInfo);
        }

        public IDataResult<List<UserInfo>> GetHasta(int aileHekimiId)
        {
            var hastaList = _hastaDal.GetList(hasta => hasta.AileHekimiId == aileHekimiId);
            
            List<UserInfo> userInfo = new List<UserInfo>();
            foreach (var hasta in hastaList)
            {
                userInfo.Add(_userInfoService.GetUserInfoById(hasta.Id));
            }
            return new SuccessDataResult<List<UserInfo>>(userInfo);
        }

        public IDataResult<List<UserInfo>> GetHastaWithoutAileHekimi()
        {
            var hastaWithoutAileHekimi = _userInfoService.GetAllNullHasta().Where(user => !_hastaDal.GetList().Any(hasta2 => hasta2.Id == user.Id)).ToList();
            return new SuccessDataResult<List<UserInfo>>(hastaWithoutAileHekimi);
        }
    }
}
