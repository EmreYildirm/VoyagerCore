using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;

namespace VoyagerCore.DAL.Repositories
{
    public abstract class BaseRepository<T> where T : class
    {
        private readonly VoyagerContext _context;
        protected VoyagerContext context { get { return _context; } }
        protected BaseRepository(VoyagerContext dbContext)
        {
            _context = dbContext;
        }
        public virtual void Add(T Entity)
        {
            _context.Add<T>(Entity);
            //_context.SaveChanges();
        }

        public virtual void Delete(T Entity)
        {
            _context.Set<T>().Remove(Entity);
            //_context.SaveChanges();
        }

        public virtual List<T> GetAll(Expression<Func<T, bool>> Filter = null)
        {
            return _context.Set<T>().ToList();
        }

        public virtual T GetById(object EntityId)
        {
            var propInfo = GetIdPropInfo();
            return _context.Set<T>().SingleOrDefault(x => (int)propInfo.GetValue(x) == (int)EntityId);
        }

        public virtual void Update(T Entity)
        {
            _context.Entry<T>(Entity).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            //_context.SaveChanges();
        }
        private PropertyInfo GetIdPropInfo()
        {
            var type = typeof(T);
            var result = "Id";
            return type.GetProperty(result);
        }
    }
}
