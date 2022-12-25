using Business.Abstract;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Entities.Concrete;

namespace WebAPI.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class HastaIlacController : ControllerBase
    {
        private IHastaIlacService _hastaIlacService;
        private ICurentUserService _curentUserService;

        public HastaIlacController(IHastaIlacService hastaIlacService, ICurentUserService curentUserService)
        {
            _hastaIlacService = hastaIlacService;
            _curentUserService = curentUserService;
        }

        [HttpGet("getallbyhastaid")]
        public IActionResult GetAllByHastaId(int hastaId)
        {
            var result = _hastaIlacService.GetAllByHastaId(hastaId);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }
        [HttpGet("getall")]
        public IActionResult GetAllLoggedUser()
        {
            var id =_curentUserService.UserId();
            if (id == null)
                return BadRequest("Not Authorized");

            var result = _hastaIlacService.GetAllByHastaId(Convert.ToInt32(id));
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }
        [HttpPost("add")]
        public IActionResult Add(HastaIlac hastaIlac)
        {
            var result = _hastaIlacService.Add(hastaIlac);
            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }

        [HttpPost("update")]
        public IActionResult Update(HastaIlac hastaIlac)
        {
            var result = _hastaIlacService.Update(hastaIlac);
            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }

        [HttpPost("delete")]
        public IActionResult Delete(HastaIlac hastaIlac)
        {
            var result = _hastaIlacService.Delete(hastaIlac);
            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }
    }
    
}
