const PointsComponent = () => (
  <div>
    <span>erferf</span>
    <span>erferge</span>
    <span className="airport-code">ererg</span>
    <img src="../../public/icons/arrow-narrow-right-svgrepo-com.svg" alt="" />

  </div>
);

const DatesComponent = () => (
  <div className="flex flex-row">
    sgsgf
  </div>
);

const AirCarrier = () => (
  <div>
    sdsd
  </div>
);

const Card = () => {
  console.log('');
  return (
    <div className="cardBox flex flex-col">
      <div className="cardHeader flex flex-row">
        <div>
          <img src="" alt="" />
        </div>
        <div className="flex flex-col">
          <p className="cardHeader_price">21500</p>
          <p className="cardHeader_text">Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      <div className="tripBody">
        <PointsComponent />
        <DatesComponent />
        <AirCarrier />
      </div>
      <div className="line" />
      <PointsComponent />
      <DatesComponent />
      <AirCarrier />
      <div className="cardFooter">
        asca
      </div>
    </div>
  );
};

export default Card;