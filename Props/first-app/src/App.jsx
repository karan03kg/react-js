import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
function App() {
  return (
    <>
      <Navbar/>
      <div className='cards'>
        <Card title=" Card 1" description="This is card1 description" />
        <Card title=" Card 2" description="This is card2 description" />
        <Card title=" Card 3" description="This is card3 description" />
        <Card title=" Card 4" description="This is card4 description" />
      </div>
      <Footer/>
    </>
  )
}

export default App
