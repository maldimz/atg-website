import styles from "../../constant/style"

const Promotion = () => {
    return (
        <div className={`flex md:flex-row flex-col ${styles.promotionPadding} justify-between items-center`}>
            <div>
                <h2 className="text-white font-semibold sm:text-[48px] text-[38px]">Let start your business with us!</h2>
                <p className="text-white font-medium text-[16px] md:py-0 py-2">Everything you need to know and grow your business anywhere on the planet.</p>
            </div>
            <div className="md:pt-0 pt-5">
                <a href="www.google.com">
                    <button className={`${styles.btnOrange} ${pStyle.button}`}>
                        Whatsapp
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