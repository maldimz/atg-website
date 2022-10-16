import styles from "../../constant/style"

const Card2 = ({title, img, description, color}) => {
  return (
    <div className={`${styles.serviceCardPaddingY} relative flex flex-col items-end h-[485px]`}>
            <div className={`font-semibold z-[1] ${color}`}>
                <h2 className='text-[48px] text-right'>{title}</h2>
                <p className='text-[16px] text-right'>{description}</p>
            </div>
            <div className='absolute left-0 z-[0] bottom-0'>
                <img src={img} alt="card"/>
            </div>
        </div>
  )
}

export default Card2