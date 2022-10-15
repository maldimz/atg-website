
const SliderCard = ({img, title, description}) => {
    return (
        <div className={`flex justify-end w-[750px] h-[440px] bg-white rounded-[50px] flex-col`}>
            <div className="absolute z-[0] w-full h-full">
                <img src={img} alt="img" className="w-full h-full object-cover rounded-[50px]" />
            </div>
            <div className="absolute z-[1] background-filter-overlay w-full h-full bottom-0 rounded-b-[50px]">

            </div>
            <div className="z-[2] p-12">
                <h3 className="font-bold text-white text-[24px]">{title}</h3>
                <p className="font-medium text-white text[16px]">{description}</p>
            </div>
        </div>
    )
}

export default SliderCard