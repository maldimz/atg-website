import styles from '../../constant/style';
import Description from './Description';
import Hero from './Hero';

const Homepage = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className='w-full bg-primary'>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxContent}`}>
            <Description />
          </div>
        </div>
      </div>

    </>

  )
}

export default Homepage;