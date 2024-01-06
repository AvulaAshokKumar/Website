import React from 'react'
import './services.css'
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id='services'>
      <h5>What I oofer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
          <BiCheck className='service_list-icon'/>
          <p>Worked in web portal team building UI components using React JS and React Hooks.</p>
          </li>

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Portfolio of design projects</p>
          </li>

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Familiar with React JS workflows</p>
          </li>

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Worked with React Router for managing navigationacross different screens.</p>
          </li>

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Worked in improving product stability and performance to seamlessly load and render documents to providebetter user experience</p>
          </li>
           

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Good time-management skills</p>
          </li>


              
          </ul> 
        </article>


        {/* /* ======= UI/UX END ========= */ }
        

        <article className='service'>
          <div className='service_head'>
            <h3>web Developement</h3>
          </div>
          <ul className='service_list'>
            <li>
          <BiCheck className='service_list-icon'/>
          <p>Designing and building responsive and mobile-friendly websites </p>
          </li>

          <li>
          <BiCheck className='service_list-icon'/>
          <p> using languages such as HTML, CSS, XML, and JavaScript</p>
          </li>

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Implementing and maintaining website content management systems</p>
          </li>

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Troubleshooting and debugging issues to ensure websites are functioning correctly</p>
          </li>

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Staying up-to-date with the latest web technologies </p>
          </li>
           

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Creating and managing databases for website functionality</p>
          </li>



           
          <li>
          <BiCheck className='service_list-icon'/>
          <p>Maintaining and updating existing websites</p>
          </li>
    
          </ul> 
        </article>

       
       
       {/* /* ======= Web Developement END ========= */ }
        
      

       <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
          <BiCheck className='service_list-icon'/>
          <p>Worked in web portal team building UI components using React JS and React Hooks.</p>
          </li>

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Portfolio of design projects</p>
          </li>

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Familiar with React JS workflows</p>
          </li>

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Worked with React Router for managing navigationacross different screens.</p>
          </li>

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Worked in improving product stability and performance to seamlessly load and render documents to providebetter user experience</p>
          </li>
           

          <li>
          <BiCheck className='service_list-icon'/>
          <p>Good time-management skills</p>
          </li>


              
          </ul> 
        </article>


      </div>
    </section>
  )
}
export default Services
