import { Gombale, Soon2 } from "../../assets"
import { ProductsCard } from "../../components"
import styles from "../../constant/style"

const Output = () => {
    const outputData = [
        {
            img: Gombale,
            title: "Gombalé",
            description: "One of the subsidiaries under PT Aio Tuku Group engaged in producing and selling convection products."
        },
        {
            img: Soon2,
            title: "Your business name",
            description: "Your business description"
        },
        {
            img: Soon2,
            title: "Your business name",
            description: "Your business description"
        },
    ]

    return (
        <section>
            <h2 className="font-semibold text-black sm:text-[48px] text-[38px] text-center sm:mb-[50px] mb-16">Our products</h2>
            {outputData.map((item, index)=>(
                <div className={`${index === outputData.length - 1 ? 'mb-0' : 'mb-8'} hover:${styles.animateEaseInOut}`}>
                    <ProductsCard img={item.img} title={item.title} description={item.description}/>
                </div>
            ))}
        </section>
    )
}

export default Output