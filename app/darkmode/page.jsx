"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function DarkMode() {
    const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      if (theme === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }, [theme])
  
    return (
      <div className="headerInside">
        <Image src="/images/dark-mode-sun.png" alt="" width={24} height={24}></Image>
  
        <label className="switch">
          <input type="checkbox" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
          <span className="slider round"></span>
        </label>
  
        <Image src="/images/dark-mode-moon.png" alt="" width={24} height={24}></Image>
      </div>
    )
}