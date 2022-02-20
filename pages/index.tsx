import Stats from '../components/stats'
import Undervalued from '../components/undervalued'
import Header from '../components/Header'
import Collection from '../components/topCollection'

function Home() {
  return (
    <div className="h-full min-h-screen bg-dark-darkest">
      <Stats />
      <Undervalued />
      <Collection />
    </div>
  )
}

export default Home
