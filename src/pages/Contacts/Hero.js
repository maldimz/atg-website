import ContactsCard from "../../components/ContactsCard"
import {FiPhoneCall, FiMail} from "react-icons/fi"
import {IoLocationOutline} from "react-icons/io5"

const Hero = () => {
    const contactsData = [
        {
            title: "Contact Us",
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
                link: "wa"
            }
        },
        {
            title: "Contact Us",
            desc: [
                {
                    icon: <IoLocationOutline size={16} />,
                    nama: "Jl. Prawiro Sudiyono No. 99 Gondanganpenen, Sendangadi, Mlati, Sleman, Yogyakarta"
                },
            ]
        }
    ]
    return (
        <div className="relative md:top-[-87px] w-full flex flex-col items-center py-[50px]">
            <div className="border-solid border-2 border-primary rounded-full w-fit mb-7">
                <h1 className="font-semibold text-primary text-[16px] py-2.5 px-6">Our contact and location</h1>
            </div>
            <h2 className="max-w-[545px] font-bold text-black text-[48px] text-center leading-[58px]">Get in touch with us for  more information</h2>
            <p className="font-medium text-black text-[16px] text-center my-7">If you need help or have question, we’re here for you</p>
            <div className="flex gap-6 md:flex-row flex-col w-full">
                {contactsData.map((item, index) => (
                    <ContactsCard key={index} title={item.title} button={item.button} desc={item.desc} />
                ))}
            </div>
        </div>
    )
}

export default Hero