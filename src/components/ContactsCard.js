import styles from "../constant/style"

const ContactsCard = ({ title, desc, button }) => {
    return (
        <div className="flex flex-col justify-between p-9 flex-1 md:h-[320px] border-solid border-primary border-2 rounded-[50px]">
            <div>
                <h3 className="font-bold text-primary text-[36px] mb-6">{title}</h3>
                <div>
                    {desc.map((item, index) => (
                        <div key={index} className="mb-2 flex gap-2.5">
                            <div className="bg-primary min-w-[25px] h-[25px] rounded-full flex justify-center items-center text-white">
                                {item?.icon}
                            </div>
                            <p>{item?.nama}</p>
                        </div>
                    ))}
                </div>
            </div>

            {button ?
                <div className="flex justify-center w-full">
                    <a href={button?.link} target="blank">
                        <button className={`${styles.btnOrange}`}>
                            {button?.title}
                        </button>
                    </a>
                </div> :
                null}
        </div>
    )
}

export default ContactsCard