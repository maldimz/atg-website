import { Link } from "react-router-dom"
import { Logo } from "../assets"
import navLinks from "../constant/navLinks"
import styles from "../constant/style"
import { BsWhatsapp } from "react-icons/bs"
import { useTranslation } from "react-i18next"
import { WA } from "../constant/config"

const Footer = () => {
    const {t} = useTranslation();
    const footerData = [
        {
            title: t("footer-left-head1"),
            data: [
                {
                    name: t("footer-left-head1-decs1"),
                    link: "/"
                },
                {
                    name: t("footer-left-head1-desc2"),
                    link: navLinks[2].path
                },
            ]
        },
        {
            title: t("footer-left-head2"),
            data: [
                {
                    name: t("footer-left-head2-desc1"),
                    link: navLinks[3].path
                },

            ]
        },
        {
            title: t("footer-left-head3"),
            data: [
                {
                    name: t("footer-left-head3-desc1"),
                    link: "#"
                },
                {
                    name: t("footer-left-head3-desc2"),
                    link: navLinks[3].path
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
                            <div key={index} className={`${index === footerData.length - 1 ? 'mr-0' : 'sm:mr-[75px] mr-5'}`}>
                                <h3 className="mb-[20px] font-semibold text-[18px]">{item.title}</h3>
                                {item.data.map((item, ind) => (
                                    <div key={ind} className={`mb-[15px] hover:underline underline-offset-4`}>
                                        {item.name === "Our mitra" ? <a href={item.link}>{item.name}</a> : <Link to={item.link}>{item.name}</Link>}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="flex sm:items-end items-center flex-col">
                        <h3 className="mb-[20px] font-semibold text-[18px]">{t("footer-right")}</h3>
                        <div className="flex">
                            {/* <a href="/" target="blank" className="mr-[20px] cursor-pointer">
                                <BsInstagram size={25} className={`${FooterStyle.animationIcons}`} />
                            </a> */}
                            <a href={WA} target="blank" className="cursor-pointer">
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