import React from 'react'
import { Gombale } from '../../assets'
import { MiniCard } from '../../components'
import styles from '../../constant/style'

const Description = () => {
    const mitras = [
        {
            img: Gombale,
            name: "Gombale"
        },
        {
            img: Gombale,
            name: "Gombale"
        },
        {
            img: Gombale,
            name: "Gombale"
        },
    ]

    return (
        <>
            <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxContent}`}>
                    <div className={`${styles.flexCenter} ${styles.descriptionPadding}`}>
                        <h2 className='font-bold max-w-[600px] text-[48px] text-center text-white leading-[58px]'>
                            We’re PT Aio Tuku Group, and these are our mitra
                        </h2>
                    </div>
                </div>
            </div>
            <div className={`${styles.flexCenter} flex-col overflow-hidden`}>
                <div className='flex flex-row z-[1]'>
                    {mitras.map((item, index) => (
                        <div key={index} className={`flex-1 ${index === mitras.length - 1 ? 'mr-0' : 'mr-[50px]'}`}>
                            <MiniCard img={item.img} title={item.name} />
                        </div>
                    ))}
                </div>
                <div className={`relative w-full h-[585px] bg-atgblack sm:rounded-[150px] rounded-[50px] top-[-200px] z-[0] px-[125px] pt-[200px] ${styles.flexCenter}`}>
                    <p className='leading-[43px] text-center text-white text-[34px] font-semibold'>Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.</p>
                </div>
            </div>
        </>
    )
}

export default Description