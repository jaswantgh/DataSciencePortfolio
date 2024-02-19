import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard1 from "../../components/experienceCard/ExperienceCard";
import {otherExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (otherExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Other Experiences</h1>
              <div className="experience-cards-div">
                {otherExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard1
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        footer: card.footerLink,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                        
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
