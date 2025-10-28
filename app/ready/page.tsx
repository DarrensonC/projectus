import Progress from "@/components/progress";
import HotmartUpsell from "@/components/hotmart-upsell";
import Link from "next/link";

export default function Page() {

  return (
    <>
      <div className="w-full text-sm bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="mx-auto px-4 py-4">
          <div className="text-center font-bold text-base">
            🎉 WAIT! Special Upgrade Available - Only on This Page!
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-2xl gap-6 px-5 py-6">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-sm font-medium text-gray-700">
            ⏰ Your payment is being processed...
          </span>
          <Progress progress={96} />
        </div>
        
        {/* Oferta Principal */}
        <div className="flex flex-col text-center rounded-3xl gap-6 bg-gradient-to-b appear border-2 px-6 py-8 from-white to-gray-50 border-green-300 shadow-xl">
          
          {/* Título Chamativo */}
          <div className="flex flex-col gap-2">
            <div className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              🔥 UPGRADE TO<br />LIFETIME ACCESS!
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Stop paying annually - Get access FOREVER!
            </div>
          </div>

          {/* Comparação de Preço */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-through">$27/year</span>
              <span className="text-xs text-red-600 font-semibold">Keep paying every year</span>
            </div>
            <div className="text-2xl font-bold text-gray-400">→</div>
            <div className="flex flex-col">
              <span className="text-5xl font-black text-green-600">$17</span>
              <span className="text-sm font-bold text-green-700 uppercase">One-Time Only!</span>
            </div>
          </div>

          {/* Benefícios */}
          <div className="flex flex-col gap-3 text-left bg-green-50 rounded-xl p-5 border-2 border-green-200">
            <div className="text-center font-bold text-gray-900 mb-2">✨ What You Get:</div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl flex-shrink-0">✅</span>
              <span className="text-sm font-medium text-gray-800"><strong>Lifetime Access</strong> - Never pay again, ever!</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl flex-shrink-0">✅</span>
              <span className="text-sm font-medium text-gray-800"><strong>All Future Updates</strong> - FREE forever</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl flex-shrink-0">✅</span>
              <span className="text-sm font-medium text-gray-800"><strong>Priority Support</strong> - VIP treatment for life</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl flex-shrink-0">✅</span>
              <span className="text-sm font-medium text-gray-800"><strong>Save $243+</strong> over 10 years (vs annual plan)</span>
            </div>
          </div>

          {/* Cálculo da Economia */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
            <div className="text-xs text-yellow-800 font-semibold uppercase mb-1">💰 Do The Math:</div>
            <div className="text-sm text-yellow-900">
              Annual: $27/year × 10 years = <strong className="text-red-600">$270</strong><br />
              Lifetime: <strong className="text-green-600">$17 one-time</strong><br />
              <strong className="text-lg">You SAVE $253! 🎉</strong>
            </div>
          </div>

          {/* Urgência Forte */}
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-5">
            <div className="text-red-700 font-bold text-base mb-2">
              ⚠️ THIS OFFER EXPIRES IN SECONDS!
            </div>
            <div className="text-sm text-red-600 leading-relaxed">
              This upgrade is <strong>ONLY available RIGHT NOW</strong> on this page.<br />
              If you leave or refresh, <strong>it&apos;s gone forever</strong> and you&apos;ll pay $27 every single year.
            </div>
          </div>

          {/* Checkout da Hotmart */}
          <div className="mt-2">
            <HotmartUpsell black={false} />
          </div>

          {/* Botão de Recusa Discreto */}
          <Link 
            href="/thanks" 
            className="text-xs text-gray-400 hover:text-gray-600 underline"
          >
            No thanks, I prefer to pay $27 every year
          </Link>

          {/* Garantia */}
          <div className="text-xs text-gray-500 italic pt-2 border-t border-gray-200">
            🔒 Secure payment • Same 30-day money-back guarantee applies
          </div>
        </div>
      </div>
    </>  
  );

};