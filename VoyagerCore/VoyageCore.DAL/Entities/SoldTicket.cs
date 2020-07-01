using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace VoyagerCore.DAL.Entities
{
    [Table("SoldTickets")]
    public class SoldTicket
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int SeatNumber { get; set; }
        public decimal PaidAmount { get; set; }
        public bool isSold { get; set; }

        [ForeignKey("Passenger")]
        public int? PassengerId { get; set; }
        public string PassengerIdentityNumber { get; set; }
        public string PassengerName { get; set; }
        public string PassengerLastName { get; set; }
        public Passenger Passenger { get; set; }

        public virtual Expedition Expedition { get; set; }
        public int? ExpeditionId { get; set; }
    }
}
