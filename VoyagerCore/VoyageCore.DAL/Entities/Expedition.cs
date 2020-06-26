using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace VoyagerCore.DAL.Entities
{
    [Table("Expeditions")]
    public class Expedition
    {

        public int Id { get; set; }
        public string Code { get; set; }
        public DateTime ArrivalTime { get; set; }
        public DateTime DepartureTime { get; set; }


        public Bus Bus { get; set; }
        
        [ForeignKey("Bus")]
        public int BusId { get; set; }


        [ForeignKey("Route")]
        public int RouteId { get; set; }
        public Route Route { get; set; }

        [ForeignKey("Driver")]
        [Required]
        public int DriverId { get; set; }
        public Driver Driver { get; set; }

        [ForeignKey("Host")]
        [Required]
        public int HostId { get; set; }
        public Host Host { get; set; }
        public ICollection<Ticket> Tickets { get; set; }

        //public string BusPlate { get; set; }
        //public string RouteName { get; set; }
        //public string HostName { get; set; }
        //public string DriverName { get; set; }
    }
}
