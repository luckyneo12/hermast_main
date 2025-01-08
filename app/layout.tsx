import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import ShinyButton from "@/components/ui/shiny-button";
import Whatsappbutton from "@/components/whatsappbutton";
import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";
import Footer from "@/components/footer";
import { Header } from "@/components/component";

const font = Space_Grotesk({ subsets: ["latin"] });
{/* <link rel="icon" href="" sizes="any" /> */}
export const metadata: Metadata = {
  title: "Hermas tech | Design & Development Studio",
  description: "Grow your business with Hermas, a design & development studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Whatsappbutton />
     <Link href={"https://client.hermastech.com"} target="blank">
          <ShimmerButton className=" fixed z-50 left-0 top-[45%] ">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
           login
            </span>
          </ShimmerButton>

          </Link>
          {/* <Link href={"https://client.hermastech.com"} target="blank">
          <ShimmerButton className=" fixed z-50 right-0 top-[45%]">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
           Quick Pay
            </span>
          </ShimmerButton>
          </Link> */}
            <div
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 w-[90%]  bg-white   flex items-center 
   justify-between lg:justify-center py-6 px-4 md:px-8 mx-6 "
      >
        <Header />
      </div>
        {children}
        <Footer/>

        <Analytics />
      </body>
    </html>
  );
}
