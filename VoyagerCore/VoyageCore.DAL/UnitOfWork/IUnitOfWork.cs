using System;
using System.Collections.Generic;
using System.Text;

namespace VoyagerCore.DAL.UnitOfWork
{
    public interface IUnitOfWork /*: IDisposable*/
    {
        void Save();
    }
}
