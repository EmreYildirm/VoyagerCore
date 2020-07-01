using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.DAL.Entities;

namespace VoyagerCore.DAL.Repositories
{
    public class SoldTicketRepository : BaseRepository<SoldTicket>, ISoldTicketRepository
    {
        public SoldTicketRepository(VoyagerContext context) : base(context)
        {

        }
    }
}
