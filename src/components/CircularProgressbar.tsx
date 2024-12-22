type CircularProgressbarProps = {
  progress: number;
};

export default function CircularProgressbar({
  progress,
}: CircularProgressbarProps) {
  return (
    <div className="w-full flex items-center justify-center relative">
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[14px] text-center font-[family-name:var(--font-inter)] font-[600] leading-[21px]">
        {Math.min(progress, 10)}
        {progress > 10 ? "+" : ""}
      </span>
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_63_333)">
          <path
            d="M20.3471 1.24056C20.3499 0.95891 20.5806 0.732188 20.8621 0.742387C24.2131 0.863805 27.4763 1.84759 30.3361 3.5985C30.5763 3.74558 30.6432 4.06205 30.4899 4.29834L28.9228 6.71365C28.7695 6.94993 28.4541 7.01642 28.2129 6.87092C25.9752 5.52087 23.4338 4.75473 20.8228 4.64302C20.5414 4.63098 20.3153 4.40123 20.3181 4.11958L20.3471 1.24056Z"
            fill={progress >= 1 ? "url(#paint0_linear_63_333)" : "#2F2C2D"}
          />
          <path
            d="M31.5281 5.01548C31.6968 4.78988 32.0169 4.7432 32.238 4.91767C34.8703 6.99479 36.9226 9.716 38.1961 12.8179C38.3031 13.0785 38.1702 13.3734 37.907 13.4735L35.2158 14.497C34.9526 14.5971 34.6588 14.4645 34.5501 14.2046C33.5417 11.7936 31.9435 9.67434 29.9025 8.04208C29.6825 7.86616 29.6357 7.54721 29.8044 7.3216L31.5281 5.01548Z"
            fill={progress >= 2 ? "url(#paint1_linear_63_333)" : "#2F2C2D"}
          />
          <path
            d="M38.3762 14.9026C38.6466 14.8237 38.9304 14.9788 39.0022 15.2512C39.8568 18.4936 39.8607 21.902 39.0134 25.1463C38.9422 25.4188 38.6587 25.5746 38.3881 25.4963L35.6224 24.6962C35.3518 24.6179 35.1968 24.3353 35.2662 24.0623C35.91 21.5294 35.907 18.8751 35.2575 16.3437C35.1875 16.0708 35.3419 15.7879 35.6122 15.709L38.3762 14.9026Z"
            fill={progress >= 3 ? "url(#paint2_linear_63_333)" : "#2F2C2D"}
          />
          <path
            d="M37.9715 26.7574C38.2359 26.8543 38.3723 27.1476 38.2685 27.4094C37.0325 30.5265 35.0132 33.2723 32.4061 35.381C32.1871 35.5581 31.8665 35.5153 31.6951 35.2917L29.9437 33.0066C29.7723 32.783 29.8152 32.4635 30.0331 32.285C32.0542 30.6282 33.6268 28.4899 34.606 26.0668C34.7116 25.8057 35.0037 25.6695 35.2682 25.7664L37.9715 26.7574Z"
            fill={progress >= 4 ? "url(#paint3_linear_63_333)" : "#2F2C2D"}
          />
          <path
            d="M30.7184 35.9833C30.8753 36.2172 30.8131 36.5347 30.5751 36.6854C27.7421 38.4792 24.494 39.512 21.1453 39.684C20.864 39.6984 20.6299 39.4752 20.6228 39.1936L20.5504 36.3154C20.5433 36.0338 20.766 35.8007 21.0472 35.7844C23.6562 35.6333 26.1857 34.8289 28.4028 33.4453C28.6418 33.2962 28.9582 33.3579 29.115 33.5919L30.7184 35.9833Z"
            fill={progress >= 5 ? "url(#paint4_linear_63_333)" : "#2F2C2D"}
          />
          <path
            d="M19.5827 39.1879C19.5743 39.4695 19.3391 39.6916 19.0579 39.6757C15.71 39.4876 12.467 38.4389 9.64273 36.6314C9.4055 36.4795 9.34485 36.1618 9.50284 35.9286L11.1178 33.545C11.2758 33.3118 11.5925 33.2516 11.8307 33.4019C14.0411 34.7963 16.5666 35.6129 19.1749 35.7767C19.456 35.7943 19.6775 36.0285 19.6691 36.3101L19.5827 39.1879Z"
            fill={progress >= 6 ? "url(#paint5_linear_63_333)" : "#2F2C2D"}
          />
          <path
            d="M8.58599 35.2566C8.41422 35.4799 8.09351 35.5221 7.87485 35.3445C5.27176 33.2308 3.2577 30.4812 2.02762 27.3619C1.92429 27.0998 2.06127 26.8068 2.32591 26.7103L5.03105 25.7246C5.29569 25.6281 5.58762 25.7649 5.69266 26.0262C6.66725 28.4511 8.23575 30.5924 10.2538 32.253C10.4713 32.432 10.5136 32.7516 10.3418 32.9748L8.58599 35.2566Z"
            fill={progress >= 7 ? "url(#paint6_linear_63_333)" : "#2F2C2D"}
          />
          <path
            d="M1.96673 25.6079C1.69668 25.688 1.41216 25.5341 1.33919 25.262C0.4705 22.0234 0.45186 18.6151 1.28508 15.3671C1.35507 15.0942 1.63788 14.9372 1.90879 15.0143L4.67798 15.8025C4.94889 15.8796 5.10514 16.1615 5.03694 16.4348C4.40409 18.9705 4.41861 21.6248 5.07915 24.1533C5.15034 24.4258 4.99718 24.7095 4.72713 24.7896L1.96673 25.6079Z"
            fill={progress >= 8 ? "url(#paint7_linear_63_333)" : "#2F2C2D"}
          />
          <path
            d="M2.24491 13.9586C1.97899 13.8658 1.83806 13.5746 1.93784 13.3112C3.12563 10.1755 5.10233 7.39889 7.67661 5.25021C7.89284 5.06972 8.21409 5.10759 8.38887 5.32848L10.1754 7.58635C10.3501 7.80723 10.3121 8.12735 10.0971 8.30925C8.10172 9.99699 6.56231 12.1593 5.6206 14.5972C5.5191 14.8599 5.22905 15.0006 4.96313 14.9077L2.24491 13.9586Z"
            fill={progress >= 9 ? "url(#paint8_linear_63_333)" : "#2F2C2D"}
          />
          <path
            d="M9.27901 4.67182C9.11753 4.44104 9.17339 4.12242 9.40831 3.96703C12.205 2.11717 15.4319 1.01987 18.7766 0.781339C19.0575 0.761302 19.296 0.979815 19.3087 1.2612L19.4384 4.13744C19.451 4.41882 19.2331 4.65634 18.9523 4.67821C16.3467 4.88116 13.8337 5.73571 11.6446 7.16319C11.4087 7.31704 11.0911 7.26163 10.9296 7.03085L9.27901 4.67182Z"
            fill={progress >= 10 ? "url(#paint9_linear_63_333)" : "#2F2C2D"}
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_63_333"
            x1="507.705"
            y1="7.40693"
            x2="20"
            y2="2.05006"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74D5A0" />
            <stop offset="0.193219" stopColor="#B0D57B" />
            <stop offset="0.412932" stopColor="#F5D451" />
            <stop offset="0.580866" stopColor="#F4BF4F" />
            <stop offset="0.757197" stopColor="#F2A94D" />
            <stop offset="0.923731" stopColor="#EC6652" />
            <stop offset="1" stopColor="#FF323E" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_63_333"
            x1="377.457"
            y1="262.954"
            x2="-24.9029"
            y2="-37.8024"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74D5A0" />
            <stop offset="0.193219" stopColor="#B0D57B" />
            <stop offset="0.412932" stopColor="#F5D451" />
            <stop offset="0.580866" stopColor="#F4BF4F" />
            <stop offset="0.757197" stopColor="#F2A94D" />
            <stop offset="0.923731" stopColor="#EC6652" />
            <stop offset="1" stopColor="#FF323E" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_63_333"
            x1="144.796"
            y1="377.842"
            x2="4.46581"
            y2="-103.148"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74D5A0" />
            <stop offset="0.193219" stopColor="#B0D57B" />
            <stop offset="0.412932" stopColor="#F5D451" />
            <stop offset="0.580866" stopColor="#F4BF4F" />
            <stop offset="0.757197" stopColor="#F2A94D" />
            <stop offset="0.923731" stopColor="#EC6652" />
            <stop offset="1" stopColor="#FF323E" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_63_333"
            x1="-74.7246"
            y1="335.673"
            x2="99.2874"
            y2="-139.03"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74D5A0" />
            <stop offset="0.193219" stopColor="#B0D57B" />
            <stop offset="0.412932" stopColor="#F5D451" />
            <stop offset="0.580866" stopColor="#F4BF4F" />
            <stop offset="0.757197" stopColor="#F2A94D" />
            <stop offset="0.923731" stopColor="#EC6652" />
            <stop offset="1" stopColor="#FF323E" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_63_333"
            x1="-199.479"
            y1="190.936"
            x2="221.001"
            y2="-90.98"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74D5A0" />
            <stop offset="0.193219" stopColor="#B0D57B" />
            <stop offset="0.412932" stopColor="#F5D451" />
            <stop offset="0.580866" stopColor="#F4BF4F" />
            <stop offset="0.757197" stopColor="#F2A94D" />
            <stop offset="0.923731" stopColor="#EC6652" />
            <stop offset="1" stopColor="#FF323E" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_63_333"
            x1="-207.132"
            y1="32.8957"
            x2="299.531"
            y2="48.0979"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74D5A0" />
            <stop offset="0.193219" stopColor="#B0D57B" />
            <stop offset="0.412932" stopColor="#F5D451" />
            <stop offset="0.580866" stopColor="#F4BF4F" />
            <stop offset="0.757197" stopColor="#F2A94D" />
            <stop offset="0.923731" stopColor="#EC6652" />
            <stop offset="1" stopColor="#FF323E" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_63_333"
            x1="-129.754"
            y1="-70.5496"
            x2="269.912"
            y2="236.985"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74D5A0" />
            <stop offset="0.193219" stopColor="#B0D57B" />
            <stop offset="0.412932" stopColor="#F5D451" />
            <stop offset="0.580866" stopColor="#F4BF4F" />
            <stop offset="0.757197" stopColor="#F2A94D" />
            <stop offset="0.923731" stopColor="#EC6652" />
            <stop offset="1" stopColor="#FF323E" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_63_333"
            x1="-32.8793"
            y1="-90.1355"
            x2="110.645"
            y2="393.979"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74D5A0" />
            <stop offset="0.193219" stopColor="#B0D57B" />
            <stop offset="0.412932" stopColor="#F5D451" />
            <stop offset="0.580866" stopColor="#F4BF4F" />
            <stop offset="0.757197" stopColor="#F2A94D" />
            <stop offset="0.923731" stopColor="#EC6652" />
            <stop offset="1" stopColor="#FF323E" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_63_333"
            x1="24.6859"
            y1="-51.8577"
            x2="-142.198"
            y2="426.086"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74D5A0" />
            <stop offset="0.193219" stopColor="#B0D57B" />
            <stop offset="0.412932" stopColor="#F5D451" />
            <stop offset="0.580866" stopColor="#F4BF4F" />
            <stop offset="0.757197" stopColor="#F2A94D" />
            <stop offset="0.923731" stopColor="#EC6652" />
            <stop offset="1" stopColor="#FF323E" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_63_333"
            x1="24.9604"
            y1="-6.92301"
            x2="-391.423"
            y2="284.423"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74D5A0" />
            <stop offset="0.193219" stopColor="#B0D57B" />
            <stop offset="0.412932" stopColor="#F5D451" />
            <stop offset="0.580866" stopColor="#F4BF4F" />
            <stop offset="0.757197" stopColor="#F2A94D" />
            <stop offset="0.923731" stopColor="#EC6652" />
            <stop offset="1" stopColor="#FF323E" />
          </linearGradient>
          <clipPath id="clip0_63_333">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(0 0.0500488)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
