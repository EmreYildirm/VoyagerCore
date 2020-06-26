using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.DAL.Entities;
using VoyagerCore.DAL.Repositories;

namespace VoyagerCore.DAL.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {

        private bool disposed = false;
        private VoyagerContext _dbContext;
        public UnitOfWork(VoyagerContext dbContext)
        {
            _dbContext = dbContext;
        }
        public VoyagerContext DbContext
        {
            get
            {
                return _dbContext;
            }
        }
        public void Save()
        {
            try
            {
                DbContext.SaveChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        //protected virtual void Dispose(bool disposing)
        //{
        //    if (!this.disposed)
        //    {
        //        if (disposing)
        //        {
        //            _dbContext.Dispose();
        //        }
        //    }

        //    this.disposed = true;
        //}
        //public void Dispose()
        //{
        //    Dispose(true);
        //    GC.SuppressFinalize(this);
        //}

    }
}
