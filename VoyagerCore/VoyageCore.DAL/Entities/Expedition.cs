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
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        public string Code { get; set; }
        public DateTime ArrivalTime { get; set; }
        public DateTime DepartureTime { get; set; }

        [ForeignKey("Bus")]
        public int BusId { get; set; }
        public virtual Bus Bus { get; set; }


        [ForeignKey("Route")]
        public int RouteId { get; set; }
        public virtual Route Route { get; set; }


        [ForeignKey("Driver")]
        [Required]
        public int DriverId { get; set; }
        public virtual Driver Driver { get; set; }


        [ForeignKey("Host")]
        [Required]
        public int HostId { get; set; }
        public virtual Host Host { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; }
        public virtual ICollection<SoldTicket> SoldTickets { get; set; }

        //public string BusPlate { get; set; }
        //public string RouteName { get; set; }
        //public string HostName { get; set; }
        //public string DriverName { get; set; }
    }
}
