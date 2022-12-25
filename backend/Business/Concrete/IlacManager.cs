using Business.Abstract;
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
    public class IlacManager : IIlacService
    {
        IIlacDal _ilacDal;
        IIlacSaatiService _ilacSaatiService;

        public IlacManager(IIlacDal ilacDal,IIlacSaatiService ilacSaatiService)
        {
            _ilacDal = ilacDal;
            _ilacSaatiService = ilacSaatiService;
        }

        public IResult Add(Ilac ilac)
        {
            //_ilacSaatiService.Add(ilac.IlacSaatleri);
            _ilacDal.Add(ilac);
            return new SuccessResult(Messages.IlacEklendi);
        }

        public IResult Delete(Ilac ilac)
        {
            //_ilacSaatiService.Delete(ilac.IlacSaatleri);
            _ilacDal.Delete(ilac);
            return new SuccessResult(Messages.IlacSilindi);
        }

        public IDataResult<Ilac> GetById(int ilacId)
        {
            var ilac = _ilacDal.Get(p => p.Id == ilacId);
            ilac.IlacSaatleri = _ilacSaatiService.GetListbyIlacId(ilacId).Data;
            return new SuccessDataResult<Ilac>(ilac);
        }

        public IDataResult<List<Ilac>> GetList()
        {
            var ilaclar = _ilacDal.GetList();
            foreach (var ilac in ilaclar)
            {
                ilac.IlacSaatleri = _ilacSaatiService.GetListbyIlacId(ilac.Id).Data;
            }
            return new SuccessDataResult<List<Ilac>>(ilaclar.ToList());
        }

        public IResult Update(Ilac ilac)
        {
            //_ilacSaatiService.Add(ilac.IlacSaatleri);
            _ilacDal.Update(ilac);
            return new SuccessResult(Messages.IlacGuncellendi);
        }
    }
}
