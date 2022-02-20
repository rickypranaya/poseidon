// import Stats from '../components/Stats';
import Undervalued from '../components/undervalued';
import Header from '../components/Header';
import Collection from '../components/topCollection';

function Home(props) {
  return (
    <div className="bg-dark-darkest min-h-screen h-full">
      {/* =============== SECOND PHASE ===============
      <Stats />
      <Header />
    ============================================ */}
    <Undervalued />
   <Collection />
    </div>
  );
}

export default Home;
