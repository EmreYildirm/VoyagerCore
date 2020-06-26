using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using VoyagerCore.BLL.DTO;
using VoyagerCore.Api.Models;
using VoyagerCore.BLL.IServices;

namespace VoyagerCore.Api.Controllers
{
    [ApiController]
    public class ExpeditionController : Controller
    {
        private IExpeditionService expeditionService;
        private IBusService busService;
        private IDriverService driverService;
        private IHostService hostService;
        private IRouteService routeService;
        public ExpeditionController(IExpeditionService expeditionService, IDriverService driverService, IHostService hostService, IRouteService routeService, IBusService busService)
        {
            this.expeditionService = expeditionService;
            this.busService = busService;
            this.driverService = driverService;
            this.routeService = routeService;
            this.hostService = hostService;
        }

        [HttpGet("api/expeditions/{dateTime}")]
        public IActionResult GetAllExpeditions(string dateTime)
        {
            try
            {
                var expData = expeditionService.GetAllWithDateTime(dateTime);
                var temp = new JsonResult(expData);
                temp.StatusCode = 200;
                return Ok(temp);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPost("api/expeditions")]
        public IActionResult saveNewExpedition(ExpeditionCreationDTO expedition)
        {
            try
            {
                var departureDate = Convert.ToDateTime(expedition.DepartureDate);
                var expeditionStore = expeditionService.GetAllWithDateTime(departureDate.ToString());
                int maxId;
                if (expeditionStore.Count == 0)
                    maxId = 0;
                else
                    maxId = expeditionStore.Max(e => e.Id);

                var busStore = busService.GetAll();
                var routeStore = routeService.GetAllRoutes();
                var driverStore = driverService.GetAll();
                var hostStore = hostService.GetAll();

                var Bus = busStore.FirstOrDefault(b => b.Id == Int32.Parse(expedition.BusId));
                var Driver = driverStore.FirstOrDefault(d => d.Id == Int32.Parse(expedition.DriverId));
                var Host = hostStore.FirstOrDefault(b => b.Id == Int32.Parse(expedition.HostId));
                var Route = routeStore.FirstOrDefault(b => b.Id == Int32.Parse(expedition.RouteId));

                var newExpedition = new ExpeditionDTO(Bus, Route, Host, Driver, departureDate)
                {
                    Id = maxId + 1,
                    DepartureDate = departureDate
                };
                expeditionService.Add(newExpedition);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}