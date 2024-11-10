export const GoogleIcon = ({ size }: { size?: number }) => {
  return (
    <svg
      width={size ?? "37"}
      height={size ?? "36"}
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_19_1050"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={size ?? "37"}
        height={size ?? "37"}
      >
        <path
          d="M36.501 0.000976562H0.500977V36.001H36.501V0.000976562Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_19_1050)">
        <path
          d="M35.781 18.4094C35.781 17.1331 35.6665 15.9058 35.4537 14.7275H18.501V21.6903H28.1882C27.771 23.9403 26.5029 25.8467 24.5965 27.1231V31.6394H30.4137C33.8174 28.5058 35.781 23.8912 35.781 18.4094Z"
          fill="#4285F4"
        />
        <path
          d="M18.501 36.0009C23.361 36.0009 27.4355 34.389 30.4136 31.64L24.5964 27.1237C22.9847 28.2037 20.9228 28.8418 18.501 28.8418C13.8128 28.8418 9.84467 25.6754 8.42915 21.4209H2.41553V26.0845C5.37743 31.9673 11.4647 36.0009 18.501 36.0009Z"
          fill="#34A853"
        />
        <path
          d="M8.42908 21.4216C8.06908 20.3416 7.8646 19.188 7.8646 18.0016C7.8646 16.8152 8.06908 15.6616 8.42908 14.5816V9.91797H2.41546C1.1965 12.348 0.500977 15.0971 0.500977 18.0016C0.500977 20.9061 1.1965 23.6552 2.41546 26.0852L8.42908 21.4216Z"
          fill="#FBBC04"
        />
        <path
          d="M18.501 7.16012C21.1436 7.16012 23.5164 8.06822 25.3819 9.85184L30.5447 4.68908C27.4274 1.7846 23.3528 0.000976562 18.501 0.000976562C11.4647 0.000976562 5.37743 4.0346 2.41553 9.91736L8.42915 14.581C9.84467 10.3265 13.8128 7.16012 18.501 7.16012Z"
          fill="#E94235"
        />
      </g>
    </svg>
  );
};