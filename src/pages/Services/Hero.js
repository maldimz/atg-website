import { useTranslation } from "react-i18next"
import { Logo2 } from "../../assets"
import styles from "../../constant/style"

const Hero = () => {
    const {t} = useTranslation();
    return (
        <section className={`${styles.servicesHeroPaddingY} flex atgmds:flex-row flex-col-reverse atgmds:justify-between atgmds:items-start items-center gap-[20px]`}>
            <div className="flex flex-col items-end justify-center gap-[20px]">
                <h1 className="font-semibold  md:text-[60px] text-[48px] atgmds:text-right text-center max-w-[587px]">{t("services-title")}</h1>
                <div className="flex w-full justify-center atgmds:justify-end">
                    <a href="#service">
                        <button className={`${styles.btnOrange}`}>
                            {t("services-btn")}
                        </button>
                    </a>
                </div>
            </div>
            <div className="sm:min-w-[412px]">
                <img src={Logo2} alt="logo" className="sm:w-[412px] sm:h-[412px] w-[250px] h-[250px] sm:rounded-[50px] rounded-[30px]" />
            </div>
        </section>
    )
}

export default Hero