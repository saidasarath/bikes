import "../styles/aboutus.css"
import React from 'react';
import t1 from "../assets/img.jpg"
import t2 from "../assets/124.jpg"
import t3 from "../assets/125.jpg"
import t4 from "../assets/126.jpg"
import t5 from "../assets/127.jpg"
const AboutUs = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container">
        <div className="responsive-container-block leftSide">
          <p className="text-blk heading">
            Meet Our Creative Team
          </p>
          <p className="text-blk subHeading">
            Semaj Africa is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in digital marketing, Accounting, Web development, Programming. Multimedia and CAD design.
          </p>
        </div>
        <div className="responsive-container-block rightSide">
          <img className="number1img" src={t1} alt="Creative Team 1" />
          <img className="number2img" src={t3} alt="Creative Team 2" />
          <img className="number3img" src={t2}alt="Creative Team 3" />
          <img className="number5img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png" alt="Customer Support" />
          
          <img className="number7img" src={t4} alt="Creative Team 4" />
          <img className="number6img" src={t5}alt="Creative Team 5" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
