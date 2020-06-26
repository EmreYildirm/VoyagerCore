using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.Enums;

namespace VoyagerCore.BLL.DTO
{
    public class ExpeditionDTO
    {
        private string _code;
        public int Id { get; set; }
        public string Code
        {
            get
            {
                string result = _code + " - " + Route.Name + " - " + Bus.Plate;
                return result;
            }
        }
        public DateTime DepartureDate { get; set; }
        public DateTime ArrivalTime
        {
            get
            {
                return DepartureDate.AddMinutes(Route.Duration);
            }
        }
        public DriverDTO Driver { get; }
        public HostDTO Host { get; }
        public RouteDTO Route { get; }
        public BusDTO Bus { get; }
        public List<TicketDTO> Tickets { get; }

        public ExpeditionDTO(BusDTO bus, RouteDTO route, HostDTO host, DriverDTO driver, DateTime departureTime)
        {
            DepartureDate = departureTime;
            Driver = driver;
            Bus = bus;
            Route = route;
            Host = host;
            Tickets = new List<TicketDTO>();
            for (int i = 1; i <= bus.SeatCount; i++)
            {
                TicketDTO ticket = new TicketDTO()
                {
                    Id = i,
                    SeatNumber = i,
                    isSold = false,
                    Passenger = null,
                    PassengerId = null,
                    IdentityNumber = null,
                    PassengerLastName = null,
                    PassengerName = null
                };
                Tickets.Add(ticket);
            }
            Random rnd = new Random();
            var code = Convert.ToString(rnd.Next(10000, 99999));
            _code = code;
        }
    }
}
