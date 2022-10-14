import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper"
import { Autoplay } from "swiper";
import { Service1, Service2, Service3 } from "../../assets";

const Gallery = () => {
    const swiper = useSwiper();
    const ServicesData = [
        {
            img: Service1,
        },
        {
            img: Service2,
        },

        {
            img: Service3,
        },

        {
            img: Service2,
        },


    ]
    return (
        <div>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    enabled: true
                }}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {ServicesData.map((item, index) => (
                    <div key={index}>
                        <SwiperSlide>
                            <div className="flex">
                                <img src={item.img} alt="img" className="h-[550px] w-full object-cover" />
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
                
            </Swiper>
        </div>
    )
}

export default Gallery