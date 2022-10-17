import styles from "../constant/style"

const ProductsCard = ({img, title, description}) => {
  return (
    <div className="flex md:flex-row flex-col w-full md:h-[300px] h-fit border-solid border-2 border-primary sm:rounded-[50px] rounded-[30px]">
        <div className={`${styles.flexCenter} sm:p-[50px] p-16 flex-2`}>
            <img src={img} alt="logo" className="sm:h-[200px] h-[150px] sm:max-w-[350px] max-w-[200px] object-cover object-center"/>
        </div>
        <div className={`${styles.flexCenter} bg-primary flex-1 sm:rounded-[50px] rounded-[30px] text-white flex-col md:px-16 lg:px-[116px] p-8`}>
            <h3 className="font-semibold sm:text-[48px] text-[38px] text-center mb-[20px]">{title}</h3>
            <p className="font-medium text-[16px] text-center">{description}</p>
        </div>
    </div>
  )
}

export default ProductsCard