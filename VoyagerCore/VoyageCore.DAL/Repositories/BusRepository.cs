using System;
using System.Collections.Generic;
using System.Text;
using VoyageCore.DAL.Repositories;
using VoyagerCore.DAL.Entities;

namespace VoyagerCore.DAL.Repositories
{
    public class BusRepository : BaseRepository<Bus> , IBusRepository
    {
        public BusRepository(VoyagerContext Context) : base(Context)
        {

        }
    }
}
