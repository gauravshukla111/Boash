"use client";
import React, { useState, useEffect } from "react";
import style from "../app/styles/Home.module.css";
import Image from "next/image";
import Overlay from "./assets/slider-v2-img4.jpg";
import {
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
  IoPlayCircleOutline,
} from "react-icons/io5";
import { LuFileBarChart2 } from "react-icons/lu";
import { RiLightbulbFlashLine } from "react-icons/ri";
import cup from "./assets/services-v2-img1.jpg";
import { ImBullhorn } from "react-icons/im";
import { TbHomeEdit } from "react-icons/tb";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import brand1 from "./assets/brand-1-1.png";
import brand2 from "./assets/brand-1-2.png";
import brand3 from "./assets/brand-1-3.png";
import brand4 from "./assets/brand-1-4.png";
import brand5 from "./assets/brand-1-5.png";
import team1 from "./assets/team-v2-img1.jpg";
import team2 from "./assets/team-v2-img2.jpg";
import team3 from "./assets/team-v2-img3.jpg";
import team4 from "./assets/team-v2-img4.jpg";
import blog1 from "./assets/blog-v2-img1.jpg";
import blog2 from "./assets/blog-v2-img2.jpg";
import { CiPlay1 } from "react-icons/ci";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [counterOn, setcounterOn] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      number: "01",
      description:
        "Mestib remove the policies project completed marketing research business high level process consultations for the best highest growths.",
      title: "Digital Marketing",
      subtitle: "Solutions",
    },
    {
      id: 2,
      number: "02",
      description:
        "Comprehensive strategies to maximize online presence and drive targeted results for clients with the best approach.",
      title: "SEO Strategy",
      subtitle: "Optimization",
    },
    {
      id: 3,
      number: "03",
      description:
        "We help brands build their identity online with creative solutions to engage more customers.",
      title: "Creative Designs",
      subtitle: "Innovation",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  const handleBack = () => {
    setActiveSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
  };

  const handleNext = () => {
    setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
  };

  return (
    <>
      <div className={style.homemain}>
        <div className={style.leftside}>
          <div className={style.number}>
            <h3>{slides[activeSlide].number}</h3>
            <div className={style.line}></div>
          </div>
          <p>{slides[activeSlide].description}</p>
          <a href="#">Get In Touch</a>
          <div className={style.leftimage} data-aos="fade-right">
            <Image data-aos="fade-right" src={Overlay} alt="Overlay" />
          </div>
        </div>

        <div className={style.rightside}>
          <div className={style.arrowicon}>
            <div onClick={handleBack}>
              <IoArrowBackCircleOutline size={70} className={style.prevarrow} />
            </div>
            <div onClick={handleNext}>
              <IoArrowForwardCircleOutline size={70} />
            </div>
          </div>
          <div className={style.rightdtl}>
            <h2>{slides[activeSlide].title}</h2>
            <h3>{slides[activeSlide].subtitle}</h3>
          </div>
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
            <Image src={cup} className={style.cupimage} />
            <div className={style.playbtnset}>
              <CiPlay1 size={50} className={style.playbtn} />
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

      {/* section 3 start */}
      {/* <CountUp start={0} end={100} duration={2} delay={0}/> */}
      <div className={style.section3}>
        <div className={style.section3component}>
          <div className={style.comp1}>
            <h4>1.</h4>
            <ScrollTrigger
              onEnter={() => setcounterOn(true)}
              onExit={() => setcounterOn(false)}
            >
              <h1>
                {counterOn && (
                  <CountUp start={0} end={4000} duration={2} delay={0} />
                )}
                +
              </h1>
            </ScrollTrigger>
          </div>
          <p>
            Satisfied clients in our
            <br />
            company
          </p>
        </div>
        <div className={style.section3component}>
          <div className={style.comp1}>
            <h4>2.</h4>
            <ScrollTrigger
              onEnter={() => setcounterOn(true)}
              onExit={() => setcounterOn(false)}
            >
              <h1>
                {counterOn && (
                  <CountUp start={0} end={301} duration={2} delay={0} />
                )}
                +
              </h1>
            </ScrollTrigger>
          </div>
          <p>
            Working hours were the
            <br />
            spent
          </p>
        </div>
        <div className={style.section3component}>
          <div className={style.comp1}>
            <h4>3.</h4>
            <ScrollTrigger
              onEnter={() => setcounterOn(true)}
              onExit={() => setcounterOn(false)}
            >
              <h1>
                {counterOn && (
                  <CountUp start={0} end={2000} duration={2} delay={0} />
                )}
                +
              </h1>
            </ScrollTrigger>
          </div>
          <p>
            Successful our projects
            <br />
            completed
          </p>
        </div>
        <div className={style.section3component}>
          <div className={style.comp1}>
            <h4>4.</h4>
            <ScrollTrigger
              onEnter={() => setcounterOn(true)}
              onExit={() => setcounterOn(false)}
            >
              <h1>
                {counterOn && (
                  <CountUp start={0} end={813} duration={2} delay={0} />
                )}
                +
              </h1>
            </ScrollTrigger>
          </div>
          <p>
            Our latest expert team
            <br />
            members
          </p>
        </div>
      </div>

      {/* section 4 start */}

      <div className={style.section4}>
        <div className={style.section4style}>
          <div className={style.section4heading}>
            <pre>latest project</pre>
            <div className={style.headingline}></div>
          </div>
          <h2>Our Working Gallery</h2>
        </div>
        <div className={style.section4arrowicons}>
          <GoArrowUpLeft className={style.leftarrow} />
          <GoArrowUpRight className={style.rightarrow} />
        </div>
      </div>
      <div className={style.sliderContainer}>
        <Slider {...settings}>
          <div className={style.slideimagesfirst}>
            <div className={style.hovercontent}>
              <p>
                Bussiness Idea
                <br />
                Super Experiance
              </p>
            </div>
          </div>
          <div className={style.slideimagessecond}>
            <div className={style.hovercontent}>
              <p>
                Bussiness Idea
                <br />
                Super Experiance
              </p>
            </div>
          </div>
          <div className={style.slideimagesthird}>
            <div className={style.hovercontent}>
              <p>
                Bussiness Idea
                <br />
                Super Experiance
              </p>
            </div>
          </div>
          <div className={style.slideimagesfourth}>
            <div className={style.hovercontent}>
              <p>
                Bussiness Idea
                <br />
                Super Experiance
              </p>
            </div>
          </div>
        </Slider>
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
      {/* start 7 start */}
      <div className={style.section7}>
        <div className={style.section7head}>
          <div>
            <div className={style.section4heading}>
              <pre>testimonial</pre>
              <div className={style.headingline}></div>
            </div>
            <h1>Meet Our Experts</h1>
          </div>
          <button>View More Details</button>
        </div>
        <div className={style.section7images}>
          <div className={style.firstimage}>
            <Image src={team1} />
            <h2>Alrans Mit</h2>
            <p>DESIGNER</p>
          </div>
          <div className={style.firstimage}>
            <Image src={team2} />
            <h2>Alrans Mit</h2>
            <p>DESIGNER</p>
          </div>
          <div className={style.firstimage}>
            <Image src={team3} />
            <h2>Alrans Mit</h2>
            <p>DESIGNER</p>
          </div>
          <div className={style.firstimage}>
            <Image src={team4} />
            <h2>Alrans Mit</h2>
            <p>DESIGNER</p>
          </div>
        </div>
      </div>

      {/* section 8 start */}
      <div className={style.section8}>
        <div className={style.firstof8}>
          <div>
            <div className={style.section4heading}>
              <pre>pricing plan</pre>
              <div className={style.headingline}></div>
            </div>
            <h1 className={style.heading8th}>
              Explore Our Digital
              <br />
              Pricing
            </h1>
          </div>

          <p>
            Mestib removes the completed market reserches our
            <br /> abusiness high consultations we are prouds of the
            <br /> work hards for business..
          </p>
        </div>
        <div className={style.listof8th}>
          <div className={style.dtlof8thfirst}>
            <h2>
              $150 <span>/monthly</span>
            </h2>
            <p>Standard</p>
          </div>
          <div className={style.dtlof8thsecond}>
            <h4>Up to 100 keyphrases optimized</h4>
            <p>
              Mestib removes the completed markete reserches our
              <br /> work hards for business..
            </p>
          </div>
          <div>
            <button className={style.section8btn}>Choose Your Plan</button>
          </div>
        </div>
        <div className={style.listof8th}>
          <div className={style.dtlof8thfirst}>
            <h2>
              $170 <span>/monthly</span>
            </h2>
            <p>premium</p>
          </div>
          <div className={style.dtlof8thsecond}>
            <h4>Content marketing assets:4</h4>
            <p>
              Mestib removes the completed markete reserches our
              <br /> work hards for business..
            </p>
          </div>
          <div>
            <button className={style.section8btn}>Choose Your Plan</button>
          </div>
        </div>
      </div>

      {/* section 9 start */}

      <div className={style.section9}>
  <div className={style.marketingText}>
    <span>MARKETING MARKETING MARKETING MARKETING</span>
    <span>MARKETING MARKETING MARKETING MARKETING</span>
  </div>
</div>

      {/* section10 start */}
      <div className={style.section10}>
        <div className={style.firstof8}>
          <div>
            <div className={style.section4heading}>
              <pre>new updates</pre>
              <div className={style.headingline}></div>
            </div>
            <h1 className={style.heading8th}>Latest Our Blogs</h1>
          </div>

          <p>
            Mestib removes the completed market reserches our
            <br /> abusiness high consultations we are prouds of the
            <br /> work hards for business..
          </p>
        </div>
        <div className={style.containerof10th}>
          <div className={style.firstcomponent}>
            <pre>June 21 . 2023</pre>
            <h3>
              Bring the tables win survival
              <br />
              strategies
            </h3>
            <p>
              Mestib remove the completed market reserche our abusiness high
              prouds the work hards business. It is a long established fact that
              a reader will be distracted by the readable
            </p>
            <IoArrowForwardCircleOutline className={style.icon10th} />
          </div>
          <div className={style.firstcomponent2}>
            <Image src={blog1} />
            <pre>June 21 . 2023</pre>
            <h3>
              Bring the tables win survival
              <br />
              strategies
            </h3>
          </div>
          <div className={style.firstcomponent3}>
            <Image src={blog2} />
            <pre>June 21 . 2023</pre>
            <h3>
              The quality of life insurance in
              <br />
              the company
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
