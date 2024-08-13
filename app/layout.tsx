import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner";
import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Epic Goods",
  description: "BEST MARKETPLACE IN THE WORLD",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            {children}
            <Toaster richColors/>
        </ThemeProvider>
        </body>
        </html>
    );
};

export default RootLayout;