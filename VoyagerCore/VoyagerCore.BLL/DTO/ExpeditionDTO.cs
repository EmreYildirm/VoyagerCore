using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.Enums;

namespace VoyagerCore.BLL.DTO
{
    public class ExpeditionDTO
    {
        public int Id { get; set; }
        public string Code{ get; set; }
        public DateTime DepartureDate { get; set; }
        public DateTime ArrivalTime { get; set; }
        public DriverDTO Driver { get; }
        public HostDTO Host { get; }
        public RouteDTO Route { get; }
        public BusDTO Bus { get; }
        public List<TicketDTO> Tickets { get; }

        public ExpeditionDTO(BusDTO bus, RouteDTO route, HostDTO host, DriverDTO driver)
        {
            Driver = driver;
            Bus = bus;
            Route = route;
            Host = host;
            Tickets = new List<TicketDTO>();
            for (int i = 1; i <= bus.SeatCount; i++)
            {
                TicketDTO ticket = new TicketDTO()
                {
                    SeatNumber = i,
                    isSold = false,
                    Passenger = null,
                    PassengerId = null,
                    PassengerIdentityNumber = null,
                    PassengerLastName = null,
                    PassengerName = null,
                    ExpeditionId = Id
                };
                Tickets.Add(ticket);
            }
        }
    }
}
