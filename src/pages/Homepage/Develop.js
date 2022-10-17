import { useTranslation } from "react-i18next"
import { IconGarment, IconMaintenance, IconPartner, IconTeam } from "../../assets"
import { DeployCard } from "../../components"
import styles from "../../constant/style"

const Develop = () => {
    const {t} = useTranslation();
    const developData = [
        {
            img: IconPartner,
            title: t("homepage-develop-card1"),
        },
        {
            img: IconGarment,
            title: t("homepage-develop-card2"),
        },
        {
            img: IconMaintenance,
            title: t("homepage-develop-card3"),
        },
        {
            img: IconTeam,
            title: t("homepage-develop-card4"),
        }
    ]
    return (
        <div className={`${styles.paddingContentY} ${styles.flexCenter} flex-col`}>
            <h2 className="font-bold text-black sm:text-[48px] text-[38px] text-center sm:mb-[50px] mb-6">{t("homepage-develop-title")}</h2>
            <div className="flex flex-wrap gap-6 justify-center ">
                {developData.map((item, index) => (
                    <div key={index}>
                        <DeployCard img={item.img} title={item.title}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Develop