import style from "../styles/Services.module.css";
import React from "react";
import Image from "next/image";
import img from "../assets/about-page-header-bg.jpg";
import { LuFileBarChart2 } from "react-icons/lu";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { ImBullhorn } from "react-icons/im";
import {IoPlayCircleOutline} from "react-icons/io5";
import watch from "../assets/services-v2-img2.jpg"
import { TbHomeEdit } from "react-icons/tb";
import brand1 from "../assets/brand-1-1.png";
import brand2 from "../assets/brand-1-2.png";
import brand3 from "../assets/brand-1-3.png";
import brand4 from "../assets/brand-1-4.png";
import brand5 from "../assets/brand-1-5.png";

const page = () => {
  return (
    <div className={style.container}>
      <div className={style.portfolios}>
        <div className={style.portfolio}>
          <h1>Our Service</h1>
          <pre>
            <h2>Home - Our Service</h2>
          </pre>
        </div>
        <div className={style.portfolioImg}>
          <Image className={style.Img} src={img} alt="not fount" />
        </div>

      </div>
       {/* section 2 start */}
       <div className={style.section2}>
        <div className={style.section2heading}>
          <h4>Our Services</h4>
          <div className={style.headingline}></div>
        </div>
        <h2>What We Offer</h2>
        <div className={style.section2ontent}>
          <div className={style.sectioncomponent}>
            <div className={style.service1}>
              <LuFileBarChart2 size={34} />
              <h4>Creative</h4>
              <p>
                Mestib removes the completed marketing reserch abusiness high
                consultations.
              </p>
            </div>
            <div className={style.servicesecond}>
              <RiLightbulbFlashLine size={34} />
              <h4>Marketing</h4>
              <p>
                Mestib removes the completed marketing reserch abusiness high
                consultations.
              </p>
            </div>
          </div>

          <div className={style.service2}>
            <Image src={watch} className={style.cupimage} />
            <div className={style.playbtnset}>
              <IoPlayCircleOutline size={70} className={style.playbtn} />
              <h3>Watch Video</h3>
            </div>
          </div>
          <div className={style.sectioncomponent}>
            <div className={style.service1}>
              <ImBullhorn size={34} />
              <h4>Designing</h4>
              <p>
                Mestib removes the completed marketing reserch abusiness high
                consultations.
              </p>
            </div>
            <div className={style.servicesecond}>
              <TbHomeEdit size={34} />
              <h4>Develop</h4>
              <p>
                Mestib removes the completed marketing reserch abusiness high
                consultations.
              </p>
            </div>
          </div>
        </div>
      </div>
        {/* section 5 start */}

        <div className={style.logoSBatch}>
        <div className={style.logoSBatch2}>
          <Image className={style.batchImg} src={brand1} alt="" />
        </div>
        <div className={style.logoSBatch2}>
          <Image className={style.batchImg} src={brand2} alt="" />
        </div>
        <div className={style.logoSBatch2}>
          <Image className={style.batchImg} src={brand3} alt="" />
        </div>
        <div className={style.logoSBatch2}>
          <Image className={style.batchImg} src={brand4} alt="" />
        </div>
        <div className={style.logoSBatch3}>
          <Image className={style.batchImg} src={brand5} alt="" />
        </div>
      </div>
      {/* section 6 start */}

      <div className={style.section6heading}>
        <div className={style.leftsection}>
          <div className={style.section4heading}>
            <pre>testimonial</pre>
            <div className={style.headingline}></div>
          </div>
          <h1>
            What Our Client<br></br> Says Us
          </h1>
          <p>
            Mestib remove the completed market reserch
            <br /> abusiness high consultations we are proud
            <br /> work hards for business..
          </p>
          <button className={style.section6btn}>View More Details</button>
        </div>
        <div className={style.rightsection}>
          <div className={style.rightfirst1}>
            <h3>1.</h3>
            <div className={style.name}>
              <h2>Aniyan Loinc</h2>
              <h4>Manager</h4>
            </div>

            <p>
              Mestib remove the completed market reserch
              <br /> abusiness high consultations we are proud
              <br /> work hards for business..
            </p>
          </div>
          <div className={style.rightfirst1}>
            <h3>2.</h3>
            <div className={style.name}>
              <h2>Radico monir</h2>
              <h4>Founder</h4>
            </div>
            <div>
              <p>
                Mestib remove the completed market reserch
                <br /> abusiness high consultations we are proud
                <br /> work hards for business..
              </p>
            </div>
          </div>
          <div className={style.rightfirst1}>
            <h3>2.</h3>
            <div className={style.name}>
              <h2>Jason Buttler</h2>
              <h4>Designer</h4>
            </div>
            <div>
              <p>
                Mestib remove the completed market reserch
                <br /> abusiness high consultations we are proud
                <br /> work hards for business..
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default page;
