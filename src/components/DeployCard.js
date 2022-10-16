import styles from "../constant/style"

const DeployCard = ({ img, title }) => {
    return (
        <div className={`w-[267px] sm:h-[371px] h-[350px] bg-secondary sm:rounded-[50px] rounded-[30px] ${styles.flexCenterSpaceB} flex-col py-11 px-8`}>
            <img src={img} alt="img" className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] object-cover rounded-full" />
            <p className="font-medium text-[24px] text-center leading-[29px]">{title}</p>
        </div>
    )
}

export default DeployCard