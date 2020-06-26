//import PassengerInfo from "../passenger/PassengerInformation";

//class Bus extends React.Component {
//  constructor(props) {
//    super(props);
//      this.state = {
//          seats: [
//              { id: 1, seatnumber: 1, side: "left" },
//              { id: 2, seatnumber: 2, side: "left" },
//              { id: 3, seatnumber: 3, side: "left"},
//              { id: 4, seatnumber: 4, side: "left"},
//              { id: 5, seatnumber: 5, side: "left"},
//              { id: 6, seatnumber: 6, side: "left"},
//              { id: 7, seatnumber: 7, side: "left"},
//              { id: 8, seatnumber: 8, side: "left"},
//              { id: 9, seatnumber: 9, side: "left"},
//              { id: 10, seatnumber: 10, side: "left" },
//              { id: 11, seatnumber: 11, side: "left" },
//              { id: 12, seatnumber: 12, side: "left"},
//              { id: 13, seatnumber: 13, side: "left"},
//              { id: 14, seatnumber: 14, side: "left" },
//              { id: 15, seatnumber: 15, side: "left"},
//              { id: 16, seatnumber: 16, side: "left"},
//              { id: 17, seatnumber: 17, side: "left"},
//              { id: 18, seatnumber: 18, side: "left" },
//              { id: 19, seatnumber: 19, side: "left" },
//              { id: 20, seatnumber: 20, side: "left" },
//              { id: 21, seatnumber: 21, side: "left"},
//          ]
//      };
//    }
//    //renderleftseats() {
//    //    return this.state.leftseats.map((seat) => {
//    //        const { seatnumber } = seat;
//    //        return (
//    //            <tr>
//    //                <td>{seatnumber}</td>
//    //            </tr>
//    //        );
//    //    });
//    //}
//    //renderrightseats() {
//    //    return this.state.rightseats.map((seat) => {
//    //        const { seatnumber } = seat;
//    //        return (
//    //            <tr>
//    //                <td>{seatnumber}</td>
//    //            </tr>
//    //        );
//    //    });
//    //}
//    //rendermiddleseats() {
//    //    return this.state.middleseats.map((seat) => {
//    //        const { seatnumber } = seat;
//    //        return (
//    //            <tr>
//    //                <td key={seatnumber} onClick={(e) => this.onClickSeat(seatnumber)}>
//    //                    {seatnumber}
//    //                </td>
//    //            </tr>
//    //        );
//    //    });
//    //}

//    render() {
//        return (
//            <div className="container">
//                <Header />
//                <NavBar />
//                <h2>Koltuk Seçimi ve Yolcu Bilgileri</h2>
//                <div id="busdiv">
//                    <table className="grid">
//                        <tbody>
//                            <tr>
//                                {this.state.seats.map(seat =>
//                                    <td key={seat.id}>{seat.seatnumber}</td>
//                                    )}
//                            </tr>
//                        </tbody>
//                    </table>
//                </div>
//                <div id="passengerinfodiv">
//                    <PassengerInfo />
//                </div>
//                <Footer />
//            </div>
//        )
//    }
//}
//export default Bus;
////    <table id="leftseatsstyle" className="grid">
////    <tbody>{this.renderleftseats()}</tbody>
////    </table>
////    <table id="middleseatsstyle" className="grid">
////        <tbody>{this.rendermiddleseats()}</tbody>
////    </table>
////    <table id="rightseatsstyle" className="grid">
////        <tbody>{this.renderrightseats()}</tbody>
////    </table>