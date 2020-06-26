using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VoyagerCore.Api.Models
{
    public class ExpeditionCreationDTO
    {
        public string DriverId { get; set; }
        public string HostId { get; set; }
        public string RouteId { get; set; }
        public string BusId { get; set; }
        public string DepartureDate { get; set; }
    }
}
