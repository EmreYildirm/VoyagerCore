using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.BLL.DTO;

namespace VoyagerCore.BLL.IServices
{

    public interface IBusService
    {
        BusDTO GetById(int Id);
        List<BusDTO> GetAll();
        void Add(BusDTO item);
        void Update(BusDTO item);
        void Remove(BusDTO item);
        void Save();
    }
}
