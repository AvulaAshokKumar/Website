import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { RiDribbbleLine } from "react-icons/ri";
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com' target='_blank'><IoLogoGithub /></a>
        <a href='https://dribbble.com' target='_blank'><RiDribbbleLine /></a>
    </div>
  )
}

export default HeaderSocials
