import React, { Component } from 'react';
import classes from './Education.module.css';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <span className={classes.head}>SKILLS & EDUCATION</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Elsa Science <span>Sept 2022 - Dec 2023</span>
                      </h2>
                      <p>
fgfjjf jjfjfjjf jfjjfjjf jjfjfjfj jfjfjjfj
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Makerere University <span>2011-2014</span>
                      </h2>
                      <p>
                        Bsc Software Engineering
                      </p>
                    </div>
                  </article>
                  {/*<article className={classes.timeline_entry}>*/}
                  {/*  <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>*/}
                  {/*    <FaSchool />*/}
                  {/*  </div>*/}
                  {/*  <div className={classes.label}>*/}
                  {/*    <h2>*/}
                  {/*      Higher Education <span>2014-2016</span>*/}
                  {/*    </h2>*/}
                  {/*    <p>*/}
                  {/*      I have completed my higher education from HKIS with major subjects as*/}
                  {/*      Physics,Chemistry & Maths with 85% merit in CBSE board.{' '}*/}
                  {/*    </p>*/}
                  {/*  </div>*/}
                  {/*</article>*/}
                  {/* </ScrollAnimation> */}

                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Internship</h2>
                      <p>Completed one month Internship in React Js with Internity Foundation</p>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Education;
