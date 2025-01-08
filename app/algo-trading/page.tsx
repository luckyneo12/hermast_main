'use client'
import Api from "@/components/Api";
import { Header } from "@/components/component";
import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import WordPullUp from "@/components/magicui/word-pull-up";
import PricingSectionCards from "@/components/pricing";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { RainbowButton } from "@/components/ui/rainbow-button";
import ShimmerButton from "@/components/ui/shimmer-button";
import ShinyButton from "@/components/ui/shiny-button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';



const Page = () => {
 
  const [isOpen, setIsOpen] = useState<boolean>(false); 

const handleToggle = (): void => {
  if(!isOpen){
    setIsOpen(true);
  }
};

const handleClose = (): void => {
  if(isOpen){
    setIsOpen(false);
  }
};

  return (
    <div className=" overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] border-2 ">
      {/* <ShowcaseNavbar /> */}
      {/* <div
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 w-[90%]  bg-white   flex items-center 
   justify-between lg:justify-center py-6 px-4 md:px-8 mx-6 "
      >
        <Header />
      </div> */}
      <div className="bg-green-400 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Algo Trading</h2>
          
        </div>
      </div>
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20 "
            words="We will offer the best pricing"
          />
        </div>
        <p className="md:text-center text-xl md:text-2xl my-6   md:w-4/5 mx-auto text-gray-500">
          Our main goal is customer satisfaction, which we obtain through market
          orientation and the allocation of ongoing software service and support
          backed with competitive pricing.
        </p>

        {/* <BlurFadeDemo /> */}
        <PricingSectionCards />
        <Api/>

        <LetsMakeThingsHappenSection />
      </section>

      {/* <Footer /> */}
      {/* <Link href={"https://client.hermastech.com"} target="_blank">
  <div className="py-2 px-4 text-white bg-black  fixed top-[45%] right-0 w-26 h-10 rounded-xl inline-block">
    Quick Pay
  </div>
</Link> */}

      {/* <Link href={"https://client.hermastech.com"} target="blank">
          <ShimmerButton className=" fixed z-50 right-0 top-[45%] ">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
           Quick Pay
            </span>
          </ShimmerButton>

          </Link> */}
<Modal>
  <ModalTrigger className="text-white flex justify-center group/modal-btn">
    <RainbowButton onClick={handleToggle} className="m-auto fixed z-50 right-0 top-[45%] text-white rounded-xl">
      Quick Pay
     </RainbowButton>
  </ModalTrigger>
  {isOpen &&<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-4xl sm:w-11/12">
      
    

      
      <div className="flex justify-between items-center" >
        <div></div>
        <h2  className="text-2xl font-bold text-center text-black dark:text-white mb-4">Payment Details</h2>
        <button onClick={handleClose}><CloseIcon/></button>
      </div>

    
      <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 items-center md:flex-row md:gap-0 md:justify-between ">
        
        <Image
          src="/images/hdfclogo.png"
          height={100}
          width={100}
          className="h-32 w-32 object-cover rounded-xl group-hover/card:shadow-xl"
          alt="HDFC Logo"
        />

       
        <div className="flex flex-col justify-start items-start ">
          <WordPullUp
            className=" font-bold tracking-[-0.02em] text-black dark:text-white   text-sm"
            words="Account Holder Name: HERMASTECH"
          />
          <WordPullUp
            className=" font-bold tracking-[-0.02em] text-black dark:text-white   text-sm"
            words="Account Number: 924020030441126"
          />
          <WordPullUp
            className=" font-bold tracking-[-0.02em] text-black dark:text-white   text-sm"
            words="IFSC Code: UTIB0004367"
          />
          <WordPullUp
            className=" font-bold tracking-[-0.02em] text-black dark:text-white   text-sm"
            words="UPI-ID: 7049966771-4@axl"
          />
        </div>

   
        <Image
          src="/images/QR.jpg"
          height={100}
          width={100}
          className="h-32 w-32 object-cover rounded-xl group-hover/card:shadow-xl"
          alt="QR Code"
        />
      </div>
      <div className="flex flex-col gap-4 items-center md:flex-row md:gap-0 md:justify-between ">
   
        <Image
          src="/images/hdfclogo.png"
          height={100}
          width={100}
          className="h-32 w-32 object-cover rounded-xl group-hover/card:shadow-xl"
          alt="HDFC Logo"
        />

        
        <div className="flex flex-col justify-start items-start ">
          <WordPullUp
            className=" font-bold tracking-[-0.02em] text-black dark:text-white   text-sm"
            words="Account Holder Name: HERMASTECH"
          />
          <WordPullUp
            className=" font-bold tracking-[-0.02em] text-black dark:text-white   text-sm"
            words="Account Number: 924020030441126"
          />
          <WordPullUp
            className=" font-bold tracking-[-0.02em] text-black dark:text-white   text-sm"
            words="IFSC Code: UTIB0004367"
          />
          <WordPullUp
            className=" font-bold tracking-[-0.02em] text-black dark:text-white   text-sm"
            words="UPI-ID: 7049966771-4@axl"
          />
        </div>

       
        <Image
          src="/images/QR.jpg"
          height={100}
          width={100}
          className="h-32 w-32 object-cover rounded-xl group-hover/card:shadow-xl"
          alt="QR Code"
        />
      </div>
      </div>
    </div>
  </div>}
</Modal>




    </div>
  );
};

export default Page;
