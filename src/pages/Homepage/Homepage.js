import styles from '../../constant/style';
import Description from './Description';
import Gallery from './Gallery';
import Hero from './Hero';
import Promotion from './Promotion';
import Services from './Services';

const Homepage = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className='w-full bg-gradient-orange'>
        <Description />
      </div>

      <div className='w-full bg-primary'>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Services />
          </div>
        </div>
      </div>

      <div className='w-full'>
        <Gallery />
      </div>

      <div className='w-full bg-atgblack'>
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