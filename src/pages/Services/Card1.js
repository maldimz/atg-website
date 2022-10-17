import styles from '../../constant/style'

const Card1 = ({title, img, description, color}) => {
    return (
        <div className={`${styles.serviceCardPaddingY} relative flex flex-col sm:h-[485px] sm:pb-0 pb-16`}>
            <div className={`z-[1] font-semibold ${color} flex flex-col gap-5`}>
                <h2 className='sm:text-[48px] text-[38px]'>{title}</h2>
                <p className='text-[16px]'>{description}</p>
            </div>
            <div className='absolute right-0 z-[0] bottom-0 sm:visible invisible'>
                <img src={img} alt="card"/>
            </div>
        </div>
    )
}

export default Card1