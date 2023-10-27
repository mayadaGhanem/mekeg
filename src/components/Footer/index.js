import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white w-full">
      <div
        className={`flex flex-col lg:flex-row justify-between items-center w-full px-2  py-2 gap-2`}
      >
        <Link href="https://mekeg.org/">
          <Image
            src="/misr-meke.png"
            alt="meke logo"
            width={"295"}
            height={"84"}
          />
        </Link>
        <div className="flex ">
          <label
            htmlFor="email"
            className="flex text-deactive  focus-within:text-deactive px-[12px] items-center border border-primary rounded-l"
          >
            <div className=" px-1.5 lg:px-2.5">
              <EmailIcon className="pointer-events-none w-1 h-1   transform -translate-y-1/2 " />
            </div>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="For Newsletter Enter your email"
              className="form-input w-full lg:w-52 text-deactive font-medium text-sm focus::border-none focus::focus:ring-0  focus:outline-none"
            />
          </label>

          <button
            className=" flex  rounded-r bg-primary  text-base  text-white px-1.5 py-[12px] lg:px-[36px] font-semibold "
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <SendIcon />
            <span className="px-2.5">Send</span>
          </button>
        </div>
      </div>

      <div className="flex-grow border-t border-[#D4D4D4] w-full px-2  "></div>
      <div className={`grid grid-cols-12  place-items-center py-2  px-2 `}>
        <div className="col-span-12 lg:col-span-4 flex flex-col w-full h-full ">
          <span className="text-body text-sm">
            Misr El Kheir Foundation (MEK) is a non-profit development
            institution established in 2007 with the objective of developing the
            Egyptian individual in a comprehensive manner. Five key areas have
            been selected for human development namely:Health, Education,
            Scientific Research, Social Solidarity and Aspects of Life.
          </span>
          <span className="text-body text-xxl font-semibold pt-2 ">
            Download Application
          </span>
          <div className="flex gap-1 pt-4.5">
            <Image
              src="/appGallery.png"
              width={"100"}
              height={"33"}
              alt={"app Gallery"}
            />
            <Image
              src="/appStore.png"
              width={"100"}
              height={"33"}
              alt={"app Store"}
            />
            <Image
              src="/googlePlay.png"
              width={"100"}
              height={"33"}
              alt={"google Play"}
            />
          </div>
        </div>
        <div className="col-span-0 lg:col-span-1" />
        <div className="col-span-12 lg:col-span-7 w-full pt-2 lg:pt-0  ">
          <div className="grid grid-cols-12  gap-2 ">
            <div className="col-span-6 lg:col-span-3 flex flex-col">
              <span className="text-black text-xl font-semibold space-y-1">
                Discover
              </span>
              <span className="text-body text-base">Health</span>
              <span className="text-body text-base">Education</span>
              <span className="text-body text-base">Research</span>
              <span className="text-body text-base">social solidarity</span>
              <span className="text-body text-base">Walks of life</span>
              <span className="text-body text-base">
                Integrated Development
              </span>
              <span className="text-body text-base">civil associations</span>
            </div>

            <div className="col-span-6 lg:col-span-3 flex flex-col">
              <span className="text-black text-xl font-semibold space-y-1">
                About us
              </span>
              <span className="text-body text-base">About the Foundation</span>
              <span className="text-body text-base">Board of Trustees</span>
              <span className="text-body text-base">success stories</span>
              <span className="text-body text-base">Our Partners</span>
            </div>
            <div className="col-span-6 lg:col-span-3 flex flex-col ">
              <span className="text-black text-xl font-semibold space-y-1">
                Donations
              </span>
              <span className="text-body text-base">Donation campaigns</span>
              <span className="text-body text-base">Aspects of donation</span>
              <span className="text-body text-base">Donations</span>
              <span className="text-body text-base">Calculate your zakat</span>

              <span className="text-body text-base">Electronic payment</span>

              <span className="text-body text-base">
                Request a delegate to collect
              </span>

              <span className="text-body text-base">
                Donation from outside Egypt
              </span>

              <span className="text-body text-base">Branches addresses</span>
            </div>

            <div className="col-span-6 lg:col-span-3 flex flex-col">
              <span className="text-black text-xl font-semibold space-y-1">
                Join us
              </span>
              <span className="text-body text-base">Volunteer</span>
              <span className="text-body text-base">Jobs</span>
              <span className="text-body text-base">Training</span>
              <span className="text-body text-base">Associations</span>
            </div>
          </div>
        </div>
      </div>

      <GreenFooter />
    </footer>
  );
}
const EmailIcon = () => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7928 2C12.6868 2 13.5468 2.35333 14.1795 2.98733C14.8128 3.62 15.1668 4.47333 15.1668 5.36667V10.6333C15.1668 12.4933 13.6535 14 11.7928 14H5.20683C3.34616 14 1.8335 12.4933 1.8335 10.6333V5.36667C1.8335 3.50667 3.3395 2 5.20683 2H11.7928ZM12.5468 5.46667C12.4068 5.45933 12.2735 5.50667 12.1728 5.6L9.16683 8C8.78016 8.32067 8.22616 8.32067 7.8335 8L4.8335 5.6C4.62616 5.44667 4.3395 5.46667 4.16683 5.64667C3.98683 5.82667 3.96683 6.11333 4.1195 6.31333L4.20683 6.4L7.24016 8.76667C7.6135 9.06 8.06616 9.22 8.54016 9.22C9.01283 9.22 9.4735 9.06 9.84616 8.76667L12.8535 6.36L12.9068 6.30667C13.0662 6.11333 13.0662 5.83333 12.8995 5.64C12.8068 5.54067 12.6795 5.48 12.5468 5.46667Z"
        fill="#B0B0B0"
      />
    </svg>
  );
};

const SendIcon = () => {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.149 1.36674C17.6905 0.896134 17.0119 0.720811 16.3791 0.905361L1.62392 5.19615C0.956309 5.38162 0.483115 5.91405 0.355646 6.59042C0.225426 7.2788 0.680279 8.15264 1.27452 8.51805L5.88816 11.3537C6.36135 11.6443 6.9721 11.5714 7.36368 11.1765L12.6468 5.86053C12.9127 5.5837 13.3529 5.5837 13.6188 5.86053C13.8848 6.12813 13.8848 6.56182 13.6188 6.83864L8.32658 12.1555C7.93408 12.5495 7.86072 13.1632 8.14959 13.6393L10.9686 18.2992C11.2987 18.8528 11.8673 19.1666 12.4909 19.1666C12.5642 19.1666 12.6468 19.1666 12.7201 19.1574C13.4354 19.0651 14.004 18.576 14.2149 17.884L18.5892 3.14764C18.7818 2.52017 18.6075 1.83734 18.149 1.36674Z"
        fill="white"
      />
    </svg>
  );
};

const FaceBook = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.92 2.24H8.74996C8.46996 2.24 8.11996 2.31 8.11996 2.8V5.04H10.92V7.28H8.11996V14H5.87996V7.28H3.07996V5.04H5.87996V3.08C5.87996 1.05 6.85996 0 8.74996 0H10.92V2.24Z"
        fill="white"
      />
    </svg>
  );
};

const LinkedIn = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.08 13.9299H0.07V4.26989H3.08V13.9299ZM1.54 3.07989C0.63 3.07989 0 2.44989 0 1.60989C0 0.769893 0.63 0.139893 1.61 0.139893C2.59 0.139893 3.15 0.769893 3.15 1.60989C3.15 2.44989 2.59 3.07989 1.54 3.07989ZM14 13.9299H10.99V8.60989C10.99 7.34989 10.57 6.50989 9.45 6.50989C8.61 6.50989 8.12 7.06989 7.91 7.62989C7.84 7.83989 7.84 8.11989 7.84 8.39989V13.9299H4.83V7.34989C4.83 6.15989 4.76 5.17989 4.76 4.26989H7.35L7.49 5.59989H7.56C7.98 4.96989 8.89 4.05989 10.5 4.05989C12.46 4.05989 13.93 5.38989 13.93 8.18989V13.9299H14Z"
        fill="white"
      />
    </svg>
  );
};

const Twitter = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6 4.13008V4.48008C12.6 8.26008 9.73 12.6701 4.41 12.6701C2.8 12.6701 1.26 12.1801 0 11.4101C0.21 11.4101 0.49 11.4801 0.7 11.4801C2.03 11.4801 3.29 10.9901 4.27 10.2201C3.01 10.2201 1.96 9.38008 1.61 8.26008C1.82 8.26008 1.96 8.33008 2.17 8.33008C2.45 8.33008 2.73 8.33008 2.94 8.26008C1.61 7.98008 0.7 6.86008 0.7 5.46008V5.39008C0.7 5.60008 1.47 5.74008 1.96 5.74008C1.19 5.25008 0.63 4.34008 0.63 3.36008C0.63 2.80008 0.77 2.31008 1.05 1.89008C2.45 3.64008 4.55 4.76008 7 4.90008C6.86 4.62008 6.79 4.41008 6.79 4.20008C6.79 2.59008 8.05 1.33008 9.66 1.33008C10.5 1.33008 11.2 1.68008 11.76 2.24008C12.39 2.10008 13.02 1.89008 13.58 1.54008C13.37 2.24008 12.88 2.80008 12.32 3.15008C12.88 3.08008 13.44 2.94008 14 2.73008C13.58 3.22008 13.16 3.71008 12.6 4.13008Z"
        fill="white"
      />
    </svg>
  );
};

const Youtube = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.707 3.60812C13.6279 3.31032 13.472 3.03851 13.255 2.81985C13.0379 2.60119 12.7672 2.44335 12.47 2.36212C11.379 2.06812 7 2.06812 7 2.06812C7 2.06812 2.622 2.06812 1.53 2.36212C1.23279 2.44357 0.962098 2.60146 0.74489 2.82007C0.527683 3.03868 0.371536 3.31038 0.292 3.60812C0 4.70712 0 7.00012 0 7.00012C0 7.00012 0 9.29312 0.292 10.3921C0.371321 10.6898 0.527412 10.9615 0.744666 11.18C0.96192 11.3985 1.23272 11.5561 1.53 11.6371C2.622 11.9321 7 11.9321 7 11.9321C7 11.9321 11.378 11.9321 12.469 11.6371C12.7663 11.5564 13.0372 11.3989 13.2543 11.1803C13.4714 10.9618 13.6272 10.69 13.706 10.3921C14 9.29312 14 7.00012 14 7.00012C14 7.00012 14 4.70712 13.707 3.60812ZM5.568 9.08212V4.91812L9.228 7.00012L5.568 9.08212Z"
        fill="white"
      />
    </svg>
  );
};

const Instagram = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.99995 1.26298C8.86795 1.26298 9.08995 1.26998 9.82795 1.30298C10.51 1.33498 10.881 1.44898 11.128 1.54498C11.454 1.67198 11.687 1.82298 11.932 2.06798C12.177 2.31298 12.328 2.54598 12.455 2.87298C12.551 3.11898 12.665 3.48998 12.696 4.17298C12.73 4.90998 12.736 5.13098 12.736 6.99998C12.736 8.86798 12.73 9.08998 12.696 9.82798C12.665 10.51 12.551 10.881 12.456 11.128C12.328 11.454 12.176 11.687 11.932 11.932C11.7061 12.1643 11.431 12.343 11.127 12.455C10.88 12.551 10.51 12.665 9.82695 12.696C9.08995 12.73 8.86895 12.736 6.99995 12.736C5.13095 12.736 4.90995 12.73 4.17195 12.696C3.48995 12.665 3.11995 12.551 2.87195 12.456C2.56817 12.3436 2.29344 12.1645 2.06795 11.932C1.83566 11.7061 1.65694 11.431 1.54495 11.127C1.44895 10.88 1.33495 10.51 1.30395 9.82698C1.26995 9.08998 1.26395 8.86798 1.26395 6.99998C1.26395 5.13098 1.26995 4.90998 1.30395 4.17198C1.33495 3.48998 1.44895 3.11998 1.54395 2.87198C1.67195 2.54598 1.82395 2.31298 2.06795 2.06798C2.31295 1.82298 2.54595 1.67198 2.87295 1.54498C3.11895 1.44898 3.48995 1.33498 4.17295 1.30398C4.90995 1.26998 5.13095 1.26398 6.99995 1.26398M6.99995 0.000976562C5.09995 0.000976562 4.86095 0.00897656 4.11495 0.0429766C3.36995 0.0779766 2.85995 0.196977 2.41595 0.369977C1.94884 0.54557 1.52566 0.820976 1.17595 1.17698C0.820313 1.52678 0.545254 1.94995 0.369953 2.41698C0.196953 2.85998 0.0779531 3.36998 0.0439531 4.11398C0.00995312 4.85998 0.00195312 5.09898 0.00195312 6.99998C0.00195312 8.89998 0.00995312 9.13898 0.0439531 9.88498C0.0779531 10.63 0.196953 11.139 0.369953 11.584C0.547953 12.044 0.787953 12.434 1.17695 12.824C1.56595 13.212 1.95595 13.452 2.41695 13.63C2.86095 13.803 3.36995 13.922 4.11495 13.956C4.86095 13.99 5.09895 13.998 6.99995 13.998C8.89995 13.998 9.13895 13.99 9.88495 13.956C10.63 13.922 11.139 13.803 11.584 13.63C12.0511 13.4544 12.4742 13.179 12.824 12.823C13.1796 12.4732 13.4547 12.05 13.63 11.583C13.803 11.139 13.922 10.63 13.956 9.88498C13.99 9.13898 13.998 8.89998 13.998 6.99998C13.998 5.09998 13.99 4.86098 13.956 4.11498C13.922 3.36998 13.803 2.86098 13.63 2.41598C13.4544 1.94886 13.179 1.52568 12.823 1.17598C12.4731 0.820337 12.05 0.545277 11.583 0.369977C11.14 0.196977 10.63 0.0779766 9.88595 0.0439766C9.13995 0.00997656 8.89995 0.00197656 6.99995 0.00197656"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.99998 3.40705C6.04706 3.40705 5.13317 3.7856 4.45935 4.45941C3.78553 5.13323 3.40698 6.04713 3.40698 7.00005C3.40698 7.95297 3.78553 8.86687 4.45935 9.54068C5.13317 10.2145 6.04706 10.593 6.99998 10.593C7.95291 10.593 8.8668 10.2145 9.54062 9.54068C10.2144 8.86687 10.593 7.95297 10.593 7.00005C10.593 6.04713 10.2144 5.13323 9.54062 4.45941C8.8668 3.7856 7.95291 3.40705 6.99998 3.40705ZM6.99998 9.33305C6.38123 9.33305 5.78782 9.08725 5.3503 8.64973C4.91278 8.21221 4.66698 7.6188 4.66698 7.00005C4.66698 6.3813 4.91278 5.78789 5.3503 5.35037C5.78782 4.91285 6.38123 4.66705 6.99998 4.66705C7.61873 4.66705 8.21214 4.91285 8.64966 5.35037C9.08718 5.78789 9.33298 6.3813 9.33298 7.00005C9.33298 7.6188 9.08718 8.21221 8.64966 8.64973C8.21214 9.08725 7.61873 9.33305 6.99998 9.33305ZM11.575 3.26505C11.575 3.48783 11.4865 3.70149 11.329 3.85902C11.1714 4.01655 10.9578 4.10505 10.735 4.10505C10.5122 4.10505 10.2985 4.01655 10.141 3.85902C9.98348 3.70149 9.89498 3.48783 9.89498 3.26505C9.89498 3.04227 9.98348 2.82861 10.141 2.67108C10.2985 2.51355 10.5122 2.42505 10.735 2.42505C10.9578 2.42505 11.1714 2.51355 11.329 2.67108C11.4865 2.82861 11.575 3.04227 11.575 3.26505Z"
        fill="white"
      />
    </svg>
  );
};

const GreenFooter = () => {
  const linkStyle = "text-base font-semibold text-white";
  const socialIconStyle =
    "text-base font-semibold text-white p-2.5 rounded-[50%] border-2 ";
  return (
    <div className="bg-primary w-full flex justify-between items-center  flex-col lg:flex-row py-1 gap-1 lg:gap-0 px-2 text-center ">
      <span className={linkStyle}>
        Misr Elkhier Foundation - All Rights Reserved © 2022{" "}
      </span>

      <div className=" flex justify-center items-center gap-1.5 ">
        <div className={socialIconStyle}>
          <FaceBook />
        </div>
        <div className={socialIconStyle}>
          <LinkedIn />
        </div>
        <div className={socialIconStyle}>
          <Twitter />
        </div>
        <div className={socialIconStyle}>
          <Youtube />
        </div>
        <div className={socialIconStyle}>
          <Instagram />
        </div>
      </div>
      <div className="flex justify-center items-center gap-1 flex-col lg:flex-row p-1 lg:p-0 ">
        <Link href="/privacy" className={linkStyle}>
          Privacy Policy
        </Link>
        <Link href="/Cookie" className={linkStyle}>
          Cookies{" "}
        </Link>
        <Link href="/Contact" className={linkStyle}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};
