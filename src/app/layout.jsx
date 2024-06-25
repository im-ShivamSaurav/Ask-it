import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "./StoreProvider";
import DataSetter from "./data-setter";
import AppLoader from "./AppLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark:bg-[#020818] max-w-[120rem] mx-auto ${inter.className}`}>
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
