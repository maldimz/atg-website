import { useTranslation } from "react-i18next"
import { Gombale, Soon2 } from "../../assets"
import { ProductsCard } from "../../components"
import styles from "../../constant/style"

const Output = () => {
    const {t} = useTranslation();
    const outputData = [
        {
            img: Gombale,
            title: t("products-output-card1-title"),
            description: t("products-output-card1-desc")
        },
        {
            img: Soon2,
            title: t("products-output-card2-title"),
            description: t("products-output-card2-desc")
        },
        {
            img: Soon2,
            title: t("products-output-card3-title"),
            description: t("products-output-card3-desc")
        },
    ]

    return (
        <section>
            <h2 className="font-semibold text-black sm:text-[48px] text-[38px] text-center sm:mb-[50px] mb-16">{t("products-output-title")}</h2>
            {outputData.map((item, index)=>(
                <div key={index} className={`${index === outputData.length - 1 ? 'mb-0' : 'mb-8'} hover:${styles.animateEaseInOut}`}>
                    <ProductsCard img={item.img} title={item.title} description={item.description}/>
                </div>
            ))}
        </section>
    )
}

export default Output