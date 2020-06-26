using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using VoyagerCore.BLL.DTO;
using VoyagerCore.Api.Models;
using VoyagerCore.BLL.IServices;

namespace VoyagerCore.Api.Controllers
{
    [ApiController]
    public class DriverController : Controller
    {
        private readonly IDriverService driverService;
        public DriverController(IDriverService driverService)
        {
            this.driverService = driverService;
        }
        [HttpGet("api/drivers")]
        public IActionResult GetDrivers()
        {
            try
            {
                var driverStore = driverService.GetAll();
                var temp = new JsonResult(driverStore);
                temp.StatusCode = 200;
                return Ok(temp);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpGet("api/drivers/{id}")]
        public IActionResult GetDriverById(int id)
        {
            try
            {
                var driver = driverService.GetById(id);
                if (driver == null)
                    return NotFound();
                else
                    return Ok(driver);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPost("api/drivers")]
        public IActionResult CreateDriver([FromBody] DriverCreationDTO driver)
        {
            try
            {
                var date = Convert.ToDateTime(driver.Date).Date;
                var driverStore = driverService.GetAll();
                int maxId;
                if (driverStore.Count == 0)
                    maxId = 0;
                else
                    maxId = driverStore.Max(d => d.Id);

                var newDriver = new DriverDTO()
                {
                    Id = maxId + 1,
                    FirstName = driver.FirstName,
                    LastName = driver.LastName,
                    Gender = driver.Gender,
                    IdentityNumber = driver.IdentityNumber,
                    DateOfBirth = date
                };

                driverService.Add(newDriver);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("api/drivers/{driverId}")]
        public IActionResult UpdateDriver(int driverId, [FromBody] DriverUpdateDTO driver)
        {
            try
            {
                var driverFromStore = driverService.GetById(driverId);
                if (driverFromStore == null)
                    return NotFound();
                else
                {
                    try
                    {
                        var date = Convert.ToDateTime(driver.Date).Date;
                        driverFromStore.FirstName = driver.FirstName;
                        driverFromStore.LastName = driver.LastName;
                        driverFromStore.Gender = driver.Gender;
                        driverFromStore.IdentityNumber = driver.IdentityNumber;
                        driverFromStore.DateOfBirth = date;
                        driverService.Update(driverFromStore);
                        return Ok();
                    }
                    catch
                    {
                        return BadRequest();
                    }
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("api/drivers/{driverId}")]
        public IActionResult DeleteDriver(int driverId)
        {
            try
            {
                var driverFromStore = driverService.GetById(driverId);
                if (driverFromStore == null)
                {
                    return NotFound();
                }
                else
                {
                    driverService.Remove(driverFromStore);
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}