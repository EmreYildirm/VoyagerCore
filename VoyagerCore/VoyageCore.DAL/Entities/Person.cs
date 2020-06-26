using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using VoyagerCore.Enums;

namespace VoyagerCore.DAL.Entities
{
    public abstract class Person
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(11)]
        [Required]
        public string IdentityNumber { get; set; }
        [MaxLength(64)]
        [Required]
        public string FirstName { get; set; }
        [MaxLength(64)]
        [Required]
        public string LastName { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        public int Age { get; set; }
        [Required]
        [EnumDataType(typeof(Gender))]
        public Gender Gender { get; set; }
    }
}
