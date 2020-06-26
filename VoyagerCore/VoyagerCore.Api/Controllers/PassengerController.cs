using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using VoyagerCore.BLL.DTO;
using VoyagerCore.BLL.Services;
using VoyagerCore.Api.Models;
using VoyagerCore.BLL.IServices;

namespace VoyagerCore.Api.Controllers
{
    [ApiController]
    public class PassengerController : Controller
    {
        private IPassengerService passengerService;

        public PassengerController(IPassengerService passengerService)
        {
            this.passengerService = passengerService;
        }
        [HttpGet("api/passengers")]
        public IActionResult GetPassenger()
        {
            try
            {
                var passengerStore = passengerService.GetAll();
                var temp = new JsonResult(passengerStore);
                temp.StatusCode = 200;
                return Ok(temp);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("api/passengers")]
        public IActionResult SavePassenger(PassengerCreationDTO passenger)
        {
            try
            {
                var date = Convert.ToDateTime(passenger.Date).Date;
                var passengerStore = passengerService.GetAll();
                int maxId;
                if (passengerStore.Count == 0)
                    maxId = 0;
                else
                    maxId = passengerStore.Max(p => p.Id);
                var newPassenger = new PassengerDTO()
                {
                    Id = maxId + 1,
                    FirstName = passenger.FirstName,
                    LastName = passenger.LastName,
                    //Age =Int32.Parse(passenger.Age),
                    Gender = passenger.Gender,
                    DateOfBirth = date
                };
                passengerService.Add(newPassenger);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}