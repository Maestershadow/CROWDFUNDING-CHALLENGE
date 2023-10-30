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
        <div className='card-div'>
          <div className='hovering-card'>
            <ProjectCard />
            </div>
          <BackersCard />
          <AboutCard />
        </div>
          
      </main> 
    </>
     
  )
}

export default App
