import FilterContainer from '../containers/FilterContainer.jsx';
import CardContainer from '../containers/CardContainer.jsx';

const Home = () => {
  console.log('');

  return (
    <main>
      <div className="main-container">
        <FilterContainer />
        <CardContainer />
      </div>
    </main>
  );
};

export default Home;
