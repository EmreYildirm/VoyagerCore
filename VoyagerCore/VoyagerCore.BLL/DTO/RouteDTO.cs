using System;
using System.Collections.Generic;
using System.Text;

namespace VoyagerCore.BLL.DTO
{
    public class RouteDTO
    {
        public int Id { get; set; }
        private int _breakCount;
        //kalıcı propertyler
        public const int distancePerBreak = 200;
        public const decimal pricePerUnitUnderDropDistance = 5;
        public const decimal pricePerUnitOverDropDistance = 4.25M;
        public const int distanceUnitForPriceIncrement = 25;
        public const int secondsPerKilometer = 45;
        public const int secondsPerMinute = 60;
        public const decimal priceDropDistance = 300;
        public string Name { get { return DepartureLocation + "-" + ArrivalLocation; } }
        public string DepartureLocation { get; set; }
        public string ArrivalLocation { get; set; }
        public int Distance { get; set; }
        public int Duration
        {
            get
            {
                return (((Distance * secondsPerKilometer + BreakCount * secondsPerMinute * 30) + secondsPerMinute - 1) / secondsPerMinute);
            }
        }
        public int BreakCount
        {

            get
            {
                if (Distance < distancePerBreak)
                    _breakCount = 0;
                else
                    _breakCount = Distance / distancePerBreak;
                return _breakCount;
            }
        }
        public decimal BasePrice
        {
            get
            {
                decimal result = 0;
                if (Distance > priceDropDistance)
                {
                    result = (((Distance + distanceUnitForPriceIncrement - 1 - priceDropDistance) / distanceUnitForPriceIncrement) * pricePerUnitOverDropDistance) + secondsPerMinute;
                }
                else
                {
                    result = ((Distance + distanceUnitForPriceIncrement - 1) / distanceUnitForPriceIncrement) * pricePerUnitUnderDropDistance;
                }
                return result;
            }
        }
    }

}

