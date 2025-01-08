"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon, X, MinusIcon, ChevronRightIcon } from "lucide-react";
import ShinyButton from "./ui/shiny-button";
import { RainbowButton } from "./ui/rainbow-button";

interface PlanFeature {
  type: string;
  features: {
    name: string;
    free: boolean;
    startup: boolean;
    team: boolean;
    enterprise: boolean;
  }[];
}
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import WordPullUp from "./magicui/word-pull-up";
import { Input } from "./ui/input";
import { AnimatedSubscribeButton } from "./ui/animated-subscribe-button";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
const images = [
  "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const planFeatures: PlanFeature[] = [
  {
    type: "",
    features: [
      {
        name: "Auto Trading",
        free: true,
        startup: true,
        team: true,
        enterprise: true,
      },
      {
        name: "Multi Strategy Mix	",
        free: false,
        startup: true,
        team: true,
        enterprise: true,
      },
    ],
  },
  {
    type: "",
    features: [
      {
        name: "Premium Webinars",
        free: false,
        startup: true,
        team: true,
        enterprise: true,
      },
      {
        name: "Whatsapp Support",
        free: false,
        startup: false,
        team: true,
        enterprise: true,
      },
      {
        name: "Executive Support",
        free: true,
        startup: true,
        team: true,
        enterprise: true,
      },
      {
        name: "Developer Support",
        free: false,
        startup: false,
        team: true,
        enterprise: true,
      },
    ],
  },
  {
    type: "",
    features: [
      {
        name: "Expert Support",
        free: false,
        startup: false,
        team: true,
        enterprise: true,
      },
      {
        name: "Monthly Maintainence Charges",
        free: false,
        startup: true,
        team: true,
        enterprise: true,
      },
    ],
  },
];

export default function PricingSectionCards() {
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
    <>
      {/* Pricing */}
      <div className="container py-24 lg:py-32 ">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Pricing
          </h2>
          <p className="mt-1 text-muted-foreground">
            Whatever your status, our offers evolve according to your needs.
          </p>
        </div>
        {/* End Title */}
        {/* Switch */}
        {/* <div className="flex justify-center items-center">
          <Label htmlFor="payment-schedule" className="me-3">
            Monthly
          </Label>
          <Switch id="payment-schedule" />
          <Label htmlFor="payment-schedule" className="relative ms-3">
            Annual
            <span className="absolute -top-10 start-auto -end-28">
              <span className="flex items-center">
                <svg
                  className="w-14 h-8 -me-6"
                  width={45}
                  height={25}
                  viewBox="0 0 45 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                    fill="currentColor"
                    className="text-muted-foreground"
                  />
                </svg>
                <Badge className="mt-3 uppercase">Save up to 10%</Badge>
              </span>
            </span>
          </Label>
        </div> */}
        {/* End Switch */}
        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4  gap-6 lg:items-center">
          {/* Card */}
          <Card>
            <CardHeader className="text-center pb-2  ">
              <CardTitle className="mb-7">Hermas Prime</CardTitle>
              <span className="font-bold text-5xl">₹14999</span>
            </CardHeader>
            <CardDescription className="text-center">
              Monthly +18% GST
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-xs">
                <li className="flex space-x-2 justify-between">
                  {/* <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}

                  <span className="text-muted-foreground font-bold">Quarterly</span>
                  <span className="text-muted-foreground font-bold">
                    ₹34,999 +<br />18% GST
                  </span>
                </li>
                <li className="flex space-x-2  justify-between">
                  {/* <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}
                  <span className="text-muted-foreground font-bold">Half Yearly</span>
                  <span className="text-muted-foreground font-bold">
                    ₹59,999 +<br />18% GST
                  </span>
                </li>
                <li className="flex space-x-2  justify-between">
                  {/* <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}
                  <span className="text-muted-foreground font-bold">Yearly</span>
                  <span className="text-muted-foreground font-bold">
                    ₹99,999 +<br />18% GST
                  </span>
                </li>
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Auto Trading</span>
                </li>
                <li className="flex space-x-2 justify-between bg-red-100 rounded-md p-2">
                  <X className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Multi Strategy Mix
                  </span>
                </li>
                <li className="flex space-x-2 justify-between bg-red-100 rounded-md p-2">
                  <X className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Premium Webinars
                  </span>
                </li>
                <li className="flex space-x-2 justify-between bg-red-100 rounded-md p-2">
                  <X className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Whatsapp Support
                  </span>
                </li>
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Executive Support
                  </span>
                </li>{" "}
                <li className="flex space-x-2 justify-between bg-red-100 rounded-md p-2">
                  <X className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Developer Support
                  </span>
                </li>{" "}
                <li className="flex space-x-2 justify-between bg-red-100 rounded-md p-2">
                  <X className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Expert Support</span>
                </li>{" "}
                <li className="flex space-x-2 justify-between">
    {/* <X className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}
    <span className="text-muted-foreground font-bold">
      Monthly <br />
      Maintainence Charges
    </span>
    <span className="text-muted-foreground font-bold">₹999</span>
  </li>
              </ul>
            </CardContent>
            <CardFooter>
              {/* <Button className="w-full" variant={"outline"}>
                Sign up
              </Button> */}
<Modal>
<ModalTrigger className=" text-white flex justify-center group/modal-btn">
<ShinyButton onClick={handleToggle}  className="m-auto">Buy Now</ShinyButton>
                </ModalTrigger>
  {isOpen &&<div className="fixed inset-0 z-50 flex items-center justify-center">
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

            </CardFooter>


          </Card>
          {/* End Card */}
          {/* Card */}
          <Card className="border-primary">
            <CardHeader className="text-center pb-2">
              <Badge className="uppercase w-max self-center mb-3">
                Most popular
              </Badge>
              <CardTitle className="!mb-7"> Hermas Elite</CardTitle>
              <span className="font-bold text-5xl">₹22222</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto">
              Monthly +18% GST
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-xs">
                <li className="flex space-x-2 justify-between">
                  {/* <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}

                  <span className="text-muted-foreground font-bold">Quarterly</span>
                  <span className="text-muted-foreground font-bold">Customize</span>
                </li>
                <li className="flex space-x-2  justify-between">
                  {/* <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}
                  <span className="text-muted-foreground font-bold">Half Yearly</span>
                  <span className="text-muted-foreground font-bold">Customize</span>
                </li>
                <li className="flex space-x-2  justify-between">
                  {/* <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}
                  <span className="text-muted-foreground font-bold">Yearly</span>
                  <span className="text-muted-foreground font-bold">Customize</span>
                </li>
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Auto Trading</span>
                </li>
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Multi Strategy Mix
                  </span>
                </li>
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Premium Webinars
                  </span>
                </li>
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Whatsapp Support
                  </span>
                </li>
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Executive Support
                  </span>
                </li>{" "}
                <li className="flex space-x-2 justify-between bg-red-100 rounded-md p-2">
                  <X className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Developer Support
                  </span>
                </li>{" "}
                <li className="flex space-x-2 justify-between bg-red-100 rounded-md p-2">
                  <X className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Expert Support</span>
                </li>{" "}
                <li className="flex space-x-2 justify-between">
                  {/* <X className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}
                  <span className="text-muted-foreground font-bold">
                    Monthly <br />
                    Maintainence Charges
                  </span>
                  <span className="text-muted-foreground font-bold">₹999</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              {/* <Button className="w-full">Sign up</Button> */}{" "}
              <Modal>
<ModalTrigger className=" text-white flex justify-center group/modal-btn">
<RainbowButton onClick={handleToggle} className="m-auto ">
      Buy Now
     </RainbowButton>
                </ModalTrigger>
  {isOpen &&<div className="fixed inset-0 z-50 flex items-center justify-center">
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
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Hermas Alpha</CardTitle>
              <span className="font-bold text-5xl">₹29999</span>
            </CardHeader>
            <CardDescription className="text-center  w-11/12 mx-auto">
              Monthly +18% GST
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-xs">
                <li className="flex space-x-2 justify-between">
                  {/* <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}

                  <span className="text-muted-foreground font-bold">Quarterly</span>
                  <span className="text-muted-foreground font-bold">Customize</span>
                </li>
                <li className="flex space-x-2  justify-between">
                  {/* <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}
                  <span className="text-muted-foreground font-bold">Half Yearly</span>
                  <span className="text-muted-foreground font-bold">Customize</span>
                </li>
                <li className="flex space-x-2  justify-between">
                  {/* <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}
                  <span className="text-muted-foreground font-bold">Yearly</span>
                  <span className="text-muted-foreground font-bold">Customize</span>
                </li>
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Auto Trading</span>
                </li>
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Multi Strategy Mix
                  </span>
                </li>
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Premium Webinars
                  </span>
                </li>
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Whatsapp Support
                  </span>
                </li>
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Executive Support
                  </span>
                </li>{" "}
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Developer Support
                  </span>
                </li>{" "}
                <li className="flex space-x-2 justify-between bg-green-100 rounded-md p-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Expert Support</span>
                </li>{" "}
                <li className="flex space-x-2 justify-between">
                  {/* <X className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}
                  <span className="text-muted-foreground font-bold">
                    Monthly <br />
                    Maintainence Charges
                  </span>
                  <span className="text-muted-foreground font-bold">₹999</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              {/* <Button className="w-full" variant={"outline"}>
                Sign up
              </Button> */}
            <Modal>
<ModalTrigger className=" text-white flex justify-center group/modal-btn">
<ShinyButton onClick={handleToggle}  className="m-auto">Buy Now</ShinyButton>
                </ModalTrigger>
  {isOpen &&<div className="fixed inset-0 z-50 flex items-center justify-center">
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
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Hermas Pro</CardTitle>
              <span className="font-bold text-5xl">₹49999</span>
            </CardHeader>
            <CardDescription className="text-center  w-11/12 mx-auto">
              Monthly +18% GST
            </CardDescription>
            <CardContent>
            <ul className="mt-7 space-y-2.5 text-xs">
  <li className="flex space-x-2 justify-between">
    {/* <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}
    <span className="text-muted-foreground font-bold">Quarterly</span>
    <span className="text-muted-foreground font-bold">Customize</span>
  </li>
  <li className="flex space-x-2 justify-between">
    {/* <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}
    <span className="text-muted-foreground font-bold">Half Yearly</span>
    <span className="text-muted-foreground font-bold">Customize</span>
  </li>
  <li className="flex space-x-2 justify-between">
    {/* <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}
    <span className="text-muted-foreground font-bold">Yearly</span>
    <span className="text-muted-foreground font-bold">Customize</span>
  </li>
  <li className="flex space-x-2 bg-green-100 rounded-md p-2">
    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
    <span className="text-muted-foreground">Auto Trading</span>
  </li>
  <li className="flex space-x-2 bg-green-100 rounded-md p-2">
    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
    <span className="text-muted-foreground">Multi Strategy Mix</span>
  </li>
  <li className="flex space-x-2 bg-green-100 rounded-md p-2">
    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
    <span className="text-muted-foreground">Premium Webinars</span>
  </li>
  <li className="flex space-x-2 bg-green-100 rounded-md p-2">
    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
    <span className="text-muted-foreground">Whatsapp Support</span>
  </li>
  <li className="flex space-x-2 bg-green-100 rounded-md p-2">
    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
    <span className="text-muted-foreground">Executive Support</span>
  </li>
  <li className="flex space-x-2 bg-green-100 rounded-md p-2">
    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
    <span className="text-muted-foreground">Developer Support</span>
  </li>
  <li className="flex space-x-2 bg-green-100 rounded-md p-2">
    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
    <span className="text-muted-foreground">Expert Support</span>
  </li>
  <li className="flex space-x-2 justify-between">
    {/* <X className="flex-shrink-0 mt-0.5 h-4 w-4" /> */}
    <span className="text-muted-foreground font-bold">
      Monthly <br />
      Maintainence Charges
    </span>
    <span className="text-muted-foreground font-bold">₹999</span>
  </li>
</ul>

            </CardContent>
            <CardFooter>
              {/* <Button className="w-full" variant={"outline"}>
                Sign up
              </Button> */}
             <Modal>
<ModalTrigger className=" text-white flex justify-center group/modal-btn">
<ShinyButton onClick={handleToggle}  className="m-auto">Buy Now</ShinyButton>
                </ModalTrigger>
  {isOpen &&<div className="fixed inset-0 z-50 flex items-center justify-center">
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
            </CardFooter>
          </Card>
          {/* End Card */}
        </div>
        {/* End Grid */}
        {/* Comparison table */}
       
        {/* End Comparison table */}
      </div>
      {/* End Pricing */}
    </>
  );
}
