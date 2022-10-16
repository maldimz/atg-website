import { IconGarment, IconMaintenance, IconPartner, IconTeam } from "../../assets"
import { DeployCard } from "../../components"
import styles from "../../constant/style"

const Develop = () => {
    const developData = [
        {
            img: IconPartner,
            title: "Partnership Development",
        },
        {
            img: IconGarment,
            title: "Garment Development",
        },
        {
            img: IconMaintenance,
            title: "Maintenance Relationship",
        },
        {
            img: IconTeam,
            title: "Team Development",
        }
    ]
    return (
        <div className={`${styles.paddingContentY} ${styles.flexCenter} flex-col`}>
            <h2 className="font-bold text-black sm:text-[48px] text-[38px] text-center sm:mb-[50px] mb-6">PT Aio Tuku Group Development</h2>
            <div className="flex flex-wrap gap-6 justify-center ">
                {developData.map((item, index) => (
                    <div key={index}>
                        <DeployCard img={item.img} title={item.title}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Develop