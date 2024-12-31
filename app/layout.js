import "./globals.css";
export const metadata = {
  title: "Cryphire",
  description: "Hire your Traders",
};
import {Poppins} from 'next/font/google'
import { Provider } from "./provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
       className={"bg-lightbg text-black dark:bg-gray-900 dark:text-white"}
      >
<Provider>
{children}
</Provider>


      </body>
    </html>
  );
}
