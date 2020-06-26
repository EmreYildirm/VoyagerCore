using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.DAL.Entities;

namespace VoyagerCore.DAL.Repositories
{
    public class RouteRepository : BaseRepository<Route>, IRouteRepository
    {
        public RouteRepository(VoyagerContext context) : base(context)
        {

        }
    }
}
