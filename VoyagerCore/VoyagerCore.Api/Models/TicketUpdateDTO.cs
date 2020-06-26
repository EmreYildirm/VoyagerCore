using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VoyagerCore.BLL.DTO;

namespace VoyagerCore.Api
{
    public class TicketUpdateDTO
    {
        public int Id { get; set; }
        public int SeatNumber { get; set; }
        public bool IsSold { get; set; }
        public string Side { get; set; }
        public PassengerDTO Passenger { get; set; }
    }
}
