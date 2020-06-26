import React, { useEffect, useState } from 'react';
import NavBar from "../common/NavBar";
import Header from "../areas/Header";
import Footer from "../areas/Footer";
import { connect } from 'react-redux';
import * as ticketActions from "../../redux/actions/ticketActions";
import '../bus/Bus.css'
import { Link } from 'react-router-dom';


function SellTicket({ capturedTicket, history, ...props }) {
    //const [ticket, setTicket] = useState({ ...props.ticket });
    const expeditionId = props.match.params.id;

    useEffect(() => {
        props.fetchTickets(expeditionId);
    }, [capturedTicket]);

    //useEffect(() => {
    //    setTicket((prevTicket) => ({
    //        ...prevTicket, capturedTicket
    //    }));
    //    console.log(ticket);
    //}, [capturedTicket]);

    function onClickSelect(id) {
        props.getTicket(expeditionId, id);
    };

    return (
        <div className="container">
            <Header />
            <NavBar />
            <h2>Koltuk Seçimi ve Yolcu Bilgileri</h2>
            <div id="busdiv">
                <table className="grid">
                    <tbody>
                        <tr>
                            {props.tickets.map(ticket =>
                                <td key={ticket.id} onClick={(e) => onClickSelect(ticket.id)}  >{ticket.seatNumber}</td>
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link to={`/passengerInfo/${expeditionId}/${capturedTicket.id}`}>
                <button type="button" className="btn btn-outline-info">Go On</button>
            </Link>
            <Footer />
        </div>
    );
}


const mapStateToProps = (state) => ({
    tickets: state.tickets.tickets,
    ticket: state.tickets.ticket,
    capturedTicket: state.tickets.capturedTicket,
});

const mapDispatchToProps = {
    fetchTickets: ticketActions.getTickets,
    getTicket: ticketActions.getByIdTicket,
};

export default connect(mapStateToProps, mapDispatchToProps)(SellTicket);

//<PassengerInfo passenger={props.passenger} createPassenger={props.createPassenger}/*handleChange={handleChangePassenger}*/ sellTicket={handleSell} />

    //function handleSell(event) {
    //    event.preventDefault();
    //    props.sellTicket(expeditionId, props.capturedTicket.id)
    //        .then(() => {
    //            history.push(expeditionId + "/sellticket");
    //        });
    //}