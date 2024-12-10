import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQEolpWhXa12_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718305124794?e=1739404800&v=beta&t=CXyPnbR3UgUJvm6WQYUdJ2FOInbRM9sDSBfAjv6RXes" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MitsuSarkar" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mitsusarkar" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:sumitsarkar2222@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
          </div>
          <h1>Sumit Sarkar</h1>
          <p>Finance Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/MitsuSarkar" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mitsusarkar" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:sumitsarkar2222@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Main;