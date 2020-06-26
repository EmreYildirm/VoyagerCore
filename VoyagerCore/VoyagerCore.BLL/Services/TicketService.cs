using AutoMapper;
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
    public class TicketService : ITicketService
    {
        private ITicketRepository _ticketRepository;
        private IPassengerService passengerService;
        private IExpeditionService expeditionService;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public TicketService(ITicketRepository ticketRepository, IUnitOfWork unitOfWork, IExpeditionService expeditionService,
            IPassengerService passengerService)
        {
            _ticketRepository = ticketRepository;
            _unitOfWork = unitOfWork;
            this.expeditionService = expeditionService;
            this.passengerService = passengerService;
        }



        public void SellTicket(int expeditionId, int ticketId)
        {
            var expeditionStore = expeditionService.GetAll();
            var expedition = expeditionStore.FirstOrDefault(e => e.Id == expeditionId);
            var ticket = expedition.Tickets.FirstOrDefault(t => t.Id == ticketId);
            var passenger = passengerService.GetAll().LastOrDefault();

            if (ticket.isSold == false)
            {
                ticket.isSold = true;
                ticket.Passenger = passenger;
                Ticket soldTicket = _mapper.Map<Ticket>(ticket);
                _ticketRepository.Add(soldTicket);
                Save();
            }
        }
        public List<TicketDTO> GetAllTickets(int expeditionId)
        {
            var expeditionStore = expeditionService.GetAll();
            var expedition = expeditionStore.FirstOrDefault(e => e.Id == expeditionId);
            var allTickets = expedition.Tickets;
            List<TicketDTO> ticketDTOs = new List<TicketDTO>();
            foreach (var item in allTickets)
            {
                TicketDTO ticket = _mapper.Map<TicketDTO>(item);
                ticketDTOs.Add(ticket);
            }
            return ticketDTOs;
        }

        public void Save()
        {
            _unitOfWork.Save();
        }
        //public void CancelTicket(TicketDTO item)
        //{
        //    Ticket ticket = new Ticket()
        //    {
        //        ExpeditionCode = item.ExpeditionCode,
        //        Id = item.Id,
        //        PaidAmount = item.PaidAmount,
        //        PassengerIdentityNumber = item.PassengerIdentityNumber,
        //        PassengerName = item.Passenger.FirstName,
        //        SeatNumber = item.SeatInformation.SeatNumber,
        //        PassengerLastName = item.Passenger.LastName
        //    };
        //    _ticketRepository.Add(ticket);
        //}

        //public decimal GetPriceOfTicket(TicketDTO item, RouteDTO route)
        //{
        //    if (item.Expedition.Bus.BusType == BusType.Standard)
        //    {
        //        if (item.SeatInformation.SeatNumber % 3 == 1)
        //        { return route.BasePrice * item.StandardBusBusinessRoutePrice; }
        //        else
        //        { return route.BasePrice * item.StandardBusEconomySeatRoutePrice; }
        //    }
        //    else
        //    {
        //        return route.BasePrice * item.LuxuryBusRoutePrice;
        //    }
        //}

        //public SeatInformationDTO GetSeatInformationbyLuxuryBus(int seatNumber)
        //{
        //    SeatCategory sCategory = new SeatCategory();
        //    SeatSection sSection = new SeatSection();

        //    if (seatNumber % 2 == 1)
        //    {
        //        sCategory = SeatCategory.Singular;
        //        sSection = SeatSection.LeftSide;
        //    }
        //    else
        //    {
        //        sCategory = SeatCategory.Singular;
        //        sSection = SeatSection.LeftSide;
        //    }

        //    SeatInformationDTO seatInformation = new SeatInformationDTO(seatNumber, sSection, sCategory);
        //    return seatInformation;
        //}

        //public SeatInformationDTO GetSeatInformationbyStandardBus(int seatNumber)
        //{
        //    SeatCategory sCategory = new SeatCategory();
        //    SeatSection sSection = new SeatSection();


        //    if (seatNumber % 3 == 1)
        //    {
        //        sCategory = SeatCategory.Singular;
        //        sSection = SeatSection.LeftSide;
        //    }
        //    else if (seatNumber % 3 == 2)
        //    {
        //        sCategory = SeatCategory.Corridor;
        //        sSection = SeatSection.RightSide;
        //    }
        //    else
        //    {
        //        sCategory = SeatCategory.Window;
        //        sSection = SeatSection.RightSide;
        //    }

        //    SeatInformationDTO seatInformation = new SeatInformationDTO(seatNumber, sSection, sCategory);
        //    return seatInformation;
        //}

        //public bool IsSeatAvailableForStandardBus(TicketDTO item, PassengerDTO gender)
        //{
        //    int seatNumber = item.SeatInformation.SeatNumber;
        //    var tickets = GetAllTickets();
        //    int nextSeatIndex = -1;
        //    if (IsSeatEmpty(seatNumber) && GetSeatInformationbyStandardBus(item.SeatInformation.SeatNumber).Section == SeatSection.RightSide)
        //    {
        //        int adjacentSeatNumber = seatNumber % 3 == 2 ? seatNumber + 1 : seatNumber - 1;
        //        for (int i = 0; i < tickets.Count; i++)
        //        {
        //            if (tickets[i].SeatInformation.SeatNumber == adjacentSeatNumber)
        //            {
        //                nextSeatIndex = i;
        //                continue;
        //            }
        //        }
        //    }
        //    if (nextSeatIndex == -1 && IsSeatEmpty(seatNumber))
        //        return true;
        //    else if (IsSeatEmpty(seatNumber) && tickets[nextSeatIndex].Passenger.Gender == gender.Gender)
        //        return true;
        //    else
        //        return false;
        //}


        //public bool IsSeatAvailableForLuxuryBus(TicketDTO item)
        //{
        //    return IsSeatEmpty(item.SeatInformation.SeatNumber);
        //}
        //public bool IsFeeEnough(PassengerDTO person, RouteDTO route, TicketDTO item)
        //{
        //    return person.fee >= GetPriceOfTicket(item, route) ? true : false;
        //}

        //public bool IsSeatEmpty(int seatNumber)
        //{
        //    var tickets = GetAllTickets();
        //    for (int i = 0; i < tickets.Count; i++)
        //    {
        //        if (tickets[i].SeatInformation.SeatNumber == seatNumber)
        //        { return false; }
        //    }
        //    return true;
        //}

    }
}
