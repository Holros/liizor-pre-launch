import Image from "next/image";
import Link from "next/link";
import { lato } from "@/assets/fonts/fonts";
import linesSVG from "@/assets/img/Topology-1.png";
import doubleIphone from "@/assets/img/doubleIphoneForHero.svg";
import mergedProfile from "@/assets/img/mergedProfilePictures.svg";
import rightArrow from "@/assets/icons/move-down-right.svg";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center bg-gradient-to-r from-[#004EEBCC] to-[#1A2599] px-3 py-5 text-white overflow-hidden">
      <Image width={1728} height={800} src={linesSVG} className="absolute hidden lg:block" />
      <div className="flex flex-col gap-6 md:flex-row md:gap-3 max-w-[73rem] m-auto justify-between items-center z-10">
        <div className="flex flex-col gap-6 basis-[60%] items-start">
          <h1
            className={`${lato.className} font-bold text-6xl`}
          >
            Crypto for all, <span className="text-[#FFC700]">Anytime</span>,
            Anywhere
          </h1>
          <p className="text-lg leading-7">
            Join our exclusive waitlist and be more than just a user—be a
            driving force behind Liizor's evolution. As a valued early adopter,
            your insights and feedback will directly influence our platform’s
            development.
          </p>
          <div className="flex flex-col gap-3 lg:items-center lg:flex-row">
            <Image
              src={mergedProfile}
              width={170}
              height={50}
              className="h-auto max-w-full w-[170px]"
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
            className="flex gap-1 text-[23px] text-[#004EEB] p-3 bg-white rounded-[10px] items-center text-xl"
          >
            <span>Join the Waitlists</span>
            <Image
              src={rightArrow}
              width={30}
              height={30}
              className="h-auto max-w-full w-[30px]"
            />
          </Link>
        </div>
        <div className="basis-[40%]">
          <Image
            src={doubleIphone}
            width={623}
            height={652}
            className="w-full h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
