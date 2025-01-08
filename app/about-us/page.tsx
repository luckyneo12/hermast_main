"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-green-400 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">About HermasTech</h2>
          <p className="mt-4 text-lg">Your trusted partner in trader-friendly software solutions.</p>
        </div>
      </div>

      {/* About Us Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/ezgif.com-apng-maker.png" // Replace with animated image path
                alt="Animated Image"
                width={600}
                height={600}
                className="rounded-lg  "
              />
            </motion.div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-4">
            we deliver advanced trading software and IT services designed to empower businesses and traders. Our flagship product, Algosoft, offers precise signals and features for profitable trading in all market conditions
            </p>
            <p className="text-lg mb-4">
            we are committed to providing reliable solutions that combine innovation, simplicity, and efficiency for lasting success.
            </p>
            <p className="text-lg">
              Based in Indore, Madhya Pradesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
