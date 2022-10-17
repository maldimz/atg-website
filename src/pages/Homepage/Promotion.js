import { useTranslation } from "react-i18next"
import { WA } from "../../constant/config";
import styles from "../../constant/style"

const Promotion = () => {
    const {t} = useTranslation();
    return (
        <div className={`flex md:flex-row flex-col ${styles.promotionPadding} justify-between items-center`}>
            <div>
                <h2 className="text-white font-semibold sm:text-[48px] text-[38px]">{t("homepage-promotion-title")}</h2>
                <p className="text-white font-medium text-[16px] md:py-0 py-2">{t("homepage-promotion-desc")}</p>
            </div>
            <div className="md:pt-0 pt-5">
                <a href={WA} target="blank">
                    <button className={`${styles.btnOrange} ${pStyle.button}`}>
                        {t("homepage-promotion-btn")}
                    </button>
                </a>
            </div>
        </div>
    )
}

const pStyle = {
    button: "lg:ml-0 ml-0 md:ml-6 md:mt-0 mt-6",
}

export default Promotion