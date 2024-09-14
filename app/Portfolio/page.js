import styles from '../styles/Portfolio.module.css'
import React from 'react'
import Image from "next/image";
import img from '../assets/about-page-header-bg.jpg'
import galleryImg1 from '../assets/portfolio-gallery-v2-img5.jpg'
import galleryImg2 from '../assets/portfolio-gallery-v2-img6.jpg'
import galleryImg3 from '../assets/portfolio-gallery-v2-img7.jpg'
import galleryImg4 from '../assets/portfolio-gallery-v2-img8.jpg'
import galleryImg5 from '../assets/portfolio-gallery-v2-img9.jpg'
import galleryImg6 from '../assets/portfolio-gallery-v2-img10.jpg'

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.portfolios}>
                <div className={styles.portfolio}>
                    <h1>Our Portfolio</h1>
                    <pre><h2>Home    -   Our Portfolio</h2></pre>

                </div>
                <div className={styles.portfolioImg}>
                    <Image className={styles.Img} src={img} alt="not fount" />
                </div>
            </div>


            <div className={styles.gallery}>
                <div className={styles.galleryTitle}>
                    <div className={styles.galleryTitle2}>
                        <h2>latest projects</h2>
                        <div className={styles.line}>
                        </div>
                    </div>
                    <h1>Our Working Gallery</h1>



                </div>


                <div className={styles.galleryImg}>
                    <div className={styles.galleryImg1}>
                        <Image className={styles.img} src={galleryImg1} alt='not found' />

                    </div>
                    <div className={styles.galleryImg2}>
                        <Image className={styles.img2} src={galleryImg2} alt='not found' />

                    </div>
                    <div className={styles.galleryImg1}>
                        <Image className={styles.img} src={galleryImg3} alt='not found' />

                    </div>

                </div>

                <div className={styles.galleryLast}>
                    <div className={styles.galleryImg1}>
                        <Image className={styles.img} src={galleryImg4} alt='not found' />

                    </div>
                    <div className={styles.galleryImg2}>
                        <Image className={styles.img2} src={galleryImg5} alt='not found' />

                    </div>
                    <div className={styles.galleryImg1}>
                        <Image className={styles.img} src={galleryImg6} alt='not found' />

                    </div>

                </div>



            </div>

        </div>
    )
}

export default page

