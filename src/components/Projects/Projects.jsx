import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';

import classes from './Projects.module.css';
import bookheap from '../images/bookheap.png';
import chess from '../images/chess.png';
import travel from '../images/travel-log.png';
import definition from '../images/definition.png';
import memes from '../images/memes.png';
import superhero from '../images/superhero.png';
import monorepo from '../images/monorepo.png';
import profilee from '../images/profilee.png';
import courseApp from '../images/courseApp.png';
import chatGPT from '../images/chatGPT.png';
import challenges from '../images/frontend-challenges.png';
import github from '../images/github.png';
import frontenddev from '../images/frontenddev.jpg';
import jumpstart from '../images/jumpstart.png';

// Web projects
const webItem = [
  {
    link: 'https://www.profilee.info/',
    title: 'Profilee - An OS link in bio',
    techStack: 'Tech Stack: Next JS, Tailwind, Typescript, Prisma, AWS S3',
    desc: 'Profilee is an open source profile link bio page builder',
    image: profilee,
    color: '#0FFFFF',
    githubLink: 'https://github.com/mittalsam98/profilee'
  },
];

const androidAppItems = [
  {
    link: 'https://play.google.com/store/apps/details?id=com.thesachin.your_dictionary',
    title: 'Definition Finder',
    techStack: 'Tech Stack: Flutter',
    desc: 'Definition Finder is absolutely free online dictionary with every word you look up. Millions of definitions from the most trusted source.',
    image: definition,
    color: '#CBD18F',
    githubLink:
      ''
  },
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
      <ul className={classes.cards}>
        {androidAppItems.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      {/* </ScrollAnimation> */}
    </div>
  );
}
