import { lato, urbanist } from "@/assets/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/icon.svg"

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-[#004EEBCC] to-[#1A2599] px-3 py-4">
      {" "}
      <div className="flex items-center justify-between gap-3 max-w-[73rem] m-auto">
        <p
          className={`${urbanist.className} text-[40px] leading-[56px] text-white flex items-center gap-1`}
        >
          <Image src={logo} alt="logo" height={0} width={0} className="max-w-full h-auto w-12"/> Liizor
        </p>
        <Link
          href="#joinWaitlist"
          passHref
          className={`px-6 py-4 font-bold rounded-[10px] bg-white`}
        >
          <span className="bg-gradient-to-r from-[#004EEBCC] to-[#1A2599] bg-clip-text text-transparent">
            Get Early Access
          </span>
        </Link>
      </div>
    </div>
  );
}
