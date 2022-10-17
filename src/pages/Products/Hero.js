import { useTranslation } from "react-i18next"
import { ProdukHero } from "../../assets"
import styles from "../../constant/style"

const Hero = () => {
  const {t} = useTranslation();
  return (
    <div className={`relative h-screen w-full flex justify-center items-end`}>
      <div className="absolute z-[1] background-filter-overlay-2 w-full h-full bottom-0 rounded-b-[50px]"></div>
      <img src={ProdukHero} alt="hero" className="absolute z-[0] h-screen w-full object-cover object-top rounded-b-[50px]" />
      <div className={`${styles.paddingX} ${styles.boxWidth} z-[2] text-white text-right sm:pb-[170px] pb-[270px]`}>
          <h1 className="font-bold sm:text-[68px] text-[45px]">PT Aio Tuku Group</h1>
          <p className="font-medium text-[16px]">{t("products-hero-desc")}</p>
      </div>
    </div>
  )
}

export default Hero 