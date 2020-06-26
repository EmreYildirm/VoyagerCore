using AutoMapper;
using System;
using System.Collections.Generic;
using VoyagerCore.BLL.DTO;
using VoyagerCore.BLL.IServices;
using VoyagerCore.DAL.Entities;
using VoyagerCore.DAL.Repositories;
using VoyagerCore.DAL.UnitOfWork;

namespace VoyagerCore.BLL.Services
{
    public class ExpeditionService : IExpeditionService
    {
        private readonly IMapper _mapper;
        private readonly IExpeditionRepository _expeditionRepository;
        private readonly IUnitOfWork _unitOfWork;

        public ExpeditionService(IExpeditionRepository expeditionRepository, IUnitOfWork unitOfWork, IMapper mapper)
        {
            _expeditionRepository = expeditionRepository;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        //TO-DO
        //public event CodeGeneratorHandler CodeGenerated;
        public List<ExpeditionDTO> GetAllWithDateTime(string dateTime)
        {
            var date = Convert.ToDateTime(dateTime).Date;
            var allExpedition = GetAll();
            var getExps = allExpedition.FindAll(e => e.DepartureDate == date);
            return getExps;
        }
        public List<ExpeditionDTO> GetAll()
        {
            var allExpedition = _expeditionRepository.GetAll();
            List<ExpeditionDTO> expeditionDTOs = new List<ExpeditionDTO>();
            foreach (var item in allExpedition)
            {
                var departureTime = item.DepartureTime;
                HostDTO Host = _mapper.Map<HostDTO>(item.Host);
                DriverDTO Driver = _mapper.Map<DriverDTO>(item.Driver);
                RouteDTO Route = _mapper.Map<RouteDTO>(item.Route);
                BusDTO Bus = _mapper.Map<BusDTO>(item.Bus);
                expeditionDTOs.Add(new ExpeditionDTO(Bus, Route, Host, Driver, departureTime)
                {
                    Id = item.Id
                });
            }
            return expeditionDTOs;
        }
        public void Add(ExpeditionDTO item)
        {
            try
            {
                Host Host = _mapper.Map<Host>(item.Host); ;
                Driver Driver = _mapper.Map<Driver>(item.Driver);
                Route Route = _mapper.Map<Route>(item.Route);
                Bus Bus = _mapper.Map<Bus>(item.Bus);
                List<Ticket> TicketList = _mapper.Map<List<Ticket>>(item.Tickets);
                var expedition = new Expedition()
                {
                    Id = item.Id,
                    Host = Host,
                    Driver = Driver,
                    Tickets = TicketList,
                    Bus = Bus,
                    Route = Route,
                    BusId = item.Bus.Id,
                    RouteId = item.Route.Id,
                    DepartureTime = item.DepartureDate,
                    ArrivalTime = item.ArrivalTime,
                    Code = item.Code,
                    DriverId= item.Driver.Id,
                    HostId = item.Host.Id
                };
                _expeditionRepository.Add(expedition);
                Save();
            }
            catch(Exception ex)
            {
                throw ex;
            }

        }

        public void Save()
        {
            _unitOfWork.Save();
        }

        //public void AddBus(BusDTO bus)
        //{
        //    throw new NotImplementedException();
        //}

        //public void AddDriver(DriverDTO driver)
        //{
        //    throw new NotImplementedException();
        //}

        //public void AddHost(HostDTO host)
        //{
        //    throw new NotImplementedException();
        //}

        //public string CodeGenerator(RouteDTO route,ExpeditionDTO ex,BusDTO bus)
        //{ 
        //    Random rnd = new Random();
        //    var code = Convert.ToString(rnd.Next(1000, 9999));
        //    string result = "";
        //    result = route.DepartureLocation[0] + ex.DepartureTime.ToString("yyyyMMdd") + "-";
        //    if (bus.BusType == BusType.Luxury)
        //        result += "LX-";
        //    else if (bus.BusType == BusType.Standard)
        //        result += "ST-";
        //    result += code;
        //    return result;
        //}

        

        //public ExpeditionDTO GetById(int Id)
        //{
        //    var expedition = _expeditionRepository.GetById(Id);
        //    var expeditionDTO = new ExpeditionDTO()
        //    {
        //        Id = expedition.Id,
        //        DepartureTime = expedition.DepartureTime,
        //        EstimatedDepartureTime = expedition.EstimatedDepartureTime,
        //        HasSnackService = expedition.HasSnackService,
        //        Drivers = expedition.Drivers.Cast<DriverDTO>().ToList(),
        //        Hosts = expedition.Hosts.Cast<HostDTO>().ToList(),
        //        Tickets = expedition.Tickets.Cast<TicketDTO>().ToList()
        //    };
        //    return expeditionDTO;
        //}

        //public void Remove(ExpeditionDTO item)
        //{
        //    var expedition = new Expedition()
        //    {
        //        Id = item.Id,
        //        BusId = item.Bus.Id,
        //        DepartureTime = item.DepartureTime,
        //        EstimatedArrivalTime = item.EstimatedArrivalTime,
        //        EstimatedDepartureTime = item.EstimatedDepartureTime,
        //        HasSnackService = item.HasSnackService,
        //        RouteId = item.Route.Id,
        //        Drivers = item.Drivers.Cast<Driver>().ToList(),
        //        Hosts = item.Hosts.Cast<Host>().ToList(),
        //        Tickets = item.Tickets.Cast<Ticket>().ToList()
        //    };
        //    _expeditionRepository.Delete(expedition);
        //}

        //public void RemoveBus(BusDTO bus)
        //{
        //    throw new NotImplementedException();
        //}

        //public void RemoveDriver(DriverDTO driver)
        //{
        //    throw new NotImplementedException();
        //}

        //public void RemoveHost(HostDTO host)
        //{
        //    throw new NotImplementedException();
        //}

        //public void Update(ExpeditionDTO item)
        //{
        //    var expedition = new Expedition()
        //    {
        //        Id = item.Id,
        //        BusId = item.Bus.Id,
        //        RouteId = item.Route.Id,
        //        DepartureTime = item.DepartureTime,
        //        EstimatedArrivalTime = item.EstimatedArrivalTime,
        //        EstimatedDepartureTime = item.EstimatedDepartureTime,
        //        HasSnackService = item.HasSnackService,
        //        Drivers = item.Drivers.Cast<Driver>().ToList(),
        //        Hosts = item.Hosts.Cast<Host>().ToList(),
        //        Tickets = item.Tickets.Cast<Ticket>().ToList()
        //    };
        //    _expeditionRepository.Update(expedition);
        //}
    }
}
