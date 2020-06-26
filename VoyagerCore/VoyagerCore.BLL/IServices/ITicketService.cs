using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.BLL.DTO;

namespace VoyagerCore.BLL.IServices
{
    public interface ITicketService
    {
        void SellTicket(int expeditionId, int ticketId);
        //decimal GetPriceOfTicket(TicketDTO item, RouteDTO route);
        List<TicketDTO> GetAllTickets(int expeditionId);
        //bool IsFeeEnough(PassengerDTO person, RouteDTO route, TicketDTO item);
        //bool IsSeatEmpty(int seatNumber);
        //bool IsSeatAvailableForLuxuryBus(TicketDTO item);
        //bool IsSeatAvailableForStandardBus(TicketDTO item, PassengerDTO gender);
        //void CancelTicket(TicketDTO item);
    }
}
