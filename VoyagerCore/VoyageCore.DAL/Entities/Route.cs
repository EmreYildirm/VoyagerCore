using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VoyagerCore.DAL.Entities
{
    [Table("Routes")]
    public class Route
    {
        [NotMapped]
        public const int distancePerBreak = 200;
        [NotMapped]
        public const decimal pricePerUnitUnderDropDistance = 5;
        [NotMapped]
        public const decimal pricePerUnitOverDropDistance = 4.25M;
        [NotMapped]
        public const int distanceUnitForPriceIncrement = 25;
        [NotMapped]
        public const int secondsPerKilometer = 45;
        [NotMapped]
        public const int secondsPerMinute = 60;
        [NotMapped]
        public const decimal priceDropDistance = 300;

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string DepartureLocation { get; set; }
        public string ArrivalLocation { get; set; }
        [Range(0, 2500)]
        public int Distance { get; set; }
        public int Duration { get; set; }
        public int BreakCount { get; set; }
        public decimal BasePrice { get; set; }
    }
}
