using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.Enums;

namespace VoyagerCore.BLL.DTO
{
    public abstract class PersonDTO
    {
        public int Id { get; set; }
        public string IdentityNumber { get; set; }
        public string LastName { get; set; }
        public int Age { get { return (DateTime.Now - DateOfBirth).Days / 365; } }
        public string Gender { get; set; }
        public string FirstName { get; set; }
        public string FullName { get { return FirstName + "-" + LastName; } }
        public DateTime DateOfBirth { get; set; }
    }
}
