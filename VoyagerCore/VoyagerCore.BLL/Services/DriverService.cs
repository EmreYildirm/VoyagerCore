using System;
using System.Collections.Generic;
using System.Linq;
using VoyagerCore.BLL.DTO;
using VoyagerCore.BLL.IServices;
using VoyagerCore.DAL.Entities;
using VoyagerCore.DAL.Repositories;
using VoyagerCore.DAL.UnitOfWork;
using VoyagerCore.Enums;

namespace VoyagerCore.BLL.Services
{
    public class DriverService : IDriverService
    {
        private readonly IDriverRepository _driverRepository;
        private readonly IUnitOfWork _unitOfWork;

        public DriverService(IDriverRepository driverrepository, IUnitOfWork unitOfWork)
        {
            _driverRepository = driverrepository;
            _unitOfWork = unitOfWork;
        }
        public void Add(DriverDTO item)
        {
            try
            {
                var driver = new Driver()
                {
                    Id = item.Id,
                    DateOfBirth = item.DateOfBirth,
                    FirstName = item.FirstName,
                    IdentityNumber = item.IdentityNumber,
                    Gender = (Gender)Enum.Parse(typeof(Gender), item.Gender),
                    LastName = item.LastName,
                    Age = item.Age
                };
                _driverRepository.Add(driver);
                Save();
            }
            catch
            {
                throw new Exception();
            }
        }

        public List<DriverDTO> GetAll()
        {
            var allDriver = _driverRepository.GetAll();
            List<DriverDTO> driverDTOs = new List<DriverDTO>();
            foreach (var item in allDriver)
            {
                var driver = allDriver.SingleOrDefault(d => d.Id == item.Id);
                driverDTOs.Add(new DriverDTO()
                {
                    Id = item.Id,
                    FirstName = item.FirstName,
                    LastName = item.LastName,
                    DateOfBirth = item.DateOfBirth,
                    Gender = item.Gender.ToString(),
                    IdentityNumber = item.IdentityNumber
                });
            }
            return driverDTOs;
        }

        public DriverDTO GetById(int Id)
        {
            var driver = _driverRepository.GetById(Id);
            var driverDTO = new DriverDTO()
            {
                Id = driver.Id,
                FirstName = driver.FirstName,
                LastName = driver.LastName,
                DateOfBirth = driver.DateOfBirth,
                Gender = driver.Gender.ToString(),
                IdentityNumber = driver.IdentityNumber           
            };
            return driverDTO;
        }

        public void Remove(DriverDTO item)
        {
            var driver = new Driver()
            {
                Id = item.Id,
                FirstName = item.FirstName,
                LastName = item.LastName,
                DateOfBirth = item.DateOfBirth,
                Gender = (Gender)Enum.Parse(typeof(Gender), item.Gender),
                IdentityNumber = item.IdentityNumber,
                Age = item.Age
            };
            _driverRepository.Delete(driver);
            Save();
        }

        public void Update(DriverDTO item)
        {
            var driver = new Driver()
            {
                Id = item.Id,
                FirstName = item.FirstName,
                LastName = item.LastName,
                DateOfBirth = item.DateOfBirth,
                Gender = (Gender)Enum.Parse(typeof(Gender), item.Gender),
                IdentityNumber = item.IdentityNumber,
                Age = item.Age
            };
            _driverRepository.Update(driver);
            Save();
        }

        public void Save()
        {
            _unitOfWork.Save();
        }
    }
}
