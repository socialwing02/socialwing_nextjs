import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';


export default function FooterImage() {
  return (
    <div>
      <video src="/socialwing_footer.mp4" className='border-2 ' autoPlay controls>sw</video>
        
      <WhatsAppIcon />
       <FacebookIcon />
       <InstagramIcon />
       <YouTubeIcon />
       <LinkedInIcon />
       <XIcon />
    </div>
  )
}
