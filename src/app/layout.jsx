import { ThemeProvider } from "@/components/theme-provider";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "./StoreProvider";
import DataSetter from "./data-setter";
import AppLoader from "./AppLoader";
import { fontPoppins, fontDmsans, fontInter ,fontBebasNeue } from "@/lib/font";
import { cn } from "@/lib/utils";
import { siteConfig} from "@/utils/siteConfig";

const icons=siteConfig.icons;

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ask-it",
  description: "Ask-it is a platform for getting suggestions about movies based on your mood.",
  icons: icons,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
        "dark:bg-[#020818] max-w-[120rem] mx-auto relative",
        fontInter.variable,
        fontDmsans.variable,
        fontPoppins.variable,
        fontBebasNeue.variable,
      )}>
        <AppLoader>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <StoreProvider>
              <DataSetter></DataSetter>
              {children}
            </StoreProvider>
          </ThemeProvider>
        </AppLoader>
        <Toaster />
      </body>
    </html>
  );
}
