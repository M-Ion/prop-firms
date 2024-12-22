export default function HeartIcon({
  isActive = false,
}: {
  isActive?: boolean;
}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_0_4055)">
        <path
          d="M15.8447 4.14056C15.4225 2.53706 14.1799 1.27332 12.6041 0.843927C11.0603 0.425127 9.42035 0.850445 8.00793 2.01478C6.97766 1.15844 5.83603 0.694821 4.67037 0.667118C3.40376 0.649193 2.22208 1.12096 1.33121 2.02618C-0.343983 3.7299 -0.709304 6.80654 1.83192 9.39105L7.43992 15.0946C7.59614 15.2534 7.80124 15.3333 8.00633 15.3333C8.21142 15.3333 8.41651 15.2534 8.57274 15.0946L14.1807 9.39105C15.7077 7.83806 16.3142 5.92413 15.8447 4.14056Z"
          fill={isActive ? "url(#paint0_linear_44_258)" : "#898587"}
        />
      </g>
      <defs>
        <clipPath id="clip0_0_4055">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
      <defs>
        <linearGradient
          id="paint0_linear_44_258"
          x1="15.3334"
          y1="16"
          x2="-0.606269"
          y2="1.38868"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9061F9" />
          <stop offset="1" stopColor="#E74694" />
        </linearGradient>
      </defs>
    </svg>
  );
}
