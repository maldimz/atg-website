import { Link } from "react-router-dom"
import { Logo } from "../assets"
import navLinks from "../constant/navLinks"
import styles from "../constant/style"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"

const Footer = () => {
    const footerData = [
        {
            title: "Company",
            data: [
                {
                    name: "About",
                    link: "/"
                },
                {
                    name: navLinks[2].title,
                    link: navLinks[2].path
                },
            ]
        },
        {
            title: "Join with us",
            data: [
                {
                    name: "Contact",
                    link: "/contact"
                },

            ]
        },
        {
            title: "Get in touch",
            data: [
                {
                    name: "Help center",
                    link: "#"
                },
                {
                    name: "Our location",
                    link: "/contact"
                }
            ]
        },
    ]
    return (
        <div className={`${styles.footerPaddingY}`}>
            <div className={`w-full ${FooterStyle.flexResponsive}`}>
                <img src={Logo} alt="Logo" className={`sm:mb-[60px] mb-16`} />
                <div className="w-full flex sm:justify-between justify-center sm:items-start items-center sm:flex-row flex-col">
                    <div className="flex">
                        {footerData.map((item, index) => (
                            <div className={`${index === footerData.length - 1 ? 'mr-0' : 'sm:mr-[75px] mr-5'}`}>
                                <h3 className="mb-[20px] font-semibold text-[18px]">{item.title}</h3>
                                {item.data.map((item, index) => (
                                    <div key={index} className={`mb-[15px] hover:underline underline-offset-4`}>
                                        {item.name === "Our mitra" ? <a href={item.link}>{item.name}</a> : <Link to={item.link}>{item.name}</Link>}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="flex sm:items-end items-center flex-col">
                        <h3 className="mb-[20px] font-semibold text-[18px]">Connect with us</h3>
                        <div className="flex">
                            <a href="/" target="blank" className="mr-[20px] cursor-pointer">
                                <BsInstagram size={25} className={`${FooterStyle.animationIcons}`} />
                            </a>
                            <a href="/" target="blank" className="cursor-pointer">
                                <BsWhatsapp size={25} className={`${FooterStyle.animationIcons}`} />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="w-full my-5" />
                <div className="flex items-center flex-col justify-start">
                    <p className="p-0 m-0">&#169; 2022 PT Aio Tuku Group. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

const FooterStyle = {
    flexResponsive: "flex sm:items-start items-center sm:justify-start justify-center flex-col",
    animationIcons: "transition duration-300 ease-in-out hover:scale-110"
}
export default Footer