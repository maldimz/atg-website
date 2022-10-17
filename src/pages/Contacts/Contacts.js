import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import navLinks from "../../constant/navLinks"
import styles from "../../constant/style"
import Hero from "./Hero"

const Contacts = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Aio Tuku Group - {t("header-contacts")}</title>
        <meta
          name="description"
          content="Kami siap membantu dalam mewujudkan bisnis terbaik yang Anda inginkan. Segera hubungi kami untuk mendapatkan informasi yang Anda butuhkan!" />
        <link rel="canonical" href={navLinks[3].path} />
      </Helmet>
      <div className={`${styles.paddingX} ${styles.flexStart} z-[1] w-full`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </>
  )
}

export default Contacts