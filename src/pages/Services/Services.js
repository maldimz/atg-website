import { Card1Img, Card2Img, Card3Img, Card4Img, Card5Img } from "../../assets"
import styles from "../../constant/style"
import Card1 from "./Card1"
import Card2 from "./Card2"
import Hero from "./Hero"

const Services = () => {
  const servicesData = {
    card1: {
      color: "text-black",
      img: Card1Img,
      title: "The best service provider and consultant",
      description: "We provide you a service and consultant to prepare your brand and brand development!"
    },
    card2: {
      color: "text-black",
      img: Card2Img,
      title: "The best system development and brand administration equipment services",
      description: "We provide you system development services and brand administration equipment both business and technical side!"
    },
    card3: {
      color: "text-black",
      img: Card3Img,
      title: "The best manual and digital Print (DTF) training services",
      description: "We provide you training in layout, design, machining and production aspects!"
    },
    card4: {
      color: "text-white",
      img: Card4Img,
      title: "The best product service provider to sell as a brand",
      description: "We provide you t-shirts, totebags, hoodies, shirts, mugs and various other merchandise!"
    },
    card5: {
      color: "text-white",
      img: Card5Img,
      title: "The best service provider and business apparel consultant",
      description: "We provide you both in business and technical perspective!"
    }
  }
  return (
    <>
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