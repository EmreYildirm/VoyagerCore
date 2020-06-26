using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using VoyagerCore.BLL.DTO;
using VoyagerCore.BLL.IServices;
using VoyagerCore.DAL.Entities;
using VoyagerCore.DAL.Repositories;
using VoyagerCore.DAL.UnitOfWork;
using VoyagerCore.Enums;

namespace VoyagerCore.BLL.Services
{
    public class PassengerService : IPassengerService
    {
        private IPassengerRepository _passengerRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PassengerService(IPassengerRepository passengerRepository, IUnitOfWork unitOfWork)
        {
            _passengerRepository = passengerRepository;
            _unitOfWork = unitOfWork;
        }

        public void Add(PassengerDTO item)
        {
            var passenger = new Passenger()
            {
                Id = item.Id,
                FirstName = item.FirstName,
                LastName = item.LastName,
                DateOfBirth = item.DateOfBirth,
                Gender = (Gender)Enum.Parse(typeof(Gender), item.Gender),
                IdentityNumber = item.IdentityNumber,
                Age = item.Age
            };
            _passengerRepository.Add(passenger);
            Save();
        }

        public IList<PassengerDTO> GetAll()
        {
            var allPassenger = _passengerRepository.GetAll();
            List<PassengerDTO> passengerDTOs = new List<PassengerDTO>();
            foreach (var item in allPassenger)
            {
                var passenger = allPassenger.SingleOrDefault(p => p.Id == item.Id);
                passengerDTOs.Add(new PassengerDTO()
                {
                    Id = item.Id,
                    FirstName = item.FirstName,
                    LastName = item.LastName,
                    DateOfBirth = item.DateOfBirth,
                    Gender = item.Gender.ToString(),
                    IdentityNumber = item.IdentityNumber
                });
            }
            return passengerDTOs;
        }

        public PassengerDTO GetById(int Id)
        {
            var host = _passengerRepository.GetById(Id);
            var passengerDTO = new PassengerDTO()
            {
                Id = host.Id,
                FirstName = host.FirstName,
                LastName = host.LastName,
                DateOfBirth = host.DateOfBirth,
                Gender = host.Gender.ToString(),
                IdentityNumber = host.IdentityNumber
            };
            return passengerDTO;
        }

        public void Remove(PassengerDTO item)
        {
            var passenger = new Passenger()
            {
                Id = item.Id,
                FirstName = item.FirstName,
                LastName = item.LastName,
                DateOfBirth = item.DateOfBirth,
                Gender = (Gender)Enum.Parse(typeof(Gender), item.Gender),
                IdentityNumber = item.IdentityNumber,
                Age = item.Age
            };
            _passengerRepository.Delete(passenger);
            Save();
        }

        public void Update(PassengerDTO item)
        {
            var passenger = new Passenger()
            {
                Id = item.Id,
                FirstName = item.FirstName,
                LastName = item.LastName,
                DateOfBirth = item.DateOfBirth,
                Gender = (Gender)Enum.Parse(typeof(Gender), item.Gender),
                IdentityNumber = item.IdentityNumber,
                Age = item.Age
            };
            _passengerRepository.Update(passenger);
            Save();
        }

        public void Save()
        {
            _unitOfWork.Save();
        }
    }
}
