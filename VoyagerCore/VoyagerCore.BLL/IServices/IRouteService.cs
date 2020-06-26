using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.BLL.DTO;

namespace VoyagerCore.BLL.IServices
{
    public interface IRouteService
    {
        void Add(RouteDTO item);
        IList<RouteDTO> GetAllRoutes();
        RouteDTO GetById(int Id);
        void Update(RouteDTO item);
        void Remove(RouteDTO item);
    }
}