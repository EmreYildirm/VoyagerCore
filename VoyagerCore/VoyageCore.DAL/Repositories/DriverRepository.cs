using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.DAL.Entities;

namespace VoyagerCore.DAL.Repositories
{
    public class DriverRepository : BaseRepository<Driver>, IDriverRepository
    {
        public DriverRepository(VoyagerContext context) : base(context)
        {

        }

    }
}
