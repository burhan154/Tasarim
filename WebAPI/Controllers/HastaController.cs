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
    public class HastaController : ControllerBase
    {
        private IHastaService _hastaService;
        private ICurentUserService _curentUserService;

        public HastaController(IHastaService hastaService, ICurentUserService curentUserService)
        {
            _hastaService = hastaService;
            _curentUserService = curentUserService;
        }

        //[HttpGet("getall")]
        ////[Authorize(Roles = "Hasta.List")]
        //public IActionResult GetList()
        //{
            
        //    var result = _hastaService.GetList();
        //    if (result.Success)
        //    {
        //        return Ok(result.Data);
        //    }

        //    return BadRequest(result.Message);
        //}


        [HttpGet("getloggedInUser")]
        public IActionResult GetById()
        {
            //Hasta id
            var id = _curentUserService.UserId();
            if (id == null)
                return BadRequest("Not Authorized");

            var result = _hastaService.GetHastaInfoById(Convert.ToInt32(id));
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }

        [HttpGet("gethastainfolist")]
        public IActionResult GetHastaInfoListByAileHekimi()
        {
            //Aile hekimi id
            var id = _curentUserService.UserId();
            if (id == null)
                return BadRequest("Not Authorized");

            var result = _hastaService.GetHastaInfoList(Convert.ToInt32(id));
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }

        [HttpGet("GetHastaWithoutAileHekimi")]
        public IActionResult GetHastaWithoutAileHekimi()
        {
            //Hasta id
           
            var result = _hastaService.GetHastaWithoutAileHekimi();
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }

        [HttpPost("add")]
        public IActionResult Add(Hasta hasta)
        {
            var result = _hastaService.Add(hasta);
            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }

        [HttpPost("update")]
        public IActionResult Update(Hasta hasta)
        {
            var result = _hastaService.Update(hasta);
            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }

        [HttpPost("delete")]
        public IActionResult Delete(Hasta hasta)
        {
            var result = _hastaService.Delete(hasta);
            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest(result.Message);
        }


    }
}