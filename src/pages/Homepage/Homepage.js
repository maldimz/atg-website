import styles from '../../constant/style';
import Description from './Description';
import Develop from './Develop';
import Gallery from './Gallery';
import Hero from './Hero';
import Promotion from './Promotion';
import Services from './Services';
import Special from './Special';

const Homepage = () => {
  return (
    <>
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