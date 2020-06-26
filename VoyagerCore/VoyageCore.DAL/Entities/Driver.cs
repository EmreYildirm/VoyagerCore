using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using VoyagerCore.Enums;

namespace VoyagerCore.DAL.Entities
{
    [Table("Drivers")]
    public class Driver : Person
    {
    }
}
