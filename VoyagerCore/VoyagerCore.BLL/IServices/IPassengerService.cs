using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.BLL.DTO;

namespace VoyagerCore.BLL.IServices
{
    public interface IPassengerService
    {
        PassengerDTO GetById(int Id);
        IList<PassengerDTO> GetAll();
        void Add(PassengerDTO item);
        void Update(PassengerDTO item);
        void Remove(PassengerDTO item);
    }
}
