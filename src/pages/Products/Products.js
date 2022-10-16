import styles from "../../constant/style"
import Promotion from "../Homepage/Promotion"
import Hero from "./Hero"
import Output from "./Output"

const Products = () => {
  return (
    <>
      <Hero />
      <div className={`${styles.paddingX} ${styles.flexStart} ${styles.paddingContentY}`}>
        <div className={`${styles.boxWidth}`}>
          <Output />
        </div>
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

export default Products