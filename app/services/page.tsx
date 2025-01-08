import { WordPullUpDemo } from '@/components/demos/word-pull-up-demo'
import Image from 'next/image'
import React from 'react'
import { Element } from 'react-scroll'

const page = () => {
    const services = [
        {
          icon: "/images/s_6.png",
          title: "Web Design + Development",
          description:
            "Take your business to the next level with our web design and development services",
        },
        {
          icon: "/images/s_1.png",
          title: "Search Engine Optimization",
          description:
            "Get your website to the top of search engine results with our SEO services",
        },
        {
          icon: "/images/s_5.png",
          title: "Content Creation",
          description:
            "Boost your brand's online presence with our social media marketing services",
        },
        {
          icon: "/images/s_3.png",
          title: "Social Media Marketing",
          description:
            "Interact with your customers and increase sales with our email marketing services",
        },
        {
          icon: "/images/s_4.png",
          title: "Email Marketing",
          description:
            "With our content creation services, we help businesses drive results",
        },
        {
          icon: "/images/s_2.png",
          title: "Pay-Per-Click Advertising",
          description:
            "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
        },
      ];
  return (
    <div>
        <div className="bg-green-400 text-black py-16 mb-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Services</h2>
          
        </div>
      </div>
         <div>
                <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
                  <h1>
                    <WordPullUpDemo />
                  </h1>
                  <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
                    All of our services are designed to help your business stand out
                  </p>
        
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    {services.map((service) => (
                      <div
                        key={service.title}
                        className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
                      >
                        <Image
                          src={service.icon}
                          width={10000}
                          height={10000}
                          className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                          alt="image"
                        />
                        <h1 className="text-xl font-medium">{service.title}</h1>
                        <p className="text-gray-500">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
    </div>
  )
}

export default page
