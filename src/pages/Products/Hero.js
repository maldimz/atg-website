import { ProdukHero } from "../../assets"
import styles from "../../constant/style"

const Hero = () => {
  return (
    <div className={`relative top-[-87px] h-screen w-full flex justify-center items-end`}>
      <div className="absolute z-[1] background-filter-overlay-2 w-full h-full bottom-0 rounded-b-[50px]"></div>
      <img src={ProdukHero} alt="hero" className="absolute z-[0] h-screen w-full object-cover object-top rounded-b-[50px]" />
      <div className={`${styles.paddingX} ${styles.boxWidth} z-[2] text-white text-right pb-[170px]`}>
          <h1 className="font-bold text-[68px]">PT Aio Tuku Group</h1>
          <p className="font-medium">We provide services to help you build your own business!</p>
      </div>
    </div>
  )
}

export default Hero 