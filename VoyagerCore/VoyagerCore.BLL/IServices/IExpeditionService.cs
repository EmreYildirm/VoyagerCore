using System;
using System.Collections.Generic;
using System.Text;
using VoyagerCore.BLL.DTO;

namespace VoyagerCore.BLL.IServices
{
    public interface IExpeditionService
    {
        //ExpeditionDTO GetById(int Id);
        List<ExpeditionDTO> GetAllWithDateTime(string expeditionDate);
        List<ExpeditionDTO> GetAll();
        void Add(ExpeditionDTO item);
        //void Update(ExpeditionDTO item);
        //void Remove(ExpeditionDTO item);
    }
}
