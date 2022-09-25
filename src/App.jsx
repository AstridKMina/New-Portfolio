import { useState } from 'react'
import './App.css'
import "./contact.css"
import './About.css'
import "./work.css"
import "./Do.css"
import girl from "../src/Assets/tec.png"
import dog from "../src/Assets/dog.png"
// import plant from "../src/Assets/plant.png"
import AboutMe from './components/AboutMe'
import Work from './components/Work'
import Do from './components/Do'
import Contact from './components/Contact'

function App() {

  return (

    <div className="App">

      {/* sections */}

      <div className="sections">

        {/* section 1 */}

        <section className='profile'>
          <div className="profile-up">
            <div className="navBar">
              <button><p>About me</p></button>
              <button><p>Can I do</p></button>
              <button><p>My Works</p></button>
              <button><p>Contact</p></button>
              <button><p>CV</p></button>
            </div>
          </div>
          <div className="profile-down">
            <div className='myProfile'>
              <div className='profile-name profile-box'>
                <h1>Hello, I'm Astrid</h1>
              </div>
              <div className='profile-job profile-box'>
                <h2> Frontend Developer </h2>
              </div>
              <div className='profile-description profile-box'>
                <p> I'm ready to develop the web interfaces that people want to see!</p>
              </div>
            </div>
            <div className='picture'>
              <img className='girl' src={girl} alt="girl-developer" />
              <img className='dog' src={dog} alt="dog" />
              {/* <img  className='plant' src={plant} alt="plant" /> */}
              {/* <div className='back'></div> */}
            </div>
          </div>


        </section>

        {/* section 2 */}


        <AboutMe />


        {/*  Section 3 */}
        <section >
          <Do />
        </section>

        {/* Section 4 */}

      
          <Work />
        
        <section>
          <Contact />
        </section>
      </div>
    </div >
  )
}

export default App
