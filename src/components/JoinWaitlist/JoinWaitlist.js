import Image from "next/image";
import doubleIphone from "@/assets/img/doubleIphoneForWaitlist.svg";
import { raleway } from "@/assets/fonts/fonts";
import WaitlistForm from "./WaitlistForm";

export default function JoinWaitlist() {
  return (
    <div className="px-3 py-5" id="joinWaitlist">
      <div className="flex flex-col-reverse justify-between gap-3 md:flex-row-reverse max-w-[73rem] m-auto">
        <div className="basis-[50%]">
          <Image
            alt="app preview"
            width={782}
            height={794}
            src={doubleIphone}
            className="w-full h-auto max-w-full"
          />
        </div>
        <div className="flex flex-col gap-10 justify-between basis-[50%]">
          <div className="flex flex-col gap-5 text-center bg-[#004EEB1A] p-4">
            <h1 className="font-bold text-5xl">
              Join the <span className="text-[#004EEB]">Liizor Waitlist</span>
            </h1>
            <p className={`${raleway.className} font-medium`}>
              Be among the first to experience the most inclusive and secure
              crypto trading platform.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
}
