import { urbanist } from "@/assets/fonts/fonts";
import footerWavyLines from "@/assets/img/footerWavyLines.svg";
import Image from "next/image";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/indtagraminstagram.svg";
import twitter from "@/assets/icons/ri_twitter-x-line.svg";
import linkedIn from "@/assets/icons/ant-design_linkedin-outlined.svg";
import telegram from "@/assets/icons/uil_telegram-alt.svg";
import youtube from "@/assets/icons/ri_youtube-line.svg";
import logo from "@/app/icon.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative bg-[#004EEBCC]  overflow-hidden text-white opacity-95 py-6 px-3">
      {/* Added a cover to disable the footer to prevent accidental clicks on the links, the links are  not available yet*/}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-100 opacity-0"></div>
      <div className="flex-col flex items-start gap-3 max-w-[73rem] m-auto">
        <div className="flex flex-col justify-between w-full gap-6 md:flex-row">
          <div className="flex flex-col gap-6 ">
            <h1
              className={`${urbanist.className} font-bold text-[40px] flex gap-1 items-center`}
            >
              <Image
                src={logo}
                alt="logo"
                height={0}
                width={0}
                className="max-w-full h-auto w-12"
              />
              Liizor
            </h1>
            <div className="flex flex-col items-start gap-4">
              <p className={`font-bold text-xl`}>
                Engage with us on our social platforms:
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: facebook, href: "" },
                  { icon: instagram, href: "" },
                  { icon: twitter, href: "" },
                  { icon: linkedIn, href: "" },
                  { icon: telegram, href: "" },
                  { icon: youtube, href: "" },
                ].map((link, index) => (
                  <Link href={link.href} key={index}>
                    <Image
                      src={link.icon}
                      alt="social media icon"
                      width={39}
                      height={39}
                      className="h-[39px] w-[39px] max-w-full border border-white rounded-full p-1"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-9">
            {[
              {
                headerLink: { name: "Company", href: "" },
                otherLinks: [
                  { name: "About Us", href: "" },
                  { name: "Careers", href: "" },
                  { name: "Blog", href: "" },
                ],
              },
              {
                headerLink: { name: "Services", href: "" },
                otherLinks: [
                  { name: "P2P Trading", href: "" },
                  { name: "Applications", href: "" },
                  { name: "Buy & Sell Cryptos", href: "" },
                  { name: "Affliate", href: "" },
                  { name: "Institutional Services", href: "" },
                ],
              },
              {
                headerLink: { name: "FAQs", href: "" },
                otherLinks: [
                  { name: "Help Centre", href: "" },
                  { name: "Community", href: "" },
                  { name: "Contact Us", href: "" },
                  { name: "Support", href: "" },
                ],
              },
              {
                headerLink: { name: "Legal", href: "" },
                otherLinks: [
                  { name: "Privacy Policy", href: "" },
                  { name: "Terms & Condition", href: "" },
                ],
              },
            ].map((section) => (
              <div
                key={section.headerLink.name}
                className="flex flex-col gap-3"
              >
                <Link
                  href={section.headerLink.href}
                  className="text-lg font-bold"
                >
                  {section.headerLink.name}
                </Link>
                {section.otherLinks.map((link) => (
                  <Link href={link.href} key={link.name}>
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p
          className={`${urbanist.className} text-white w-full py-3 border-t border-[#FFFFFF]`}
        >
          Copyright Reserve @liizor.com
        </p>
      </div>
      <Image
        width={1990}
        height={560}
        src={footerWavyLines}
        alt="wavy lines"
        className="absolute bottom-0 left-0 right-0 w-[100vw] h-auto max-w-full -z-10 opacity-20"
      />
    </div>
  );
}
