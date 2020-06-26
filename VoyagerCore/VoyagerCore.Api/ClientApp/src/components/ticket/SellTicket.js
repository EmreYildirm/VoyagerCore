import React, { useEffect, useState } from 'react';
import NavBar from "../common/NavBar";
import Header from "../areas/Header";
import Footer from "../areas/Footer";
import { connect } from 'react-redux';
import * as ticketActions from "../../redux/actions/ticketActions";
import '../bus/Bus.css'
import * as passengerActions from '../../redux/actions/passengerActions';
import PassengerInfo from '../passenger/PassengerInformation';


function SellTicket({ capturedTicket, history, ...props }) {
    const expeditionId = props.match.params.id;

    const [passenger, setPassenger] = useState({ ...props.passenger })

    useEffect(() => {
        props.fetchTickets(expeditionId);
        setPassenger({ ...props.passenger });
    }, []);

    useEffect(() => {
    }, [capturedTicket]);

    function handleChange(event) {
        debugger;
        const { name, value } = event.target;
        setPassenger((prevPassenger) => ({
            ...prevPassenger,
            [name]: name === "name" ? value : value,
            [name]: name === "lastName" ? value : value,
            [name]: name === "age" ? value : value,
        }));
    }


    function handleSubmit() {
        debugger;
        props.createPassenger(passenger).
            then(() => {
                props.sellTicket(expeditionId, capturedTicket.id).
                    then(() => {
                        history.push("/home")
                    });
            });
    }

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
            <form>
                <div>
                    <PassengerInfo passenger={props.passenger} onChange={handleChange} />
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-success btn-lg">
                    İşlem
            </button>
            </form>
            <Footer />
        </div>
    );
}


const mapStateToProps = (state) => ({
    tickets: state.tickets.tickets,
    ticket: state.tickets.ticket,
    capturedTicket: state.tickets.capturedTicket,
    passenger: state.passengers.newPassenger,
});

const mapDispatchToProps = {
    fetchTickets: ticketActions.getTickets,
    getTicket: ticketActions.getByIdTicket,
    sellTicket: ticketActions.sellTicket,
    createPassenger: passengerActions.saveNewPassenger,
};

export default connect(mapStateToProps, mapDispatchToProps)(SellTicket);
