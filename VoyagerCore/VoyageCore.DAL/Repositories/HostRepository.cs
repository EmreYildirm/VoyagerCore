using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.DAL.Entities;

namespace VoyagerCore.DAL.Repositories
{
    public class HostRepository : BaseRepository<Host>, IHostRepository
    {
        public HostRepository(VoyagerContext context) : base(context)
        {

        }
    }
}
