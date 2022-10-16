import styles from "../../constant/style"

const Card2 = ({title, img, description, color}) => {
  return (
    <div className={`${styles.serviceCardPaddingY} relative flex flex-col items-end sm:h-[485px] sm:pb-0 pb-16`}>
            <div className={`font-semibold z-[1] ${color} flex flex-col gap-5`}>
                <h2 className='sm:text-[48px] text-[38px] text-right'>{title}</h2>
                <p className='text-[16px] text-right'>{description}</p>
            </div>
            <div className='absolute left-0 z-[0] bottom-0 md:visible invisible'>
                <img src={img} alt="card"/>
            </div>
        </div>
  )
}

export default Card2