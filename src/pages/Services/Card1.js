import styles from '../../constant/style'

const Card1 = ({title, img, description, color}) => {
    return (
        <div className={`${styles.serviceCardPaddingY} relative flex flex-col h-[485px]`}>
            <div className={`z-[1] font-semibold ${color}`}>
                <h2 className='text-[48px]'>{title}</h2>
                <p className='text-[16px]'>{description}</p>
            </div>
            <div className='absolute right-0 z-[0] bottom-0'>
                <img src={img} alt="card"/>
            </div>
        </div>
    )
}

export default Card1