import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Image from "next/image";
import mergedProfile from "@/assets/img/mergedProfilePictures.svg";
import rightArrow from "@/assets/icons/white-arrow.svg";
import logo from "@/assets/img/logo.svg"
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      
      <WhyChooseUs />
      <div className="flex flex-col gap-6 md:flex-row md:gap-3 max-w-[73rem] m-auto justify-between items-center py-5 px-3 shadow-md rounded-3xl mb-5">
        <div className="flex flex-col gap-6 basis-[60%] items-start">
          <h1 className="text-5xl font-bold">Early Access</h1>
          <div className="flex flex-col gap-3 lg:items-center lg:flex-row">
            <Image
              src={mergedProfile}
              width={170}
              height={50}
              className="h-auto max-w-full w-[170px]"
              alt="users"
            />
            <p className="leading-[22px] ">
              {" "}
              Become a Liizor Influencer: Provide Feedback and Shape the Future
              of Crypto Trading
            </p>
          </div>
          <Link
            href="#joinWaitlist"
            passHref
            className="flex gap-1 text-[23px] text-white p-3 bg-[#004EEB] rounded-[10px] items-center text-xl"
          >
            <span>Join the Waitlists</span>
            <Image
              src={rightArrow}
              width={30}
              height={30}
              className="h-auto max-w-full w-[30px]"
              alt="arrow icon"
            />
          </Link>
        </div>
        <div className="basis-[40%] flex justify-start md:justify-center w-full">
          <Image
            src={logo}
            width={384}
            height={357}
            alt="logo"
            className="w-[230px] h-auto max-w-full"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
