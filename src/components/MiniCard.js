import styles from "../constant/style"

const MiniCard = ({img, title}) => {
  return (
    <div className={`w-[350px] h-[400px] bg-white rounded-[50px] ${styles.flexCenterSpaceB} flex-col p-[50px] `}>
        <img src={img} alt="img" className="w-[175px]"/>
        <p className="font-bold text-[34px] text-center">{title}</p>
    </div>
  )
}

export default MiniCard