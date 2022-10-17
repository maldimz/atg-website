import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { Card1Img, Card2Img, Card3Img, Card4Img, Card5Img } from "../../assets"
import navLinks from "../../constant/navLinks"
import styles from "../../constant/style"
import Card1 from "./Card1"
import Card2 from "./Card2"
import Hero from "./Hero"

const Services = () => {
  const { t } = useTranslation();
  const servicesData = {
    card1: {
      color: "text-black",
      img: Card1Img,
      title: t("services-card1-title"),
      description: t("services-card1-desc")
    },
    card2: {
      color: "text-black",
      img: Card2Img,
      title: t("services-card2-title"),
      description: t("services-card2-desc")
    },
    card3: {
      color: "text-black",
      img: Card3Img,
      title: t("services-card3-title"),
      description: t("services-card3-desc")
    },
    card4: {
      color: "text-white",
      img: Card4Img,
      title: t("services-card4-title"),
      description: t("services-card4-desc")
    },
    card5: {
      color: "text-white",
      img: Card5Img,
      title: t("services-card5-title"),
      description: t("services-card5-desc")
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Aio Tuku Group - {t("header-services")}</title>
        <meta
          name="description"
          content="Kami menyediakan layanan jasa dan konsultan yang menekankan aspek profesional dan berorientasi pada kualitas dalam melayani kebutuhan segala bisnis. Tunggu apa lagi? Pakai layanan kami sekarang juga!" />
        <link rel="canonical" href={navLinks[1].path} />
      </Helmet>
      <div className={`${styles.paddingX} ${styles.flexStart} z-[1]`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <section id="service" className='w-full bg-third sm:rounded-t-[100px] atgmd:rounded-t-[150px] rounded-t-[80px]'>
        <div className={`${styles.paddingX} ${styles.flexStart} z-[1]`}>
          <div className={`${styles.boxWidth}`}>
            <Card1
              img={servicesData.card1.img}
              title={servicesData.card1.title}
              description={servicesData.card1.description}
              color={servicesData.card1.color} />
          </div>
        </div>
      </section>

      <section className="w-full bg-third">
        <div className="w-full bg-secondary sm:rounded-t-[100px] atgmd:rounded-t-[150px] rounded-t-[80px]">
          <div className={`${styles.paddingX} ${styles.flexStart} z-[1]`}>
            <div className={`${styles.boxWidth}`}>
              <Card2 img={servicesData.card2.img}
                title={servicesData.card2.title}
                description={servicesData.card2.description}
                color={servicesData.card2.color} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-secondary">
        <div className="w-full bg-primary sm:rounded-t-[100px] atgmd:rounded-t-[150px] rounded-t-[80px]">
          <div className={`${styles.paddingX} ${styles.flexStart} z-[1]`}>
            <div className={`${styles.boxWidth}`}>
              <Card1 img={servicesData.card3.img}
                title={servicesData.card3.title}
                description={servicesData.card3.description}
                color={servicesData.card3.color} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary">
        <div className="w-full bg-atgBrown sm:rounded-t-[100px] atgmd:rounded-t-[150px] rounded-t-[80px]">
          <div className={`${styles.paddingX} ${styles.flexStart} z-[1]`}>
            <div className={`${styles.boxWidth}`}>
              <Card2 img={servicesData.card4.img}
                title={servicesData.card4.title}
                description={servicesData.card4.description}
                color={servicesData.card4.color} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-atgBrown">
        <div className="w-full bg-atgBlack sm:rounded-t-[100px] atgmd:rounded-t-[150px] rounded-t-[80px]">
          <div className={`${styles.paddingX} ${styles.flexStart} z-[1]`}>
            <div className={`${styles.boxWidth}`}>
              <Card1 img={servicesData.card5.img}
                title={servicesData.card5.title}
                description={servicesData.card5.description}
                color={servicesData.card5.color} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services