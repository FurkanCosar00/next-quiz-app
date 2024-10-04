import { Rubik } from "next/font/google";
import "./globals.css";
import "/app/finishpage/finishpage.css";
import "/app/[category]/category.css";
import DarkMode from "/app/darkmode/page.jsx";
import "/app/darkmode/darkmode.css";
import "/app/mainpage.css";

// HOCAYA SOR !!!
// 1) background image transition
// 2) category/page.jsx içindeki state'i buraya çekmek

const rubik = Rubik({ subsets:["latin"] });
export const metadata = {
  title: "Frontend Quiz App",
  description: "Pick a subject to get started.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        <header className="header">
          <div className="headerText">
            {/* <img src={dataCategory.icon} alt="" /> */}
            {/* <h2>{dataCategory.category}</h2> */}
          </div>

          <DarkMode />
        </header>

        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
