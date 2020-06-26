using AutoMapper;
using VoyagerCore.BLL.DTO;
using VoyagerCore.DAL.Entities;

namespace VoyagerCore.BLL
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //Driver
            CreateMap<DriverDTO, Driver>();
            CreateMap<Driver, DriverDTO>();
            //Host
            CreateMap<HostDTO, Host>();
            CreateMap<Host, HostDTO>();
            //Expedition
            CreateMap<ExpeditionDTO, Expedition>();
            CreateMap<Expedition, ExpeditionDTO>();
            //Bus
            CreateMap<BusDTO, Bus>();
            CreateMap<Bus, BusDTO>();
            //Route
            CreateMap<RouteDTO, Route>();
            CreateMap<Route, RouteDTO>();
            //Passenger
            CreateMap<PassengerDTO, Passenger>();
            CreateMap<Passenger, PassengerDTO>();
            //Ticket
            CreateMap<TicketDTO, Ticket>();
            CreateMap<Ticket, TicketDTO>();
        }
    }
}