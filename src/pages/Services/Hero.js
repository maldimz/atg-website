import { Logo2 } from "../../assets"
import styles from "../../constant/style"

const Hero = () => {
    return (
        <section className={`${styles.servicesHeroPaddingY} flex md:flex-row flex-col md:justify-between relative top-[-80px]`}>
            <div className="flex flex-col items-end justify-center">
                <h1 className="font-semibold text-[60px] text-right max-w-[587px] mb-[20px]">Excellent business is all you need!</h1>
                <a href="#service">
                    <button className={`${styles.btnOrange}`}>
                        See more
                    </button>
                </a>
            </div>
            <div>
                <img src={Logo2} alt="logo" className="w-[412px] h-[412px] rounded-[50px]"/>
            </div>
        </section>
    )
}

export default Hero