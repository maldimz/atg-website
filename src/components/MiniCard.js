import styles from "../constant/style"

const MiniCard = ({img, title}) => {
  return (
    <div className={`w-[350px] sm:h-[400px] h-[350px] bg-white rounded-[50px] ${styles.flexCenterSpaceB} flex-col p-[50px] `}>
        <img src={img} alt="img" className="sm:w-[175px] w-[150px]"/>
        <p className="font-bold sm:text-[34px] text-[28px] text-center">{title}</p>
    </div>
  )
}

export default MiniCard