import { HeroImg } from '../../assets'

const Hero = () => {
  return (
    <div className={`relative flex md:flex-row flex-col md:py-[100px] py-10 h-screen`}>
      <h1 className="max-w-[600px] font-bold md:text-[60px] text-[48px] z-[1]">
        PT Aio Tuku Group, help you create excellent business.
      </h1>
      <div>
        <img src={HeroImg} alt="hero" className="md:absolute md:w-[685px] md:right-0 md:pt-0 pt-8 z-[0]"/>
      </div>
    </div>
  )
}

export default Hero;