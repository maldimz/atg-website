import ContactsCard from "../../components/ContactsCard"
import {FiPhoneCall, FiMail} from "react-icons/fi"
import {IoLocationOutline} from "react-icons/io5"
import { useTranslation } from "react-i18next"
import { WA } from "../../constant/config"

const Hero = () => {
    const {t} = useTranslation();
    const contactsData = [
        {
            title: t("contacts-card1-title"),
            desc: [
                {
                    icon: <FiMail size={16}/>,
                    nama: "aiotukugroup@gmail.com"
                },
                {
                    icon: <FiPhoneCall size={16}/>,
                    nama: "(0274) 4360720"
                }
            ],
            button: {
                title: "Whatsapp",
                link: WA
            }
        },
        {
            title: t("contacts-card2-title"),
            desc: [
                {
                    icon: <IoLocationOutline size={16} />,
                    nama: "Jl. Prawiro Sudiyono No. 99 Gondanganpenen, Sendangadi, Mlati, Sleman, Yogyakarta"
                },
            ]
        }
    ]
    return (
        <div className="relative  w-full flex flex-col items-center py-[50px]">
            <div className="border-solid border-2 border-primary rounded-full w-fit mb-7">
                <h1 className="font-semibold text-primary text-[16px] py-2.5 px-6">{t("contacts-hero-head")}</h1>
            </div>
            <h2 className="max-w-[545px] font-bold text-black text-[48px] text-center leading-[58px]">{t("contacts-hero-title")}</h2>
            <p className="font-medium text-black text-[16px] text-center my-7">{t("contacts-hero-desc")}</p>
            <div className="flex gap-6 md:flex-row flex-col w-full">
                {contactsData.map((item, index) => (
                    <ContactsCard key={index} title={item.title} button={item.button} desc={item.desc} />
                ))}
            </div>
        </div>
    )
}

export default Hero