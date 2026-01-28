"use client";

import { Loader2 } from "lucide-react";
import { useEffect } from "react";

export default function HotmartCheckout() {

  useEffect(() => {
    const baseUrl = "https://pay.hotmart.com/A103294933E?checkoutMode=10&bid=1769585659200";
    try {
      const search = window.location.search;
      const finalUrl = baseUrl + (search ? (baseUrl.includes("?") ? "&" : "?") + search.slice(1) : "");
      window.location.href = finalUrl;
    } catch {
      window.location.href = baseUrl;
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-[60vh] rounded-3xl shadow-xl relative overflow-hidden border shadow-black/20 border-gray-100 bg-[#F7F9FA]">
      <Loader2 size={50} className="animate-spin opacity-20" />
    </div>
  );

};