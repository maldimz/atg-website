import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import navLinks from '../../constant/navLinks';
import styles from '../../constant/style';
import Description from './Description';
import Develop from './Develop';
import Gallery from './Gallery';
import Hero from './Hero';
import Promotion from './Promotion';
import Services from './Services';
import Special from './Special';

const Homepage = () => {
  const {t} = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Aio Tuku Group - {t("header-home")}</title>
        <meta
          name="description"
          content="PT Aio Tuku Group menyediakan jasa konsultan dan pengembangan sebuah industri seperti mulai dari persiapan hingga pengembangan brand. Butuh sesuatu untuk bisnis Anda? Kami siap membantu!" />
        <link rel="canonical" href={navLinks[0].path} />
      </Helmet>
      <div className={`${styles.paddingX} ${styles.flexStart} z-[1]`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className='w-full bg-atgBlack'>
        <Special />
      </div>
      <div className='w-full'>
        <Services />
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Develop />
        </div>
      </div>
      <div className='w-full bg-gradient-orange'>
        <Description />
      </div>

      <div className='w-full'>
        <Gallery />
      </div>

      <div className='w-full bg-atgBlack'>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Promotion />
          </div>
        </div>
      </div>
    </>

  )
}

export default Homepage;