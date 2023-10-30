import './App.css'
import Heading from './components/header/Header'
import ProjectCard from './components/cards/ProjectCard'
import BackersCard from './components/cards/BackersCard'
import AboutCard from './components/cards/AboutCard'

function App() {

  return (
    <>
      <Heading />
      <main className='main-container'>
        <div className='covering-container'>
          <div className='card-div'>
            <ProjectCard />
            <BackersCard />
            <AboutCard />
          </div>
        </div>

      </main>
    </>

  )
}

export default App
