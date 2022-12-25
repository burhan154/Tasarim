using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Business.Abstract;
using Core.Extensions;
using Entities.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AileHekimiController : ControllerBase
    {
        private IAileHekimiService _aileHekimiService;
        private ICurentUserService _curentUserService;

        public AileHekimiController(IAileHekimiService aileHekimiService, ICurentUserService curentUserService)
        {
            _aileHekimiService = aileHekimiService;
            _curentUserService = curentUserService;
        }

        [HttpGet("getloggedInAileHekimi")]
        [Authorize(Roles = "doktor")]
        public IActionResult GetById()
        {
            var id = _curentUserService.UserId();
            if (id == null)
                return BadRequest("Not Authenticated");

            var result = _aileHekimiService.GetAileHekimiInfoById(Convert.ToInt32(id));
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpPost("add")]
        [Authorize(Roles = "admin")]
        public IActionResult Add(AileHekimi aileHekimi)
        {
            var result = _aileHekimiService.Add(aileHekimi);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }

        [HttpPost("update")]
        [Authorize(Roles = "admin")]
        public IActionResult Update(AileHekimi aileHekimi)
        {
            var result = _aileHekimiService.Update(aileHekimi);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }

        [HttpPost("delete")]
        [Authorize(Roles = "admin")]
        public IActionResult Delete(AileHekimi aileHekimi)
        {
            var result = _aileHekimiService.Delete(aileHekimi);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }
    }
}


//[HttpGet("getall")]
//[Authorize(Roles = "Hasta.List")]
//public IActionResult GetList()
//{

//    var result = _hastaService.GetList();
//    if (result.Success)
//    {
//        return Ok(result.Data);
//    }

//    return BadRequest(result.Message);
//}