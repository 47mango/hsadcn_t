import "../styles/global.css";
import Navigation from "@/components/navigation";
import {Metadata} from "next";

export const metadata = {
  title:"usenext",
  description:"NEXT.JS"
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
