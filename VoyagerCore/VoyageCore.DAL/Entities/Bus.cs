using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using VoyagerCore.Enums;

namespace VoyagerCore.DAL.Entities
{
    [Table("Buses")]
    public class Bus
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(64)]
        [Required]
        public string Make { get; set; }

        [MaxLength(16)]
        [Required]
        public string Plate { get; set; }

        public int SeatCount { get; set; }
    }
}