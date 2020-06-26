using System;
using Microsoft.AspNetCore.Mvc;
using VoyagerCore.BLL.IServices;

namespace VoyagerCore.Api.Controllers
{
    [ApiController]
    [Route("api/expeditions")]
    public class TicketController : Controller
    {
        private ITicketService ticketService;
        public TicketController(ITicketService ticketService)
        {
            this.ticketService = ticketService;
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

        //[HttpGet("{expeditionId}/tickets/{ticketId}")]
        //public IActionResult GetTicketById(int expeditionId, int ticketId)
        //{
        //    try 
        //    {
        //        var expeditionStore = ExpeditionMockData.Current.Expeditions;
        //        var expedition = expeditionStore.FirstOrDefault(e => e.Id == expeditionId);
        //        var ticket = expedition.Tickets.FirstOrDefault(t => t.Id == ticketId);
        //        return Ok(ticket);
        //    } 
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex.Message);
        //    }
        //}


        [HttpPut("{expeditionId}/tickets/sellTicket/{ticketId}")]
        public IActionResult TicketSale(int expeditionId, int ticketId)
        {
            try
            {
                ticketService.SellTicket(expeditionId, ticketId);
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