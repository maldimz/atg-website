import React from 'react'
import { Gombale } from '../../assets'
import { MiniCard } from '../../components'
import styles from '../../constant/style'

const Description = () => {
    const mitras = [
        {
            img: "",
            name: "Your Business"
        },
        {
            img: Gombale,
            name: "Gombale"
        },
        {
            img: "",
            name: "Your Business"
        },
    ]

    return (
        <>
            <div id="mitra" className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxContent}`}>
                    <div className={`${styles.flexCenter} ${styles.descriptionPadding}`}>
                        <h2 className='font-bold max-w-[633px] text-[48px] text-center text-black leading-[58px]'>
                            We’re PT Aio Tuku Group, and these are our products
                        </h2>
                    </div>
                </div>
            </div>
            <div className={`${styles.flexCenter} flex-col overflow-hidden relative`}>
                <div className='flex flex-row z-[1]'>
                    {mitras.map((item, index) => (
                        <div key={index} className={`flex-1 ${index === mitras.length - 1 ? 'mr-0' : 'mr-[50px]'}`}>
                            <MiniCard img={item.img} title={item.name} className="card-box-shadow"/>
                        </div>
                    ))}
                </div>
                <div className='h-[350px]'>

                </div>
                <div className={`absolute w-full h-[585px] bg-atgblack sm:rounded-t-[150px] rounded-t-[50px] z-[0] px-[125px] pt-[200px] ${styles.flexCenter} bottom-0`}>
                    <p className='leading-[43px] text-center text-white text-[34px] font-semibold'>Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.</p>
                </div>
            </div>
        </>
    )
}

export default Description