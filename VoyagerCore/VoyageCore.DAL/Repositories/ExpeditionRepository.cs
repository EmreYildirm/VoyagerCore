﻿using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.DAL.Entities;

namespace VoyagerCore.DAL.Repositories
{
    public class ExpeditionRepository : BaseRepository<Expedition>, IExpeditionRepository
    {
        public ExpeditionRepository(VoyagerContext context) : base(context)
        {

        }
    }
}
