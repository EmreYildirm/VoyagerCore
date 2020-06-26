using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.BLL.DTO;

namespace VoyagerCore.BLL.IServices
{
    public interface IHostService
    {
        HostDTO GetById(int Id);
        IList<HostDTO> GetAll();
        void Add(HostDTO item);
        void Update(HostDTO item);
        void Remove(HostDTO item);
    }
}
