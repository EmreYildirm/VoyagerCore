using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.BLL.DTO;

namespace VoyagerCore.BLL.IServices
{
    public interface IDriverService
    {
        DriverDTO GetById(int Id);
        List<DriverDTO> GetAll();
        void Add(DriverDTO item);
        void Update(DriverDTO item);
        void Remove(DriverDTO item);
    }
}
