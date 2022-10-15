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
            <h2 className="font-bold text-black text-[48px] text-center sm:mb-[50px] mb-6">PT Aio Tuku Group Development</h2>
            <div className="flex sm:flex-row flex-col">
                {developData.map((item, index) => (
                    <div key={index} className={`${index === developData.length - 1 ? 'mr-0': 'mr-6'}`}>
                        <DeployCard img={item.img} title={item.title}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Develop