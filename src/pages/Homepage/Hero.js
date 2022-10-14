import { HeroImg } from '../../assets'
import styles from '../../constant/style'

const Hero = () => {
  return (
    <div className={`relative flex md:flex-row flex-col ${styles.heroPadding} mb-[300px]`}>
      <h1 className="max-w-[600px] font-bold text-[60px] flex-1 z-[1]">
        PT Aio Tuku Group, help you create excellent business.
      </h1>

      <div>
        <img src={HeroImg} alt="hero" className="absolute w-[685px] right-0 z-[0] flex-1"/>
      </div>
    </div>
  )
}

export default Hero;