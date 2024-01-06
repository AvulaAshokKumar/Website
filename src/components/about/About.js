import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About</h2>
    
    <div className='container about_container'>
      <div className='about_me'>
      <div className='about_me-image'>
        <img src={ME} alt='About Image' />
        </div>  
      </div>
          
       <div className='about_content'>
       <div className='about_cards'>
        <article className='about_card'>
        <FaAward className='about_icon' />
          <h5>Experience</h5>
          <small>1+ Years working</small>
        </article>

        <article className='about_card'>
        <FiUsers className='about_icon' />
          <h5>Clients</h5>
          <small>200+ Worldwide</small>
        </article>

        <article className='about_card'>
        <VscFolderLibrary className='about_icon' />
          <h5>Projects</h5>
          <small>80+ Completed</small>
        </article>
       </div>
<p>GCM® Tech Solutions is a well diversified leading company, offering a wide variety of 
  customized solutions and services for the Businesses, Financial, Medical, Information & Technology;
   Bio Medical other Biological and Non Biological needs for the given society. By knowing and
    identifying the current nature of the future coming problems. </p>
<a href='#contact' className='btn btn-primary'>Let's talk</a>
       </div>
     
    </div>

   </section>
  )
}
export default About
