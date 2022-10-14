import { Service1, Service2, Service3 } from "../../assets"
import styles from "../../constant/style"

const Services = () => {
    const servicesData = [
        {
            style: "sm:flex-row flex-col",
            img: Service1,
            description: "Service providers and consultants for brand preparation and brand development",
        },
        {
            style: "sm:flex-row-reverse flex-col",
            img: Service2,
            description: "Service provider and brand administration system and equipment development service provider, both business and technical side",
        },
        {
            style: "sm:flex-row flex-col",
            img: Service3,
            description: "Service provider for manual and digital print (DTF) training in layout, design, machining and production aspects",
        },
        {
            style: "sm:flex-row-reverse flex-col",
            img: Service2,
            description: "Service provider and business apparel consultant, both in terms of business and technical",
        }
    ]
  return (
    <div className={`flex flex-col ${styles.paddingContentY}`}>
        <div>
        <h2 className="font-bold text-white text-[48px] text-center sm:mb-[50px] mb-6">Our Services</h2>
        </div>
        
    </div>
  )
}

export default Services