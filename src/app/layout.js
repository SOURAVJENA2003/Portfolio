import "./globals.css";
import ClientLayout from "@/client-layout";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Polite Chaos | Codegrid",
  description: "MWT by Codegrid",
  icons: {
    icon: "/site-logo.png",
    shortcut: "/site-logo.png",
    apple: "/site-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <ViewTransitions>
            <ClientLayout>{children}</ClientLayout>
          </ViewTransitions>
        </body>
      </ThemeProvider>
    </html>
  );
}
