import type { SVGProps } from "react";

export default function VueJSIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-label="Vue.js icon"
      {...props}
    >
      <path
        fill="#41B883"
        strokeWidth="0.25"
        d="M19.05 1.8657225H23.75L12 22.134475 0.25 1.8657225h8.98875L12 6.565725 14.7025 1.8657225H19.05Z"
      />
      <path
        fill="#41B883"
        strokeWidth="0.25"
        d="M0.25 1.8657225 12 22.134475 23.75 1.8657225H19.05L12 14.026975 4.89125 1.8657225H0.25Z"
      />
      <path
        fill="#35495E"
        strokeWidth="0.25"
        d="m4.89135 1.8657225 7.10875 12.2200025 7.05 -12.2200025h-4.3475l-2.7025 4.7000025 -2.76125 -4.7000025h-4.3475Z"
      />
    </svg>
  );
}