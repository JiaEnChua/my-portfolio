import React from 'react';

import Project from '../Project';
import './styles.scss';

function DesktopComponent() {
  return (
    <div className='projects'>
      <h1>Some things I've Built</h1>
      <div className='projects__container'>
        <Project
          youtubeLink={'https://www.youtube.com/embed/YKlenuIY43s'}
          name={'Amazon Clone'}
          desc={
            'Generate Stripe API Client secret everytime the cart item detail changes by utilizing Firebase Cloud function and express server. Achieved real time transaction system with billing records stored in Stripe. Order details per user is also stored in Firestore and displayed in order page descendingly based on Order date.'
          }
          techStack={
            <div className={`project__rightTechStack right`}>
              <p>ReactJs</p>
              <p>Stripe API</p>
              <p>Firestore</p>
              <p>FireBase Cloud Function</p>
            </div>
          }
          githubLink={'https://github.com/JiaEnChua/amazon-clone'}
          projLink={'https://clone-b869b.web.app/'}
        />
        <Project
          youtubeLink={'https://www.youtube.com/embed/Oao8jitcgts'}
          name={'WhatsApp Clone'}
          desc={
            'WhatsApp web app allows multiple users to join and create chatroom. Only chatroom creator can delete chatroom. Authentication feature built with Firebase Google Auth. Chatroom and message data stored in Firestore and rendered out on snapshot.'
          }
          techStack={
            <div className={`project__rightTechStack left`}>
              <p className='left'>ReactJs</p>
              <p className='left'>Google Auth</p>
              <p className='left'>Firestore</p>
              <p className='left'>FireBase Hosting</p>
            </div>
          }
          githubLink={'https://github.com/JiaEnChua/whatsapp-clone-web'}
          projLink={'https://whatsapp-clone-25743.web.app/'}
          left_or_right={'left'}
          even={'even'}
        />
        <Project
          youtubeLink={'https://www.youtube.com/embed/J28DN2sKI5s'}
          name={'YelpCamp'}
          desc={
            "Served as a platform for camping lovers to share their experiences and reviews about campsites all around the world. Features include: Account authentication Campgrounds show page Post and comment assiociate to user account Edit and delete personal's post/comment."
          }
          techStack={
            <div className={`project__rightTechStack`}>
              <p>NodeJs</p>
              <p>PassportJs</p>
              <p>MongoDB</p>
              <p>Heroku</p>
            </div>
          }
          githubLink={'https://github.com/JiaEnChua/yelpCamp'}
          projLink={'https://fierce-ravine-37991.herokuapp.com/'}
        />
      </div>
    </div>
  );
}

export default DesktopComponent;
