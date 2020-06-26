using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using VoyagerCore.BLL.DTO;
using VoyagerCore.Api.Models;
using VoyagerCore.BLL.IServices;

namespace VoyagerCore.Api.Controllers
{
    [ApiController]
    public class RouteController : Controller
    {
        private IRouteService routeService;
        public RouteController(IRouteService routeService)
        {
            this.routeService = routeService;
        }
        [HttpGet("api/routes")]
        public IActionResult GetRoutes()
        {
            try
            {
                var routes = routeService.GetAllRoutes();
                var temp = new JsonResult(routes);
                temp.StatusCode = 200;
                return Ok(temp);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("api/routes/{id}")]
        public IActionResult GetRouteById(int id)
        {
            try
            {
                var route = routeService.GetById(id);
                if (route == null)
                    return NotFound();
                else
                    return Ok(route);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost("api/routes")]
        public IActionResult CreateRoute([FromBody] RouteCreationDTO route)
        {
            try
            {
                var routeStore = routeService.GetAllRoutes();
                int maxId;
                if (routeStore.Count == 0)
                    maxId = 0;
                else
                    maxId = routeStore.Max(r => r.Id);

                var newRoute = new RouteDTO()
                {
                    Id = maxId + 1,
                    DepartureLocation = route.DepartureLocation,
                    ArrivalLocation = route.ArrivalLocation,
                    Distance = Int32.Parse(route.Distance)
                };
                routeService.Add(newRoute);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPut("api/routes/{routeId}")]
        public IActionResult UpdateRoute(int routeId, [FromBody] RouteUpdateDTO route)
        {
            try
            {
                var routeFromStore = routeService.GetById(routeId);
                if (routeFromStore == null)
                {
                    return NotFound();
                }
                else
                {
                    try
                    {
                        routeFromStore.DepartureLocation = route.DepartureLocation;
                        routeFromStore.ArrivalLocation = route.ArrivalLocation;
                        routeFromStore.Distance = Int32.Parse(route.Distance);
                        routeService.Update(routeFromStore);
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
        [HttpDelete("api/routes/{routeId}")]
        public IActionResult DeleteRoute(int routeId)
        {
            try
            {
                var routeFromStore = routeService.GetById(routeId);
                if (routeFromStore == null)
                {
                    return NotFound();
                }
                else
                {
                    routeService.Remove(routeFromStore);
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