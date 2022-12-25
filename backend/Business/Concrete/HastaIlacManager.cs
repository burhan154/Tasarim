using Business.Abstract;
using Business.BusinessAspects.Autofac;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Business.Concrete
{
    public class HastaIlacManager : IHastaIlacService
    {
        IHastaIlacDal _hastaIlacDal;
        IIlacService _ilacService;

        public HastaIlacManager(IHastaIlacDal hastaIlacDal, IIlacService ilacService)
        {
            _hastaIlacDal = hastaIlacDal;
            _ilacService = ilacService;
        }

        public IResult Add(HastaIlac hastaIlac)
        {
            _hastaIlacDal.Add(hastaIlac);
            return new SuccessResult(Messages.HastaIlacEklendi);
        }

        public IResult Delete(HastaIlac hastaIlac)
        {
            _hastaIlacDal.Delete(hastaIlac);
            return new SuccessResult(Messages.HastaIlacSilindi);
        }
        //[SecuredOperation("user,doktor,admin")]
        public IDataResult<List<HastaIlac>> GetAllByHastaId(int hastaId)
        {
            var ilaclar = _hastaIlacDal.GetList(x => x.HastaId == hastaId);
            foreach (var ilac in ilaclar)
            {
                ilac.Ilac = _ilacService.GetById(ilac.IlacId).Data;
            }
            return new SuccessDataResult<List<HastaIlac>>(ilaclar.ToList());
        }

        public IDataResult<List<HastaIlac>> GetAllByIlacId(int ilacId)
        {
            var ilaclar = _hastaIlacDal.GetList(x => x.IlacId == ilacId);
            foreach (var ilac in ilaclar)
            {
                ilac.Ilac = _ilacService.GetById(ilac.Id).Data;
            }
            return new SuccessDataResult<List<HastaIlac>>(ilaclar.ToList());
        }

        public IResult Update(HastaIlac hastaIlac)
        {
            _hastaIlacDal.Update(hastaIlac);
            return new SuccessResult(Messages.HastaIlacGuncellendi);
        }


    }
}
