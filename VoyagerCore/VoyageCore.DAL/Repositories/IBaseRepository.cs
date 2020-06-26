using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace VoyagerCore.DAL.Repositories
{
    public interface IBaseRepository<T> where T : class
    {
        T GetById(object EntityId);
        List<T> GetAll(Expression<Func<T, bool>> Filter = null);
        void Add(T Entity);
        void Update(T Entity);
        void Delete(T Entity);
    }
}
