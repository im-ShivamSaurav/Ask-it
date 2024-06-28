import { Poppins, DM_Sans, Inter, Bebas_Neue } from "next/font/google";

export const fontDmsans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dmsans',
//   weight: [400, 500, 700],
  styles: "normal",
});

export const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  styles: "normal",
  variable: '--font-poppins',
});

export const fontInter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
//   weights: [400, 500, 600, 700],
});

export const fontBebasNeue = Bebas_Neue({
    subsets: ["latin"],
    variable: '--font-bebas-neue',
    weight : '400',
    styles: "normal",
});