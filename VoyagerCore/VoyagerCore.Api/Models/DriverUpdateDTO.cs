using System;
using System.ComponentModel.DataAnnotations;

namespace VoyagerCore.Api.Models
{
    public class DriverUpdateDTO
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Need a Name")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Need a Lastname")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Need a Gender")]
        public string Gender { get; set; }
        [Required(ErrorMessage = "Need a Identity Number")]
        public string IdentityNumber { get; set; }
        public DateTime Date { get; set; }
    }
}
