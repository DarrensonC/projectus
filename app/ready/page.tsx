import Progress from "@/components/progress";
import HotmartUpsell from "@/components/hotmart-upsell";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* Barra de Alerta */}
      <div className="w-full text-sm bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="mx-auto px-4 py-4">
          <div className="text-center font-bold">
            🎉 CONGRATULATIONS! See this EXCLUSIVE offer before accessing! 🎉
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-xl gap-6 px-5 py-6">
        
        {/* Progresso */}
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-xs italic opacity-60">
            ⏰ Processing your access...
          </span>
          <Progress progress={96} />
        </div>

        {/* Oferta Principal */}
        <div className="flex flex-col text-center rounded-3xl gap-6 bg-gradient-to-t border-t px-6 py-8 from-gray-100 to-white border-gray-300">
          
          {/* Título */}
          <div className="text-2xl font-bold text-gray-900">
            🔥 Upgrade to LIFETIME ACCESS! 🔥
          </div>

          {/* Preço */}
          <div className="flex flex-col gap-2">
            <div className="text-sm text-gray-600">
              From <span className="line-through">$27/year</span> to
            </div>
            <div className="text-5xl font-black text-green-600">
              $47
            </div>
            <div className="text-xs text-gray-500 uppercase font-bold">
              ONE-TIME PAYMENT - NEVER PAY AGAIN!
            </div>
          </div>

          {/* Benefícios */}
          <div className="flex flex-col gap-3 text-left bg-green-50 rounded-lg p-5 border-2 border-green-200">
            <div className="flex items-start gap-2">
              <span className="text-green-600 text-lg">✅</span>
              <span className="text-sm font-medium">Access FOREVER, no renewal</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 text-lg">✅</span>
              <span className="text-sm font-medium">All future updates FREE</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 text-lg">✅</span>
              <span className="text-sm font-medium">Priority lifetime support</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 text-lg">✅</span>
              <span className="text-sm font-medium">Save $243+ over 10 years</span>
            </div>
          </div>

          {/* Urgência */}
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
            <p className="text-sm font-bold text-red-700">
              ⚠️ This offer is only available NOW!
            </p>
            <p className="text-xs text-red-600 mt-1">
              If you leave this page, you will lose this opportunity forever.
            </p>
          </div>

          {/* Checkout da Hotmart */}
          <HotmartUpsell black={false} />

          {/* Botão de Recusa */}
          <Link 
            href="/thanks" 
            className="text-xs text-gray-400 hover:text-gray-600 underline mt-2"
          >
            No thanks, I want to continue with the annual plan
          </Link>
        </div>
      </div>
    </>  
  );
}