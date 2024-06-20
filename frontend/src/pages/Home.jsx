import FilterContainer from '../containers/FilterContainer';
import Card from '../components/FlyCard.jsx';

const Home = () => {
  console.log('');

  return (
    <main>
      <div>
        <FilterContainer />
        <Card />
      </div>
    </main>
  );
};

export default Home;
