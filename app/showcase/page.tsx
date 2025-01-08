import { Header } from "@/components/component";
import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

const Showcase = () => {
  return (
    <div className=" overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      {/* <ShowcaseNavbar /> */}
    {/* <div className="overflow-hidden rounded-[6px]  w-[90%]top-5 sticky md:mx-auto z-50  bg-white   flex items-center 
   justify-between lg:justify-center py-6 px-4 md:px-8 mx-6 ">
    <Header/>
    </div> */}
    <div className="bg-green-400 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Showcase</h2>
          
        </div>
      </div>
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20 "
            words="Design & Code That Helps Your Business Grow"
          />
        </div>
        <p className="md:text-center text-xl md:text-2xl my-6   md:w-4/5 mx-auto text-gray-500">
          Have a look at some of our recent projects.
        </p>

        <BlurFadeDemo />

        <LetsMakeThingsHappenSection />
      </section>

     
    </div>
  );
};

export default Showcase;
