"use client";

import { useTheme } from "next-themes";

interface PickcartProps {
  width: string;
  height: string;
}

export function Pickcart({
  width = "805",
  height = "192",
}: Partial<PickcartProps>) {
  const { resolvedTheme } = useTheme();
  const color = resolvedTheme === "dark" ? "white" : "black";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 846 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6 171V31H78C86.8 31 94.6 33 101.4 37C108.333 41 113.8 46.4667 117.8 53.4C121.933 60.3333 124 68.1333 124 76.8C124 85.8667 121.933 94 117.8 101.2C113.8 108.267 108.333 113.867 101.4 118C94.6 122.133 86.8 124.2 78 124.2H51.6V171H17.6ZM51 94.4H73.2C76.1333 94.4 78.8 93.6667 81.2 92.2C83.6 90.7333 85.5333 88.7333 87 86.2C88.4667 83.6667 89.2 80.7333 89.2 77.4C89.2 73.9333 88.4667 71 87 68.6C85.5333 66.2 83.6 64.3333 81.2 63C78.8 61.6667 76.1333 61 73.2 61H51V94.4ZM144.422 171V64.8H176.422V171H144.422ZM160.422 43.8C154.422 43.8 149.689 42.4 146.222 39.6C142.889 36.6667 141.222 32.5333 141.222 27.2C141.222 22.4 142.955 18.4667 146.422 15.4C149.889 12.3333 154.555 10.8 160.422 10.8C166.422 10.8 171.089 12.2667 174.422 15.2C177.755 18 179.422 22 179.422 27.2C179.422 32.1333 177.689 36.1333 174.222 39.2C170.889 42.2667 166.289 43.8 160.422 43.8ZM249.089 173C238.822 173 229.622 170.6 221.489 165.8C213.356 161 206.889 154.467 202.089 146.2C197.422 137.8 195.089 128.333 195.089 117.8C195.089 107.267 197.422 97.8667 202.089 89.6C206.889 81.2 213.356 74.6 221.489 69.8C229.622 65 238.822 62.6 249.089 62.6C258.556 62.6 267.222 64.2667 275.089 67.6C283.089 70.9333 289.422 75.6 294.089 81.6L276.689 102.4C274.822 100.267 272.622 98.2667 270.089 96.4C267.556 94.5333 264.756 93.0667 261.689 92C258.622 90.9333 255.422 90.4 252.089 90.4C247.022 90.4 242.556 91.6 238.689 94C234.822 96.2667 231.822 99.4667 229.689 103.6C227.556 107.733 226.489 112.467 226.489 117.8C226.489 122.867 227.556 127.467 229.689 131.6C231.956 135.733 235.022 139 238.889 141.4C242.756 143.8 247.156 145 252.089 145C255.556 145 258.756 144.6 261.689 143.8C264.622 142.867 267.289 141.533 269.689 139.8C272.222 138.067 274.556 135.933 276.689 133.4L293.889 154.4C289.356 160.133 283.022 164.667 274.889 168C266.889 171.333 258.289 173 249.089 173ZM338.273 139.8L326.473 115.8L376.073 64.8H418.273L338.273 139.8ZM307.473 171V23H339.473V171H307.473ZM379.473 171L342.073 122.6L364.673 105L417.273 171H379.473Z"
        fill={color}
      />
      <path
        d="M600.4 172.8C591.467 172.8 583.467 170.467 576.4 165.8C569.467 161 563.933 154.467 559.8 146.2C555.667 137.8 553.6 128.333 553.6 117.8C553.6 107 555.667 97.4667 559.8 89.2C563.933 80.9333 569.6 74.4667 576.8 69.8C584 65 592.2 62.6 601.4 62.6C606.467 62.6 611.067 63.3333 615.2 64.8C619.467 66.2667 623.2 68.3333 626.4 71C629.6 73.5333 632.333 76.5333 634.6 80C636.867 83.3333 638.533 86.9333 639.6 90.8L633 90V64.8H664.8V171H632.4V145.4L639.6 145.2C638.533 148.933 636.8 152.467 634.4 155.8C632 159.133 629.067 162.067 625.6 164.6C622.133 167.133 618.267 169.133 614 170.6C609.733 172.067 605.2 172.8 600.4 172.8ZM609.2 145.8C614.133 145.8 618.4 144.667 622 142.4C625.6 140.133 628.4 136.933 630.4 132.8C632.4 128.533 633.4 123.533 633.4 117.8C633.4 112.067 632.4 107.133 630.4 103C628.4 98.7333 625.6 95.4667 622 93.2C618.4 90.8 614.133 89.6 609.2 89.6C604.4 89.6 600.2 90.8 596.6 93.2C593.133 95.4667 590.4 98.7333 588.4 103C586.4 107.133 585.4 112.067 585.4 117.8C585.4 123.533 586.4 128.533 588.4 132.8C590.4 136.933 593.133 140.133 596.6 142.4C600.2 144.667 604.4 145.8 609.2 145.8ZM689.036 171V64.8H719.436L720.836 99.4L714.836 92.8C716.436 87.0667 719.036 81.9333 722.636 77.4C726.369 72.8667 730.703 69.2667 735.636 66.6C740.569 63.9333 745.836 62.6 751.436 62.6C753.836 62.6 756.036 62.8 758.036 63.2C760.169 63.6 762.103 64.0667 763.836 64.6L755.036 100C753.569 99.0667 751.569 98.3333 749.036 97.8C746.636 97.1333 744.103 96.8 741.436 96.8C738.503 96.8 735.769 97.3333 733.236 98.4C730.703 99.3333 728.569 100.733 726.836 102.6C725.103 104.467 723.703 106.667 722.636 109.2C721.703 111.733 721.236 114.6 721.236 117.8V171H689.036ZM788.758 171V38H820.758V171H788.758ZM769.958 92.8V64.8H841.358V92.8H769.958Z"
        fill={color}
      />
      <path
        d="M428 72.5043C428 67.3411 432.335 63.2364 437.49 63.5176L529.191 68.5195C533.964 68.7799 537.701 72.726 537.701 77.5062V155.74C537.701 160.504 533.988 164.443 529.232 164.724L437.531 170.143C432.361 170.449 428 166.338 428 161.159V72.5043Z"
        fill={color}
      />
      <g filter="url(#filter0_d_49_36)">
        <path
          d="M428 72.5238C428 67.3534 432.346 63.246 437.509 63.5382L472.364 65.5112C477.13 65.7809 480.856 69.7238 480.856 74.4968V158.791C480.856 163.531 477.179 167.459 472.449 167.771L437.593 170.073C432.4 170.416 428 166.296 428 161.092V72.5238Z"
          fill={color === "black" ? "white" : "black"}
        />
        <path
          d="M430 72.5238C430 68.5024 433.381 65.3078 437.396 65.535L472.251 67.508C475.958 67.7178 478.856 70.7845 478.856 74.4968V158.791C478.856 162.477 475.996 165.532 472.317 165.775L437.461 168.077C433.423 168.344 430 165.14 430 161.092V72.5238Z"
          stroke={color}
          stroke-width="4"
        />
      </g>
      <path
        d="M522.955 89.5157C528.435 88.3741 537.288 89.5157 537.288 89.5157V143.98C537.288 143.98 528.435 145.122 522.955 143.98C508.231 140.913 495.723 131.788 495.723 116.748C495.723 101.708 508.231 92.5831 522.955 89.5157Z"
        stroke={color === "black" ? "white" : "black"}
        stroke-width="10"
      />
      <defs>
        <filter
          id="filter0_d_49_36"
          x="423"
          y="48.5234"
          width="82.8555"
          height="136.569"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="10" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.575 0 0 0 0 0.575 0 0 0 0 0.575 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_49_36"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_49_36"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
