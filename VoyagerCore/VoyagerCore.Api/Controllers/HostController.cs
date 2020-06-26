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
    public class HostController : Controller
    {
        private IHostService hostService;

        public HostController(IHostService hostService)
        {
            this.hostService = hostService;
        }
        [HttpGet("api/hosts")]
        public IActionResult GetHosts()
        {
            try
            {
                var hostStore = hostService.GetAll();
                var temp = new JsonResult(hostStore);
                temp.StatusCode = 200;
                return Ok(temp);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpGet("api/hosts/{id}")]
        public IActionResult GetHostById(int id)
        {
            try
            {
                var host = hostService.GetById(id);
                if (host == null)
                    return NotFound();
                else
                    return Ok(host);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPost("api/hosts")]
        public IActionResult CreateHost([FromBody] HostCreationDTO host)
        {
            try
            {
                var hostDate = Convert.ToDateTime(host.date).Date;
                var hostStore = hostService.GetAll();
                int maxId;
                if (hostStore.Count == 0)
                    maxId = 0;
                else
                    maxId = hostStore.Max(h => h.Id);

                var newHost = new HostDTO()
                {
                    Id = maxId + 1,
                    FirstName = host.FirstName,
                    LastName = host.LastName,
                    Gender = host.Gender,
                    DateOfBirth = hostDate,
                    IdentityNumber = host.IdentityNumber
                };

                hostService.Add(newHost);
                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("api/hosts/{hostId}")]
        public IActionResult UpdateHost(int hostId, [FromBody] HostUpdateDTO host)
        {
            try
            {
                var hostFromStore = hostService.GetById(hostId);
                if (hostFromStore == null)
                    return NotFound();
                else
                {
                    try
                    {
                        var date = Convert.ToDateTime(host.Date).Date;
                        hostFromStore.FirstName = host.FirstName;
                        hostFromStore.LastName = host.LastName;
                        hostFromStore.Gender = host.Gender;
                        hostFromStore.IdentityNumber = host.IdentityNumber;
                        hostFromStore.DateOfBirth = host.Date;
                        hostService.Update(hostFromStore);
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
        [HttpDelete("api/hosts/{hostId}")]
        public IActionResult DeleteHost(int hostId)
        {
            try
            {
                var hostFromStore = hostService.GetById(hostId);
                if (hostFromStore == null)
                    return NotFound();
                else
                {
                    hostService.Remove(hostFromStore);
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