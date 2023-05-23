import React from 'react';
import map from 'lodash/map';
import './Project.css';
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';

function Project({
  youtubeLink,
  name,
  desc,
  techStack,
  githubLink,
  projLink,
  left_or_right,
  even,
}) {
  return (
    <div className={`project ${even}`}>
      <div className='project__left'>
        <iframe
          src={youtubeLink}
          allowFullScreen='allowfullscreen'
          title='youtube'
        ></iframe>
      </div>
      <div className='project__right'>
        <h3 className={`project__rightTitle ${left_or_right}`}>{name}</h3>
        <p className='project__rightDesc'>{desc}</p>
        <div className='project__rightTechStack right'>
          {map(techStack, (eachTech) => (
            <p key={eachTech}>{eachTech}</p>
          ))}
        </div>
        <div className={`project__rightBottom ${left_or_right}`}>
          <a href={githubLink}>
            <GitHubIcon />
          </a>
          <a href={projLink}>
            <LaunchIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
