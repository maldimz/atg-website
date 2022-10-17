
const SliderCard = ({img, title, description}) => {
    return (
        <div className={`flex justify-end z-[2] sm:h-[440px] h-[350px] bg-white sm:rounded-[50px] rounded-[30px] flex-col`}>
            <div className="absolute z-[0] w-full h-full">
                <img src={img} alt="img" className="w-full h-full object-cover sm:rounded-[50px] rounded-[30px]" />
            </div>
            <div className="absolute z-[1] background-filter-overlay w-full h-full bottom-0 sm:rounded-b-[50px] rounded-b-[30px]">

            </div>
            <div className="z-[2] sm:p-8 md:p-10 px-4 py-6  md:w-[400px] xl:w-full  w-[350px]">
                <h3 className="font-bold text-white text-[24px]">{title}</h3>
                <p className="font-medium text-white text[16px]">{description}</p>
            </div>
        </div>
    )
}

export default SliderCard