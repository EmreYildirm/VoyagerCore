using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using VoyagerCore.Api.Models;
using VoyagerCore.BLL.DTO;
using VoyagerCore.BLL.IServices;

namespace VoyagerCore.Api.Controllers
{
    [ApiController]
    [Route("api/expeditions")]
    public class TicketController : Controller
    {
        private ITicketService ticketService;
        private IPassengerService passengerService;
        public TicketController(ITicketService ticketService,  IPassengerService passengerService )
        {
            this.ticketService = ticketService;
            this.passengerService = passengerService;
        }

        [HttpGet("{expeditionId}/tickets")]
        public IActionResult GetTickets(int expeditionId)
        {
            try
            {
                var tickets = ticketService.GetAllTickets(expeditionId);
                return Ok(tickets);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{expeditionId}/tickets/{seatNumber}")]
        public IActionResult GetTicketById(int expeditionId, int seatNumber)
        {
            try
            {
                var ticket = ticketService.GetById(expeditionId, seatNumber);
                return Ok(ticket);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut("{expeditionId}/tickets/sellTicket/{seatNumber}")]
        public IActionResult TicketSale(int expeditionId, int seatNumber, PassengerCreationDTO passenger)
        {
            try
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
                        DateOfBirth = date,
                        IdentityNumber = passenger.IdentityNumber
                    };
                    passengerService.Add(newPassenger);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
                ticketService.SellTicket(expeditionId, seatNumber);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        //[HttpPut("{expeditionId}/tickets/cancelTicket/{ticketId}")]
        //public IActionResult CancelTicket(int expeditionId, int ticketId)
        //{
        //    try
        //    {
        //        var expeditionStore = ExpeditionMockData.Current.Expeditions;
        //        var expedition = expeditionStore.FirstOrDefault(e => e.Id == expeditionId);
        //        var ticketFromStore = expedition.Tickets.FirstOrDefault(t => t.Id == ticketId);

        //        if (ticketFromStore.isSold == true)
        //            ticketFromStore.isSold = false;
        //        else
        //            return BadRequest();

        //        return Ok();
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex.Message);
        //    }
        //}
    }
}