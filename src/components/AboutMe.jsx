import React, { useState } from 'react';
import js from "../Assets/js.png"
import react from "../Assets/react1.png"
import html from "../Assets/htmml.png"
import css from "../Assets/css.png"
import redux from "../Assets/redux.png"
import boots from "../Assets/boots.png"
import ball from "../Assets/bola.png"
import notebook from "../Assets/notebook.png"



const AboutMe = () => {

  const [education, setEducation] = useState(false)
  const [experience, setExperience] = useState(false)
  const [skills, setSkills] = useState(false)
  const [interest, setInterest] = useState(false)



  const myEducation = () => {
    setEducation(!education)
  }
  // const change = () => {
  //     setExperience(!experience)
  //     setSkills(!skills)
  //     setInterest(!interest)
  // }

  const myExperience = () => {
    setExperience(!experience)
    // setExperience(!education)
    // setSkills(!skills)
    // setInterest(!interest)

  }
  const mySkills = () => {
    setSkills(!skills)
    // setExperience(!experience)
    // setSkills(!education)
    // setInterest(!interest)
  }
  const myInterest = () => {
    setInterest(!interest)
    // setExperience(!experience)
    // setSkills(!skills)
    // setInterest(!education)
  }

  return (

    <section className='hola'>
      <h1>About Me</h1>
      <div className='aboutMe'>
        <div className='aboutPic'>
          <img src='./src/Assets/foto-mia.jpg' className='photo' />
          <div className='ball'>
            {/* <img src={ball} alt="" className='myBall' /> */}
          </div>
        </div>
        <div className='aboutText'>
          <div className="myTxt">
            {/* <img src={notebook} alt="" className='notebook'/> */}
            <p> I am a curious person who has always had desires to discover, which has led me to move constantly, intending to know places, people, and situations that take me out of my comfort zone; Learning in this way to face stress and frustration in a better way.
              <br />
              I have found something that I am passionate about in programming because it allows me to explore and challenge myself to constantly learn new and different things, which helps me not to remain static.
              <br />
              I do my work with love, always trying to go that extra mile so that things turn out better than expected.</p>
          </div>
          <div className='about'>

            <div className="about-box">

              <a href="#table"><button className="about-info " onClick={myEducation}><h4>Education</h4></button></a>
              <a href="#experience"><button className="about-info dos" onClick={myExperience}><h4>Work History</h4></button></a>
              <a href="#skills"><button className="about-info tres" onClick={mySkills}><h4>Skills</h4></button></a>
              <a href="#interest"><button className="about-info cuatro" onClick={myInterest}><h4>Interest</h4></button></a>

            </div>
            <div className='about-resume'>
              <div className="sections">

                <div id='table'>
                  <section>
                    <tr>
                      <td><h4>Academlo</h4></td>
                      <td><p>FullStack Developer</p></td>
                      <td><p>2022</p></td>
                    </tr>
                    <tr>
                      <td><h4>Universidad del Valle</h4></td>
                      <td><p>Foreign Trade</p></td>
                      <td>2015</td>
                    </tr>
                  </section>
                </div>


                <section id='experience'>
                  <p>Currently, I am looking for my first work experience in the programming world. I am very excited and eager to learn and also be able to show what I know to do and everything I've learned in my BootCamp.</p>
                </section>

                <section id='skills'>
                  <div className="allSkills"><img className='skill-img' src={js} alt="" />
                    <p>JavaScript</p>
                  </div>
                  <div className="allSkills"><img src={html} alt="" className="skill-img" />
                    <p>HTML</p>
                  </div>
                  <div className="allSkills"><img src={css} alt="" className="skill-img" />
                    <p>CSS</p>
                  </div>
                  <div className="allSkills"><img src={react} alt="" className="skill-img" />
                    <p>React</p>
                  </div>
                  <div className="allSkills"><img src={redux} alt="" className="skill-img" />
                    <p>Redux</p>
                  </div>
                  {/* <img src={boots} alt="" className="skill-img" /> */}
                </section>
                <section id='interest'>
                  <p>I consider myself a very musical, so I enjoy listening to music and dancing. I'm currently learning to play the sax "it's a lot of fun".
                    Swimming and freediving are the way I have found to enjoy the water. In addition, I volunteer to plant trees, seeking to give our planet a break.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutMe;