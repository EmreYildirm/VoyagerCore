using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.DAL.Entities;

namespace VoyagerCore.DAL.Repositories
{
    public class PassengerRepository : BaseRepository<Passenger>, IPassengerRepository
    {
        public PassengerRepository(VoyagerContext context) : base(context)
        {

        }
    }
}
