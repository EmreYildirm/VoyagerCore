using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VoyagerCore.Api.Models
{
    public class HostUpdateDTO
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Need a Name")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Need a LastName")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Need a Age")]
        public string Age { get; set; }
        [Required(ErrorMessage = "Need a Gender")]
        public string Gender { get; set; }
        public DateTime Date { get; set; }
        public string IdentityNumber { get; set; }
    }
}
