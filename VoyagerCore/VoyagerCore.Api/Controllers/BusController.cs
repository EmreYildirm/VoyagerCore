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
    public class BusController : Controller
    {

        private readonly IBusService _busService;
        public BusController(IBusService busService)
        {
            _busService = busService;
        }

        [HttpGet("api/buses")]
        public IActionResult GetBuses()
        {
            try
            {
                var busList = _busService.GetAll();
                var temp = new JsonResult(busList);
                temp.StatusCode = 200;
                return Ok(temp);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
        [HttpGet("api/buses/{id}")]
        public IActionResult GetBusById(int id)
        {
            try
            {
                var bus = _busService.GetById(id);
                if (bus != null)
                    return Ok(bus);
                else
                    return NotFound();

            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
        [HttpPost("api/buses")]
        public IActionResult CreateBus([FromBody] BusCreationDTO bus)
        {
            try
            {
                var dummyList = new List<BusDTO>();
                dummyList = _busService.GetAll();
                int maxId;
                if (dummyList.Count == 0)
                    maxId = 0;
                else
                    maxId = dummyList.Max(e => e.Id);

                var newBus = new BusDTO()
                {
                    Id = maxId + 1,
                    Make = bus.Make,
                    Plate = bus.Plate
                };
                _busService.Add(newBus);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPut("api/buses/{busId}")]
        public IActionResult UpdateBus(int busId, [FromBody] BusUpdateDTO bus)
        {
            try
            {
                var busFromStore = _busService.GetById(busId);
                if (busFromStore == null)
                {
                    return NotFound();
                }
                else
                {
                    try
                    {
                        busFromStore.Plate = bus.Plate;
                        busFromStore.Make = bus.Make;
                        _busService.Update(busFromStore);
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
        [HttpDelete("api/buses/{busId}")]
        public IActionResult DeleteBus(int busId)
        {
            try
            {
                var busFromStore = _busService.GetById(busId);
                if (busFromStore == null)
                {
                    return NotFound();
                }
                else
                {
                    _busService.Remove(busFromStore);
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