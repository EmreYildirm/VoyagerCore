using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.Enums;

namespace VoyagerCore.BLL.DTO
{
    public class BusDTO
    {
        public int Id { get; set; }
        public string Make { get; set; }
        public string Plate { get; set; }
        public int SeatCount { get { return 21; } }
    }
}
