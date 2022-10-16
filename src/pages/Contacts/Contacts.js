import styles from "../../constant/style"
import Hero from "./Hero"

const Contacts = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexStart} z-[1] w-full`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
  )
}

export default Contacts