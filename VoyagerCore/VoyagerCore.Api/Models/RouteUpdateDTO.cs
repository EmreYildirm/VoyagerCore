using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VoyagerCore.Api.Models
{
    public class RouteUpdateDTO
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Need a DepartureLocation")]
        public string DepartureLocation { get; set; }
        [Required(ErrorMessage = "Need a ArrivalLocation")]
        public string ArrivalLocation { get; set; }
        [Required(ErrorMessage = "Need a Distance")]
        public string Distance { get; set; }
    }
}
