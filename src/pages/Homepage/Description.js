import React from 'react'
import { Link } from 'react-router-dom'
import { Gombale, Soon } from '../../assets'
import { MiniCard } from '../../components'
import styles from '../../constant/style'

const Description = () => {
    const mitras = [
        {
            img: Soon,
            name: "Your Business",
            order: "order-2"
        },
        {
            img: Gombale,
            name: "Gombale",
            order: "order-3"
        },
        {
            img: Soon,
            name: "Your Business",
            order: "order-1"
        },
    ]

    return (
        <>
            <div id="mitra" className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxContent}`}>
                    <div className={`${styles.flexCenter} ${styles.descriptionPadding}`}>
                        <h2 className='font-bold max-w-[633px] sm:text-[48px] text-[38px] text-center text-black leading-[58px]'>
                            We’re PT Aio Tuku Group, and these are our products
                        </h2>
                    </div>
                </div>
            </div>
            <div className={`${styles.flexCenter} flex-col overflow-hidden relative`}>
                <div className='flex flex-row z-[1] flex-wrap-reverse sm:gap-[50px] gap-[30px] justify-center'>
                    {mitras.map((item, index) => (
                        <div key={index} className={`atglg:order-none ${item?.order}`}>
                            <MiniCard img={item.img} title={item.name} className="card-box-shadow" />
                        </div>
                    ))}
                </div>
                <div className='h-[350px]'>

                </div>
                <div className={`flex flex-col items-end justify-end absolute w-full h-[585px] bg-atgBlack sm:rounded-t-[150px] rounded-t-[50px] z-[0] bottom-0 p-5`}>
                    <p className='leading-[43px] text-center text-white sm:text-[28px] atgmd:text-[34px] text-[20px] font-semibold w-full'>Gombale is one of the subsidiaries under PT Aio Tuku Group, which is engaged in the production and sale of convection products.</p>
                    <Link className='w-full flex items-center justify-center sm:p-[60px] p-8'><button className={`${styles.btnOrange}`}>Join us!</button></Link>
                </div>
            </div>
        </>
    )
}

export default Description