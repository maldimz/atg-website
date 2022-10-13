import styles from '../../constant/style';
import Description from './Description';
import Hero from './Hero';
import Promotion from './Promotion';

const Homepage = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className='w-full bg-primary'>
        <Description />
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