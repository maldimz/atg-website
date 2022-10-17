const SpecialCard = ({img, title, description}) => {
  return (
    <div className="sm:w-[480px] max-w-[480px] h-[100px] flex gap-[20px] justify-start items-center bg-primary rounded-[20px] p-[20px]">
        <img src={img} className="w-[55px]" alt="icon"/>
        <div className="flex flex-col justify-center">
            <h3 className="font-bold text-white text-[20px]">{title}</h3>
            <p className="font-normal text-white text-[16px]">{description}</p>
        </div>
    </div>
  )
}

export default SpecialCard