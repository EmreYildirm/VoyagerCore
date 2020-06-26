using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VoyagerCore.Api.Models
{
    public class DriverCreationDTO
    {
        [Required(ErrorMessage = "Need a Name")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Need a Lastname")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Need a Gender")]
        public string Gender { get; set; }

        [Required(ErrorMessage = "Need a Identity Number")]
        public string IdentityNumber { get; set; }
        public string Date { get; set; }
    }
}
