using Microsoft.Extensions.Caching.Memory;
using System.Collections.Generic;
using System.Linq;
using VoyageCore.DAL.Repositories;
using VoyagerCore.BLL.DTO;
using VoyagerCore.BLL.IServices;
using VoyagerCore.DAL.Entities;
using VoyagerCore.DAL.Repositories;
using VoyagerCore.DAL.UnitOfWork;

namespace VoyagerCore.BLL.Services
{
    public class BusService : IBusService
    {
        private readonly IBusRepository _busrepository;
        private readonly IUnitOfWork _unitOfWork;

        public BusService(IBusRepository busrepository, IUnitOfWork unitOfWork)
        {
            _busrepository = busrepository;
            _unitOfWork = unitOfWork;
        }
        public void Add(BusDTO item)
        {
            var bus = new Bus()
            {
                Id = item.Id,
                Plate = item.Plate,
                Make = item.Make,
                SeatCount = item.SeatCount
            };
            _busrepository.Add(bus);
            Save();
        }

        public List<BusDTO> GetAll()
        {
            var allBus = _busrepository.GetAll();
            List<BusDTO> busDTOs = new List<BusDTO>();
            foreach (var item in allBus)
            {
                var bus = allBus.SingleOrDefault(b => b.Id == item.Id);
                busDTOs.Add(new BusDTO()
                {
                    Id = item.Id,
                    Make = item.Make,
                    Plate = item.Plate
                });
            }
            return busDTOs;
        }

        public BusDTO GetById(int Id)
        {
            var bus = _busrepository.GetById(Id);
            var busDTO = new BusDTO()
            {
                Id = bus.Id,
                Make = bus.Make,
                Plate = bus.Plate
            };
            return busDTO;
        }

        public void Remove(BusDTO busDTO)
        {
            var bus = new Bus()
            {
                Id = busDTO.Id,
                Make = busDTO.Make,
                Plate = busDTO.Plate,
                SeatCount = busDTO.SeatCount
            };
            _busrepository.Delete(bus);
            Save();
        }

        public void Save()
        {
            _unitOfWork.Save();
        }

        public void Update(BusDTO item)
        {
            var bus = new Bus()
            {
                Id = item.Id,
                Make = item.Make,
                Plate = item.Plate
            };
            _busrepository.Update(bus);
            Save();
        }
    }
}
