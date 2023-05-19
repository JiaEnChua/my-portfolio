import React, { useRef } from 'react';
import map from 'lodash/map';
import HTMLFlipBook from 'react-pageflip';
import Button from 'react-bootstrap/Button';

import { PROJECTS_DATA } from '../constants';
import './styles.scss';

function MobileComponent() {
  const book = useRef();

  const renderEachProject = ({ youtubeLink, name, desc, techStack }) => (
    <div className='projects__container project_container-mobile'>
      <iframe
        src={youtubeLink}
        allowFullScreen='allowfullscreen'
        title='youtube'
        className='project_iframe-mobile'
      />
      <h3>{name}</h3>
      <br />
      <p>{desc}</p>
      <br />
      <ul>
        {map(techStack, (eachTech, index) => (
          <li key={index}>{eachTech}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className='projects projects-mobile'>
      <h1>Some things I've Built</h1>
      <div className='projects__container'>
        <div className='projects__buttons'>
          <Button
            variant='primary'
            onClick={() => book.current.pageFlip().flipPrev()}
          >
            Prev page
          </Button>
          <Button
            variant='primary'
            onClick={() => book.current.pageFlip().flipNext()}
          >
            Next page
          </Button>
        </div>
        <HTMLFlipBook
          width={300}
          height={500}
          showCover
          ref={book}
          mobileScrollSupport
        >
          {map(PROJECTS_DATA, (eachProj) => (
            <div key={eachProj.youtubeLink}>{renderEachProject(eachProj)}</div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default MobileComponent;
