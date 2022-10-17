const styles = {
  //1140
    boxWidth: "xl:max-w-[1140px] w-full",
    boxContent: "xl:max-w-[1440px] w-full",

    btnOrange: "bg-primary rounded-full w-[200px] h-[60px] text-white font-semibold hover:bg-white hover:text-primary hover:scale-110 ease-in-out duration-300",
    btnWhite: "bg-white rounded-full w-[200px] h-[60px] text-primary font-semibold hover:bg-black hover:text-white hover:scale-110 ease-in-out duration-300",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexCenterSpaceB: "flex justify-between items-center",
    flexStart: "flex justify-center items-start",

  
    servicesHeroPaddingY: "sm:py[158px] py-16",
    serviceCardPaddingY: "sm:pt[130px] pt-16",
    descriptionPadding: "sm:pt-[200px] py-16",
    promotionPadding: "sm:py-[120px] py-16",
    footerPaddingY: "sm:py-[80px] py-16",
    
 
    paddingContentY: "sm:py-[100px] py-16",
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    animateEaseInOut: "scale-110 ease-in-out duration-300",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;