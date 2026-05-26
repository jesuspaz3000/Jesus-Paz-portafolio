import type { SVGProps } from "react";

export default function SpringBootIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      aria-label="Spring Boot icon"
      {...props}
    >
      <path
        fill="#6DB33F"
        stroke="#6DB33F"
        strokeWidth="50"
        strokeLinejoin="round"
        d="M184 33H72L22 128l50 95h112l50-95-50-95Z"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="14"
        strokeLinecap="round"
        d="M128 70v54"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="14"
        strokeLinecap="round"
        d="M96.4 97.6a44 44 0 1 0 63.2 0"
      />
    </svg>
  );
}
