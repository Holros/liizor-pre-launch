import Image from "next/image";
import doubleIphone from "@/assets/img/doubleIphoneForHero.svg";


export default function JoinWaitlist() {
    return(
        <div className="flex items-center gap-3 px-3 py-5">
            <Image alt="app preview" width={100} height={100} src={doubleIphone}/>
        </div>
    )
}