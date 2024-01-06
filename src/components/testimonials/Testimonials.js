import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'



// import required modules
import { Pagination} from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
  avatar: AVTR1,
  name:  'Tina Snow',
  review: 'Today’s Business world relies more on the technology than ever before.The usage of technology either directly or indirectly will affect sales starts from the individual to'
  }, 
  {
    avatar: AVTR2,
    name:  'Shatta Wale',
    review: 'The Biomedical research means a medical research for the wellbeingness of the living Organisms,This is both basic research, and applied research' 
  },
  {
    avatar: AVTR3,
    name:  'Kwame Despite',
    review: 'The GCM® Tech Solutions is a first choice to bring a cost effective and time save solutions for the both Administrative '
    },

    {
      avatar: AVTR4,
      name:  'Nana Ama McBrown',
      review: 'The GCM® Tech Solutions is providing the procurement services to the employers / vendors / Third party with a full-experienced service personnel resource’s that'
      },

              
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper  className='container testimonials_container'
      modules={[Pagination]}
      spaceBetween={440}
      slidesPerview={1}
      pagination={{ clickable: true }}>
        
        {
          data.map(({avatar, name,review}, index )=> {
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className='client_avatar'>
                <img src={avatar} />
              </div>
              <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
               {review}
                </small>
            </SwiperSlide>

            )
          }
            )
        }


{/* 
        <article className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR2} alt='Avatar one' />
          </div>
          <h5 className='client_name'>Ernest</h5>
            <small className='client_review'>
            The Biomedical research means a medical research for the wellbeingness of the living Organisms.
             This is both basic research, and applied research,
            </small>
        </article>



        <article className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR3} alt='Avatar one' />
          </div>
          <h5 className='client_name'>Ernest</h5>
            <small className='client_review'>
            The GCM® Tech Solutions is a first choice to bring a cost effective and time 
            save solutions for the both Administrative 
            </small>
        </article>



        <article className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR4} alt='Avatar one' />
          </div>
          <h5 className='client_name'>Ernest</h5>
            <small className='client_review'>
            The GCM® Tech Solutions is providing the procurement services to the 
            employers / vendors / Third party with a full-experienced service personnel resource’s that
            </small>
        </article> */}



      </Swiper >
    </section>
  )
}

export default Testimonials
