import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Service1, Service2, Service3, Service4 } from "../../assets"
import { SliderCard } from "../../components"

const Services = () => {
    const servicesData = [
        {
            title: "Service provider and business apparel consultant",
            img: Service2,
            description: "We provide both in terms of business and technical!",
        },
        {
            title: "Manual and Digital Print (DTF) training",
            img: Service4,
            description: "We train in aspects of layout, design, also machining and production",
        },
        {
            title: "Brand preparation and development consultant",
            img: Service2,
            description: "We provide consulting services to prepare brands and brand development.",
        },
        {
            title: "System development and brand administration tools",
            img: Service3,
            description: "We provide these services both business and technical side!",
        },
        {
            title: "Product services to be sold as a brand",
            img: Service1,
            description: "We provide t-shirts, totebags, hoodies, shirts, mugs, and various other merchandise!",
        },
    ]
    return (
        <div className={`flex flex-col sm:pb-[100px] py-6 md:px-0 px-1`}>
            <div>
                <h2 className="font-bold text-black sm:text-[48px] text-[38px] text-center sm:mb-[50px] mb-6">Our Services</h2>
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