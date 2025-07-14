import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import { StoreProvider } from "./StoreProvider";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/shared/navbar";
import CartSidebar from "@/components/CartSidebar";
import AppFooter from "@/components/shared/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const backgroundImage = "bg-[url(/img/featured/kiss-hero-img.jpg)]";
  const backgroundImageClasses =
    "absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat grayscale";

  return (
    <StoreProvider>
      <html suppressHydrationWarning lang="en">
        <head />
        <body
          className={`${clsx(
            "min-h-screen text-foreground font-sans antialiased",
            fontSans.variable,
            // backgroundImageClasses,
          )}`}
        >
          {/* Background image layer */}
          <div
            aria-hidden="true"
            className={`${backgroundImage} ${backgroundImageClasses} blur- `}
            style={{ backgroundAttachment: "scroll" }}
          />

          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            {/* backdrop-blur-none bg-white/30 dark:bg-black/30 */}
            <div className="relative flex flex-col h-0 bg-transparent">
              <Navbar />

              <CartSidebar />
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow bg-transparent">
                {children}
              </main>
              <AppFooter />
            </div>
          </Providers>
        </body>
      </html>
    </StoreProvider>
  );
}
