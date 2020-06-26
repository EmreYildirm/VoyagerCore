using System.ComponentModel.DataAnnotations;

namespace VoyagerCore.Api.Models
{
    public class RouteCreationDTO
    {
        [Required(ErrorMessage = "Need a DepartureLocation")]
        public string DepartureLocation { get; set; }
        [Required(ErrorMessage = "Need a ArrivalLocation")]
        public string ArrivalLocation { get; set; }
        [Required(ErrorMessage = "Need a Distance")]
        public string Distance { get; set; }
    }
}
