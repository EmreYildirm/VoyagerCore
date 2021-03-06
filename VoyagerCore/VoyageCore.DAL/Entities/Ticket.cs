﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VoyagerCore.DAL.Entities
{
    [Table("Tickets")]
    public class Ticket
    {
        [Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public int SeatNumber { get; set; }
        [Required]
        public decimal PaidAmount { get; set; }
        public bool isSold { get; set; }

        [ForeignKey("Passenger")]
        public int? PassengerId { get; set; }
        public string PassengerIdentityNumber { get; set; }
        public string PassengerName { get; set; }
        public string PassengerLastName { get; set; }
        public virtual Passenger Passenger { get; set; }
        [Timestamp]
        public byte[] RowVersion { get; set; }

        //public virtual ICollection<Expedition> Expeditions { get; set; }
    }
}
