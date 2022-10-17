import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Human, Marketing, Payment } from "../../assets"
import { SpecialCard } from "../../components"
import navLinks from "../../constant/navLinks"
import styles from "../../constant/style"

const Special = () => {
    const {t} = useTranslation();
    const specialData = [
        {
            img: Human,
            title: t("homepage-special-card1-title"),
            description: t("homepage-special-card1-desc"),
        },
        {
            img: Marketing,
            title: t("homepage-special-card2-title"),
            description: t("homepage-special-card2-desc"),
        },
        {
            img: Payment,
            title: t("homepage-special-card3-title"),
            description: t("homepage-special-card3-desc")
        }
    ]
    return (
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth} py-16 flex atgmd:flex-row flex-col justify-between atgmd:items-start items-center atgmd:gap-5 gap-16`}>
                <div className="flex flex-col gap-5 atgmd:items-start items-center">
                    <h2 className="max-w-[480px] font-bold text-white sm:text-[48px] text-[38px]">{t("homepage-special-title")}</h2>
                    <Link to={navLinks[1].path}><button className={`${styles.btnOrange}`}>{t("homepage-special-btn")}</button></Link>
                </div>
                <div className="flex flex-col gap-[10px] atgmd:items-start items-center">
                    {specialData.map((item,index)=>(<SpecialCard key={index} img={item.img} title={item.title} description={item.description}/>))}
                </div>
            </div>
        </div>
    )
}

export default Special