using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.DAL.Entities;

namespace VoyagerCore.DAL.Repositories
{
    public class TicketRepository : BaseRepository<Ticket>, ITicketRepository
    {
        public TicketRepository(VoyagerContext context) : base(context)
        {

        }
    }
}
