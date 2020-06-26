using System;
using System.Collections.Generic;
using System.Text;

namespace VoyagerCore.BLL.DTO
{
    public class TicketDTO
    {
        internal decimal StandardBusEconomySeatRoutePrice = 1.20m;
        internal decimal StandardBusBusinessRoutePrice = 1.25m;
        internal decimal LuxuryBusRoutePrice = 1.35m;
        public int Id { get; set; }
        public int SeatNumber { get; set; }
        public bool isSold { get; set; }
        public string Side
        {
            get
            {
                if (SeatNumber % 3 == 1)
                {
                    return "left";
                }
                else if (SeatNumber % 3 == 2)
                {
                    return "mid";
                }
                else
                {
                    return "right";
                }
            }
        }
        public int? PassengerId { get; set; }
        public PassengerDTO Passenger { get; set; }
        public string PassengerName { get; set; }
        public string PassengerLastName { get; set; }
        public string IdentityNumber { get; set; }
    }
}
