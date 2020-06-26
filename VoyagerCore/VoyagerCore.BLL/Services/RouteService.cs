using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using VoyagerCore.BLL.DTO;
using VoyagerCore.BLL.IServices;
using VoyagerCore.DAL.Entities;
using VoyagerCore.DAL.Repositories;
using VoyagerCore.DAL.UnitOfWork;

namespace VoyagerCore.BLL.Services
{
    public class RouteService : IRouteService
    {
        private IRouteRepository _routeRepository;
        private readonly IUnitOfWork _unitOfWork;

        public RouteService(IRouteRepository routeRepository, IUnitOfWork unitOfWork)
        {
            _routeRepository = routeRepository;
            _unitOfWork = unitOfWork;
        }
        public void Add(RouteDTO item)
        {
            var route = new Route()
            {
                Id = item.Id,
                Name = item.Name,
                ArrivalLocation = item.ArrivalLocation,
                DepartureLocation = item.DepartureLocation,
                Distance = item.Distance,
                BasePrice = item.BasePrice,
                BreakCount = item.BreakCount,
                Duration = item.Duration
            };
            _routeRepository.Add(route);
            Save();
        }

        public IList<RouteDTO> GetAllRoutes()
        {
            var allRoute = _routeRepository.GetAll();
            List<RouteDTO> routeDTOs = new List<RouteDTO>();
            foreach (var item in allRoute)
            {
                var route = allRoute.SingleOrDefault(r => r.Id == item.Id);
                routeDTOs.Add(new RouteDTO()
                {
                    Id = item.Id,
                    ArrivalLocation = item.ArrivalLocation,
                    DepartureLocation = item.DepartureLocation,
                    Distance = item.Distance,
                });
            }
            return routeDTOs;
        }

        public RouteDTO GetById(int Id)
        {
            var route = _routeRepository.GetById(Id);
            var routeDTO = new RouteDTO()
            {
                Id = route.Id,
                ArrivalLocation = route.ArrivalLocation,
                DepartureLocation = route.DepartureLocation,
                Distance = route.Distance
            };
            return routeDTO;
        }

        public void Remove(RouteDTO item)
        {
            var route = new Route()
            {
                Id = item.Id,
                Name = item.Name,
                ArrivalLocation = item.ArrivalLocation,
                DepartureLocation = item.DepartureLocation,
                Distance = item.Distance,
                BasePrice = item.BasePrice,
                BreakCount = item.BreakCount,
                Duration = item.Duration
            };
            _routeRepository.Delete(route);
            Save();
        }

        public void Update(RouteDTO item)
        {
            var route = new Route()
            {
                Id = item.Id,
                Name = item.Name,
                ArrivalLocation = item.ArrivalLocation,
                DepartureLocation = item.DepartureLocation,
                Distance = item.Distance,
                BasePrice = item.BasePrice,
                BreakCount = item.BreakCount,
                Duration = item.Duration
            };
            _routeRepository.Update(route);
            Save();
        }

        public void Save()
        {
            _unitOfWork.Save();
        }
    }
}
