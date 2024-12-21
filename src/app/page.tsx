'use client'
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const userLocation = getUserLocation(); // Replace with real logic
    const targetLocale = userLocation === "id" ? "id" : "en";

    redirect(`/${targetLocale}/`);
  }, [])

}

function getUserLocation() {
  const lang = localStorage.getItem('lang') ?? 'en'
  return lang;
}
