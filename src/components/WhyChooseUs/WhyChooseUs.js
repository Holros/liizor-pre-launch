import Link from "next/link";
import rightArrow from "@/assets/icons/move-down-right.svg";
import Image from "next/image";
import compliance from "@/assets/icons/compliance.svg"
import friendly from "@/assets/icons/friendly.svg"
import security from "@/assets/icons/security.svg"
import support from "@/assets/icons/support.svg"
import transparent from "@/assets/icons/transparent.svg"
import unique from "@/assets/icons/unique.svg"

export default function WhyChooseUs() {
  return (
    <div className="bg-white *:max-w-[73rem] *:m-auto py-6 px-3 flex flex-col gap-7">
      <div className="flex flex-col items-center gap-5">
        <p className="text-3xl">Why Choose Us</p>
        <h1 className="text-5xl font-bold">
          The crypto <span className="text-[#004EEB]">trading</span> and{" "}
          <span className="text-[#004EEB]">exchange</span> platform you can
          trust.
        </h1>
        <Link
          href="#joinWaitlist"
          passHref
          className="flex gap-1 text-[#004EEB] p-3 bg-[#004EEB1A] rounded-full items-center"
        >
          <span>Join the Waitlist</span>
          <Image
            src={rightArrow}
            alt="arrow icon"
            width={30}
            height={30}
            className="h-auto max-w-full w-[30px]"
          />
        </Link>{" "}
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {[
          {
            title: "Security and Trust",
            points: [
              "Enhance security with multi-signature wallets, reducing the risk of unauthorized transactions.",
              "Your assets and personal information are protected with cutting-edge encryption technologies.",
            ],
            picture: security,
          },
          {
            title: "User-Friendly Interface",
            points: [
              "Navigate easily with our user-friendly interface designed for both beginners and experienced traders.",
              " Access step-by-step guides and tutorials to help you get started and improve your trading skills.s suspendisse orci tempor pretium aliquet ",
            ],
            picture: friendly,
          },
          {
            title: "Unique Features",
            points: [
              "Enjoy seamless peer-to-peer trading without intermediaries, ensuring privacy and efficiency.",
              "Trade a diverse selection of cryptocurrencies, including popular and emerging tokens.",
              "Benefit from competitive and transparent fee structures, maximizing your trading profits.",
            ],
            picture: unique,
          },
          {
            title: "Transparency",
            points: [
              "Understand exactly what you're getting into with transparent terms and conditions.",
              "Stay informed about platform updates, maintenance, and any changes affecting your experience.",
            ],
            picture: transparent,
          },
          {
            title: "Regulatory Compliance",
            points: [
              "At Liizor, we prioritize your security and trust by adhering to the highest standards of regulatory compliance.",
              "From comprehensive KYC and AML measures to secure data handling and regular audits, we ensure a safe and transparent trading environment for all our users.",
            ],
            picture: compliance,
          },
          {
            title: "24/7 Support",
            points: [
              "Access our dedicated customer support team anytime, day or night.",
              "Priority Support for Early Users: Early access users receive priority support to ensure a smooth experience.",
            ],
            picture: support,
          },
        ].map((why) => (
          <div
            key={why.title}
            className="flex flex-col gap-3 p-3 rounded-md shadow-md"
          >
            <Image
              src={why.picture}
              width={91}
              height={91}
              alt="icon"
              className="max-w-full h-auto w-[91px]"
            />
            <h2 className="text-xl font-bold">{why.title}</h2>
            <ul className="text-sm list-disc">
              {why.points.map((point) => (
                <li key={point} className="ml-4">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
