using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IlacSaatiController : ControllerBase
    {
        private IIlacSaatiService _ilacSaatiService;

        public IlacSaatiController(IIlacSaatiService ilacSaatiService)
        {
            _ilacSaatiService = ilacSaatiService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int ilacSaatiId)
        {
            var result = _ilacSaatiService.GetById(ilacSaatiId);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }

        [HttpGet("getbyilacid")]
        public IActionResult GetListbyIlacId(int ilacId)
        {
            var result = _ilacSaatiService.GetListbyIlacId(ilacId);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }
        [HttpPost("add")]
        public IActionResult AddIlacSaati(IlacSaati ilacSaati)
        {
            var result = _ilacSaatiService.Add(ilacSaati);
            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }
        [HttpPost("delete")]
        public IActionResult DeleteIlacSaati(IlacSaati ilacSaati)
        {
            var result = _ilacSaatiService.Delete(ilacSaati);
            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }
        [HttpPost("update")]
        public IActionResult UpdateIlacSaati(IlacSaati ilacSaati)
        {
            var result = _ilacSaatiService.Update(ilacSaati);
            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }
        [HttpPost("deletebyilacid")]
        public IActionResult DeleteAllByIlacId(int ilacId)
        {
            var result = _ilacSaatiService.DeleteAllByIlacId(ilacId);
            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }
    }
}
