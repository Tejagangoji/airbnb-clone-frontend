import './Footer.css';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function FooterBottom() {
    return (
         <div className="footer-bottom">
        <div className="flex-left">
          <p>@2024 Airbnb, Inc.</p>
          <p>.</p>
          <p>Privacy</p>
          <p>.</p>
          <p>Terms</p>
          <p>.</p>
          <p>Sitemap</p>
          <p>.</p>
          <p>Company details</p>
          
        </div>
        <div style={{display: 'flex'}}>
          <LanguageIcon />
          <span className='textEnglish'>English (IN)</span>
          <span className='textINR'>₹ INR</span>
          <div className="socialmediaContainer">
            <button className='socialmedia'><FacebookIcon /></button>
            <button className='socialmedia'><XIcon /></button>
            <button className='socialmedia'><InstagramIcon /></button>
          </div>
        </div>
      </div>
    );
}