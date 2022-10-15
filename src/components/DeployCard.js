import styles from "../constant/style"

const DeployCard = ({ img, title }) => {
    return (
        <div className={`w-[267px] h-[371px] bg-secondary rounded-[50px] ${styles.flexCenterSpaceB} flex-col py-11 px-8`}>
            <img src={img} alt="img" className="w-[200px] h-[200px] object-cover rounded-full" />
            <p className="font-medium text-[24px] text-center leading-[29px]">{title}</p>
        </div>
    )
}

export default DeployCard