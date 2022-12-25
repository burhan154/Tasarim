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
    public class IlacController : ControllerBase
    {
        private IIlacService _ilacService;

        public IlacController(IIlacService ilacService)
        {
            _ilacService = ilacService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int ilacId)
        {
            var result = _ilacService.GetById(ilacId);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }
        [HttpGet("gettall")]
        public IActionResult GetByAll()
        {
            var result = _ilacService.GetList();
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }
        [HttpPost("add")]
        public IActionResult AddIlac(Ilac ilac)
        {
            var result = _ilacService.Add(ilac);
            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }
        [HttpPost("update")]
        public IActionResult UpdateIlac(Ilac ilac)
        {
            var result = _ilacService.Update(ilac);
            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }
        [HttpPost("delete")]
        public IActionResult DeleteIlac(Ilac ilac)
        {
            var result = _ilacService.Delete(ilac);
            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }
    }
}
