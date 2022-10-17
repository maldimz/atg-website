import { useTranslation } from "react-i18next";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Service1, Service2, Service3, Service4 } from "../../assets"
import { SliderCard } from "../../components"

const Services = () => {
    const {t} = useTranslation();
    const servicesData = [
        {
            title: t("homepage-services-card1-title"),
            img: Service2,
            description: t("homepage-services-card1-desc"),
        },
        {
            title: t("homepage-services-card2-title"),
            img: Service4,
            description: t("homepage-services-card2-desc"),
        },
        {
            title: t("homepage-services-card3-title"),
            img: Service2,
            description: t("homepage-services-card3-desc"),
        },
        {
            title: t("homepage-services-card4-title"),
            img: Service3,
            description: t("homepage-services-card4-desc"),
        },
        {
            title: t("homepage-services-card5-title"),
            img: Service1,
            description: t("homepage-services-card5-desc"),
        },
    ]
    return (
        <div className={`flex flex-col sm:pb-[100px] py-6 md:px-0 px-1`}>
            <div>
                <h2 className="font-bold text-black sm:text-[48px] text-[38px] text-center sm:mb-[50px] mb-6">{t("homepage-services-title")}</h2>
            </div>
            <div>
                <Swiper
                    navigation={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        1200:{
                            slidesPerView: 2,
                            spaceBetween: 50
                        },
                        768:{
                            slidesPerView: 2,
                            spaceBetween: 30
                        }
                    }}
                    centeredSlides={true}
                    modules={[Navigation]}
                    initialSlide={2}
                >
                    {servicesData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-[750px]">
                                <SliderCard img={item.img} title={item.title} description={item.description} />
                            </div>
                        </SwiperSlide>))}
                </Swiper>
            </div>
        </div>
    )
}

export default Services