import { Link } from "react-router-dom"
import { Human, Marketing, Payment } from "../../assets"
import { SpecialCard } from "../../components"
import styles from "../../constant/style"

const Special = () => {
    const specialData = [
        {
            img: Human,
            title: "Human Resource Skills",
            description: "We provide professional human resources",
        },
        {
            img: Marketing,
            title: "Marketing Strategy",
            description: "We provide the best marketing strategy",
        },
        {
            img: Payment,
            title: "Digital Payment",
            description: "We provide digital payment for your business"
        }
    ]
    return (
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth} py-16 flex atgmd:flex-row flex-col justify-between atgmd:items-start items-center atgmd:gap-5 gap-16`}>
                <div className="flex flex-col gap-5 atgmd:items-start items-center">
                    <h2 className="max-w-[480px] font-bold text-white sm:text-[48px] text-[38px]">You need something for your business? We're here to help!</h2>
                    <Link><button className={`${styles.btnOrange}`}>Our Service</button></Link>
                </div>
                <div className="flex flex-col gap-[10px] atgmd:items-start items-center">
                    {specialData.map((item,index)=>(<SpecialCard img={item.img} title={item.title} description={item.description}/>))}
                </div>
            </div>
        </div>
    )
}

export default Special