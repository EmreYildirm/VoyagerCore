using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VoyagerCore.Api.Models
{
    public class HostCreationDTO
    {
        [Required(ErrorMessage = "Need a Name")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Need a Lastname")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Need a Gender")]
        public string Gender { get; set; }
        public string date { get; set; }
        public string IdentityNumber { get; set; }
    }
}
