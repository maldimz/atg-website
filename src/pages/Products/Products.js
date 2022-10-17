import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import navLinks from "../../constant/navLinks"
import styles from "../../constant/style"
import Promotion from "../Homepage/Promotion"
import Hero from "./Hero"
import Output from "./Output"

const Products = () => {
  const {t} = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Aio Tuku Group - {t("header-products")}</title>
        <meta
          name="description"
          content="Gombale adalah bisnis yang bergerak di bidang produksi dan penjualan konveksi dibawah PT Aio Tuku Group. Ingin mengembangkan bisnis Anda juga? Segera hubungi kami!" />
        <link rel="canonical" href={navLinks[2].path} />
      </Helmet>
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