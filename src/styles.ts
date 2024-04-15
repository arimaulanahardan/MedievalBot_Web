const styles = {
  boxWidth: "xl:max-w-[1340px] sm:w-full w-full mx-auto",

  heading2: "font-medievalSharp font-bold sm:text-[52px] text-[30px] text-white w-full text-center sm:text-left sm:leading-[65px] leading-[35px]",

  paragraph: "font-medievalSharp font-normal text-dimWhite sm:text-[20px] text-[14px] sm:leading-[30.8px] leading-[20px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-4 px-4",
  paddingY: "sm:py-4 py-4",
  padding: "sm:px-4 px-6 sm:py-4 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
}

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
}

export default styles;