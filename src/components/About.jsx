import React from 'react';
import './About.scss'

const About = ({ aboutMe }) => {
    return (
      <div>
        <div className="about card">
          {aboutMe.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <p>{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default About;
