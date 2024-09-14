import React from "react";
import style from "../styles/About.module.css";
import Image from "next/image";
import img from "../assets/about-page-header-bg.jpg";
import brand1 from "../assets/brand-1-1.png";
import brand2 from "../assets/brand-1-2.png";
import brand3 from "../assets/brand-1-3.png";
import brand4 from "../assets/brand-1-4.png";
import brand5 from "../assets/brand-1-5.png";
import design from "../assets/about-advantages-v1-img3.jpg";
import design2 from "../assets/about-advantages-v1-img4.jpg";
import team1 from "../assets/about-team-v1-img1.jpg";
import team2 from "../assets/about-team-v1-img2.jpg";
import team3 from "../assets/about-team-v1-img3.jpg";
import { FaLongArrowAltUp } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.abouts}>
        <div className={style.about}>
          <h1>About Us</h1>
          <pre>
            <h2>Home - About Us</h2>
          </pre>
        </div>
        <div className={style.aboutImg}>
          <Image className={style.Img} src={img} alt="not fount" />
        </div>
      </div>

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

      <div className={style.designCreativity}>
        <div className={style.designCreativityImg}>
          <div className={style.designImg2}>
            <div className={style.showMore2}>
              <h5>SHOW ALL MORE</h5>
              <div className={style.line}></div>
            </div>
            <Image className={style.img} src={design} alt="not found" />
          </div>

          <div className={style.designContent}>
            <div className={style.advantages}>
              <h1>advantages</h1>
              <div className={style.line}></div>
            </div>
            <div className={style.designBeauty}>
              <h1>Design</h1>
              <h2>Creatively</h2>
              <h1>Beauty</h1>
              <p>
                {" "}
                Mestib ulligula. remove the politices for this projects
                marketing reserch abusiness high levels process we try to best
                consultations
              </p>

              <div className={style.btn}>
                <button>VIEW MORE</button>
              </div>
            </div>
          </div>

          <div className={style.designImg3}>
            <div className={style.showMore2}>
              <h5>SHOW ALL MORE</h5>
              <div className={style.line}></div>
            </div>
            <Image className={style.img} src={design2} alt="not found" />
          </div>
        </div>
      </div>

      <div className={style.discoverAwards}>
        <div className={style.discoverAward}>
          <div className={style.discoveContent}>
            <div className={style.discoveContent2}>
              <div className={style.discoveContent23}>
                <h2>we proud that</h2>
                <div className={style.line}></div>
              </div>
              <h1>Discover Our Awards</h1>
            </div>
            <div className={style.discoveContent2Icons}>
              <div className={style.discoveContent2Icon}>
                <FaLongArrowAltUp className={style.discoveIcon} />
              </div>
              <div className={style.discoveContent2Icon}>
                <FaLongArrowAltUp className={style.discoveIcon2} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.discoverSliders}>
        <div className={style.discoverSlider}>
          <div className={style.discoverSliderIcon}>
            <GrSettingsOption />
          </div>
          <div className={style.discoverSliderIcon}>
            <GrSettingsOption />
          </div>
          <div className={style.discoverSliderIcon}>
            <GrSettingsOption />
          </div>
        </div>

        <div className={style.dicoverHrs}>
          <div className={style.dicoverLine}>
            <div className={style.dicoverHr}>
              <div className={style.dicoverHr1}>
                <div className={style.dicoverHrNum}>
                  <h2>1</h2>
                </div>
              </div>
              <div className={style.dicoverHr1}>
                <div className={style.dicoverHrNum}>
                  <h2>2</h2>
                </div>
              </div>
              <div className={style.dicoverHr1}>
                <div className={style.dicoverHrNum}>
                  <h2>3</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.discoverSlider}>
          <div className={style.discoverSliderContent}>
            <h5>2012 - 2023</h5>
            <h2>Best Development Awards</h2>
            <div className={style.discoverSliderDribble}>
              <h3>DRIBBLE AWARD</h3>
              <div className={style.discLine}></div>
            </div>
          </div>

          <div className={style.discoverSliderContent}>
            <h5>2012 - 2023</h5>
            <h2>Best Development Awards</h2>
            <div className={style.discoverSliderDribble}>
              <h3>DRIBBLE AWARD</h3>
              <div className={style.discLine}></div>
            </div>
          </div>
          <div className={style.discoverSliderContent}>
            <h5>2012 - 2023</h5>
            <h2>Best Development Awards</h2>
            <div className={style.discoverSliderDribble}>
              <h3>DRIBBLE AWARD</h3>
              <div className={style.discLine}></div>
            </div>
          </div>
        </div>
      </div>
         ///////////////////////
      <div className={style.ourTeams}>
        <div className={style.ourTeam}>
          <div className={style.ourTeamContent}>
            <div className={style.ourProfessionals}>
              <div className={style.ourProfessional}>
                <h3>our professionals</h3>
                <div className={style.line}></div>
              </div>
              <h1>Dedicated Our Team</h1>
            </div>

            <div className={style.btn}>
              <button>VIEW MORE DEATAILS</button>
            </div>
          </div>

          <div className={style.ourTeamImgs}>
            <div className={style.ourTeamImg}>
              <Image className={style.ourTeamImg1} src={team1} />
            </div>
            <div className={style.ourTeamImg}>
              <Image className={style.ourTeamImg2} src={team2} />
            </div>
            <div className={style.ourTeamImg}>
              <Image className={style.ourTeamImg3} src={team3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
