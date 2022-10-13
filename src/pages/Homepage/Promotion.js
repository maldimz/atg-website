import styles from "../../constant/style"

const Promotion = () => {
    return (

        <div className={`flex md:flex-row flex-col ${styles.promotionPadding} justify-between items-center`}>
            <div>
                <h2 className="text-white font-semibold text-[48px]">Let join us to be our mitra now!</h2>
                <p className="text-white font-semibold text-[16px]">Everything you need to know and grow your business anywhere on the planet.</p>
            </div>
            <div>
                <a href="www.google.com">
                    <button className="bg-primary rounded-full w-[200px] h-[60px]">
                        Whatsapp
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Promotion