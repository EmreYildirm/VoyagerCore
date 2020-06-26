using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace VoyagerCore.DAL.Entities
{

    [Table("SoldTickets")]
    public class Ticket
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int SeatNumber { get; set; }
        [Required]
        public decimal PaidAmount { get; set; }
        public bool isSold { get; set; }
        [ForeignKey("Passenger")]
        [Required]
        public int PassengerId { get; set; }
        public string PassengerIdentityNumber { get; set; }
        public string PassengerName { get; set; }
        public string PassengerLastName { get; set; }
        public Passenger Passenger { get; set; }
        [Required]
        public Expedition Expedition { get; set; }
        public string ExpeditionCode { get; set; }
    }
}
