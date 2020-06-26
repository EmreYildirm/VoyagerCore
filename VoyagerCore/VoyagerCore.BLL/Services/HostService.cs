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
    public class HostService : IHostService
    {
        private IHostRepository _hostRepository;
        private readonly IUnitOfWork _unitOfWork;

        public HostService(IHostRepository hostRepository, IUnitOfWork unitOfWork)
        {
            _hostRepository = hostRepository;
            _unitOfWork = unitOfWork;
        }
        public void Add(HostDTO item)
        {
            var host = new Host()
            {
                Id = item.Id,
                FirstName = item.FirstName,
                LastName = item.LastName,
                DateOfBirth = item.DateOfBirth,
                Gender = (Gender)Enum.Parse(typeof(Gender), item.Gender),
                IdentityNumber = item.IdentityNumber,
                Age = item.Age
            };
            _hostRepository.Add(host);
            Save();
        }

        public IList<HostDTO> GetAll()
        {
            var allHost = _hostRepository.GetAll();
            List<HostDTO> hostDTOs = new List<HostDTO>();
            foreach (var item in allHost)
            {
                var host = allHost.SingleOrDefault(h => h.Id == item.Id);
                hostDTOs.Add(new HostDTO()
                {
                    Id = item.Id,
                    FirstName = item.FirstName,
                    LastName = item.LastName,
                    DateOfBirth = item.DateOfBirth,
                    Gender = item.Gender.ToString(),
                    IdentityNumber = item.IdentityNumber
                });
            }
            return hostDTOs;
        }

        public HostDTO GetById(int Id)
        {
            var host = _hostRepository.GetById(Id);
            var hostDTO = new HostDTO()
            {
                Id = host.Id,
                FirstName = host.FirstName,
                LastName = host.LastName,
                DateOfBirth = host.DateOfBirth,
                Gender = host.Gender.ToString(),
                IdentityNumber = host.IdentityNumber
            };
            return hostDTO;
        }

        public void Remove(HostDTO item)
        {
            var host = new Host()
            {
                Id = item.Id,
                FirstName = item.FirstName,
                LastName = item.LastName,
                IdentityNumber = item.IdentityNumber,
                DateOfBirth = item.DateOfBirth,
                Gender = (Gender)Enum.Parse(typeof(Gender), item.Gender),
                Age = item.Age
            };
            _hostRepository.Delete(host);
            Save();
        }

        public void Update(HostDTO item)
        {
            var host = new Host()
            {
                Id = item.Id,
                FirstName = item.FirstName,
                LastName = item.LastName,
                DateOfBirth = item.DateOfBirth,
                Gender = (Gender)Enum.Parse(typeof(Gender), item.Gender),
                IdentityNumber = item.IdentityNumber,
                Age = item.Age
            };
            _hostRepository.Update(host);
            Save();
        }

        public void Save()
        {
            _unitOfWork.Save();
        }
    }
}
