/* eslint-disable prefer-destructuring */
import { MoveRight, Clock4, RussianRuble } from 'lucide-react';
import klmLogo from '../assets/img/klm.png';
import airfranceLogo from '../assets/img/Airfrance_Logo.svg.png';
import aeroflotLogo from '../assets/img/aeroflot.png';
import turkishLogo from '../assets/img/turk.png';
import finnairLogo from '../assets/img/Finnair-01.png';
import airBalticLogo from '../assets/img/Air_Baltic.png';
import alitaliaLogo from '../assets/img/alitalia.png';
import pegasusLogo from '../assets/img/pegasus.png';
import brusselsLogo from '../assets/img/brussels.png';
import loLogo from '../assets/img/LO.png';

const logoPath = {
  KL: klmLogo,
  AF: airfranceLogo,
  SU: aeroflotLogo,
  TK: turkishLogo,
  AY: finnairLogo,
  BT: airBalticLogo,
  AZ: alitaliaLogo,
  PC: pegasusLogo,
  SN: brusselsLogo,
  LO: loLogo,
};

const totalDurationStr = (totalMinutes) => {
  const hours = Math.round(totalMinutes / 60);
  const minutes = totalMinutes % hours;
  return `${hours} ч ${minutes} мин`;
};

const PointsComponent = ({
  fromAirport,
  fromCity,
  fromAirportCode,
  toAirport,
  toCity,
  toAirportCode,
}) => (
  <div className="points-box px-15 bottom-border card-section ml-10 py-10">
    <span className="">{`${fromCity}, `}</span>
    <span className="mr-5">{fromAirport}</span>
    <span className="airport-code mr-10">{`(${fromAirportCode})`}</span>
    <MoveRight color="#476ad1" size={20} className="arrow-icon mr-10" />
    <span className="">{`${toCity}, `}</span>
    <span className="mr-5">{toAirport}</span>
    <span className="airport-code">{`(${toAirportCode})`}</span>
  </div>
);

const IsTransferComponrnt = () => (
  <div className="mb-5 flex flex-row line-box">
    <div className="centred-line" />
    <div className="transfer-text">1 пересадка</div>
    <div className="centred-line" />
  </div>
);

const IsNotTransferComponent = () => (
  <div className="is-not-transfer-line" />
);

const DatesComponent = ({
  dateFrom,
  timeFrom,
  dateTo,
  timeTo,
  duration,
  isTransfer,

}) => (
  <div className="">
    <div className="date-box flex flex-row px-15 ml-10 py-10 mr-10">
      <div>
        <span className="mr-5">{timeFrom}</span>
        <span className="date">{dateFrom}</span>
      </div>
      <div>
        <Clock4 className="clock-item mr-5 flex flex-row" size={16} />
        <span>{duration}</span>
      </div>
      <div>
        <span className="date mr-5">{dateTo}</span>
        <span>{timeTo}</span>
      </div>
    </div>
    {isTransfer ? <IsTransferComponrnt /> : <IsNotTransferComponent />}
  </div>
);

const AirCarrier = ({ airCarrier }) => (
  <div className="py-10 aircarrier">
    <p className="px-15">{`Рейс выполняет: ${airCarrier}`}</p>
  </div>
);

const Card = ({ params }) => {
  const { tripParams, refundParams } = params;
  return (
    <div className="cardBox flex flex-col">
      <div className="cardHeader flex flex-row px-15">
        <img className="logo-carrier" src={logoPath[tripParams.airlineCode]} alt="" />
        <div className="flex flex-col price-info">
          <div className="cardHeader_price flex flex-row">
            <span className="cardHeader_price_amount">{tripParams.totalPrice}</span>
            <span>
              <RussianRuble size={20} strokeWidth={1.5} />
            </span>
          </div>
          <p className="cardHeader_price_text">Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      <div className="tripBody">
        <PointsComponent
          fromAirport={tripParams.fromAirport}
          fromCity={tripParams.fromCity}
          fromAirportCode={tripParams.fromAirportCode}
          toAirport={tripParams.toAirport}
          toCity={tripParams.toCity}
          toAirportCode={tripParams.toAirportCode}
        />
        <DatesComponent
          dateFrom={tripParams.dateFrom}
          timeFrom={tripParams.timeFrom}
          dateTo={tripParams.dateTo}
          timeTo={tripParams.timeTo}
          duration={totalDurationStr(tripParams.totalDuration)}
          isTransfer={tripParams.isTransfer}
        />
        <AirCarrier airCarrier={tripParams.carrier} />
      </div>
      <div className="between-tickets-line" />
      <PointsComponent
        fromAirport={refundParams.fromAirport}
        fromCity={refundParams.fromCity}
        fromAirportCode={refundParams.fromAirportCode}
        toAirport={refundParams.toAirport}
        toCity={refundParams.toCity}
        toAirportCode={refundParams.toAirportCode}
      />
      <DatesComponent
        dateFrom={refundParams.dateFrom}
        timeFrom={refundParams.timeFrom}
        dateTo={refundParams.dateTo}
        timeTo={refundParams.timeTo}
        duration={totalDurationStr(refundParams.totalDuration)}
        isTransfer={refundParams.isTransfer}
      />
      <AirCarrier airCarrier={tripParams.carrier} />
      <button type="button" className="cardFooter flex flex-row">
        Выбрать
      </button>
    </div>
  );
};

export default Card;
