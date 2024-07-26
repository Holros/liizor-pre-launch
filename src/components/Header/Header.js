import { lato, urbanist } from "@/assets/fonts/fonts";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-[#004EEBCC] to-[#1A2599]">
      {" "}
      <div className="flex items-center justify-between px-3 gap-3 py-4 max-w-[73rem] m-auto">
        <p className={`${urbanist.className} text-[40px] leading-[56px] text-white`}>Liizor</p>
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
