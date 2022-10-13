import styles from "../../constant/style"
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Navigation} from "swiper"
import { Autoplay } from "swiper";
import { White } from "../../assets";
import { Link } from "react-router-dom";


const Services = () => {
    const ServicesData = [
        {
            img: White,
            description: "Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.",
            button: {
                title: "Explore more",
                link: "/"
            }
        },
        {
            img: White,
            description: "Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.",
            button: {
                title: "Explore more",
                link: "/"
            }
        },

        {
            img: White,
            description: "Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.",
            button: {
                title: "Explore more",
                link: "/"
            }
        },

        {
            img: White,
            description: "Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.",
            button: {
                title: "Explore more",
                link: "/"
            }
        },


    ]
    return (
        <div className={`flex flex-col ${styles.servicesPadding}`}>
            <h2 className="font-bold text-white text-[48px] sm:mb-[50px] mb-6">Our Services</h2>
            <div>
                <Swiper
                    pagination
                    navigation
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay,Pagination, Navigation ]}
                >
                    {ServicesData.map((item, index) => (
                        <div key={index}>
                            <SwiperSlide>
                                <div className="flex">
                                    <img src={item.img} alt="img" className="h-[412px] w-[412px] rounded-[50px] card-box-shadow sm:mr-[50px]" />
                                    <div>
                                        <p className="font-semibold text-white text-[36px] sm:mb-[25px] mb-6">{item.description}</p>
                                        <Link to={item.button.link}>
                                            <button className={`${styles.btnWhite}`}>{item.button.title}</button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Services