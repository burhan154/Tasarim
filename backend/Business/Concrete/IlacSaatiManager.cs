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
    public class IlacSaatiManager : IIlacSaatiService
    {
        private IIlacSaatiDal _ilacSaatiDal;

        public IlacSaatiManager(IIlacSaatiDal ilacSaatiDal)
        {
            _ilacSaatiDal = ilacSaatiDal;
        }

        public IResult Add(IlacSaati ılacSaati)
        {
            _ilacSaatiDal.Add(ılacSaati);
            return new SuccessResult(Messages.IlacSaatiEklendi);
        }

        public IResult AddList(List<IlacSaati> ilacSaatleri)
        {
            foreach (var ilacSaati in ilacSaatleri)
            {
                _ilacSaatiDal.Add(ilacSaati);
            }
            return new SuccessResult(Messages.IlacSaatiEklendi);
        }

        public IResult Delete(IlacSaati ilacSaati)
        {
            _ilacSaatiDal.Delete(ilacSaati);
            return new SuccessResult(Messages.IlacSaatiSilindi);
        }

        public IResult DeleteList(List<IlacSaati> ilacSaatleri)
        {
            foreach (var ilacSaati in ilacSaatleri)
            {
                _ilacSaatiDal.Delete(ilacSaati);
            }
            return new SuccessResult(Messages.IlacSaatiSilindi);
        }

        public IResult DeleteAllByIlacId(int ilacId)
        {
            var list = _ilacSaatiDal.GetList(x => x.IlacId == ilacId);
            foreach (var item in list)
            {
                _ilacSaatiDal.Delete(item);
            }
            return new SuccessResult(Messages.IlacSaatiSilindi);
        }

        public IDataResult<IlacSaati> GetById(int ilacSaatiId)
        {
            return new SuccessDataResult<IlacSaati>(_ilacSaatiDal.Get(i => i.Id == ilacSaatiId));
        }

        public IDataResult<List<IlacSaati>> GetListbyIlacId(int ilacId)
        {
            return new SuccessDataResult<List<IlacSaati>>(_ilacSaatiDal.GetList(i=>i.IlacId == ilacId).ToList());
        }

        public IResult Update(IlacSaati ilacSaati)
        {
            _ilacSaatiDal.Update(ilacSaati);
            return new SuccessResult(Messages.IlacSaatiGuncellendi);
        }

        public IResult UpdateList(List<IlacSaati> ilacSaatleri)
        {
            foreach (var ilacSaati in ilacSaatleri)
            {
                _ilacSaatiDal.Update(ilacSaati);
            }
            return new SuccessResult(Messages.IlacSaatiGuncellendi);
        }
    }
}
