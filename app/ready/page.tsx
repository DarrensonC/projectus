import Progress from "@/components/progress";
import HotmartUpsell from "@/components/hotmart-upsell";
import Link from "next/link";

export default function Page() {

  return (
    <>
      {/* Alerta Topo Vermelho */}
      <div className="w-full text-sm bg-red-600 text-white">
        <div className="mx-auto px-4 py-4">
          <div className="text-center font-bold">
            Do not close or refresh this page!
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-xl gap-5 px-5 py-6">
        
        {/* Barra de Progresso */}
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-sm font-medium text-gray-300">
            Processing fee payment
          </span>
          <Progress progress={95} />
        </div>
        
        {/* Box Principal - Dark Mode Compacto */}
        <div className="flex flex-col text-center rounded-2xl gap-5 bg-gradient-to-b border-2 px-6 py-7 from-gray-800 to-gray-900 border-gray-700 shadow-2xl text-white">
          
          {/* Badge/Título Topo */}
          <div className="text-sm font-bold text-green-400 uppercase tracking-wide">
            Get Your Final Exclusive Bonus Before Starting The Program!
          </div>

          {/* Título Principal */}
          <div className="text-4xl sm:text-5xl font-black italic text-white leading-tight">
            LIFETIME ACCESS
          </div>

          {/* Descrição */}
          <div className="text-base text-gray-300 font-medium leading-relaxed">
            Unlock permanent access to our powerful AI system built to generate unlimited results for life! 💸
          </div>

          {/* Checkout Hotmart (Botão verde gigante) */}
          <div className="mt-2">
            <HotmartUpsell black={false} />
          </div>

          {/* Link de Recusa Discreto */}
          <Link 
            href="/thanks" 
            className="text-xs text-gray-500 hover:text-gray-400 underline mt-2"
          >
            No thanks, I&apos;ll skip this offer
          </Link>

        </div>
      </div>
    </>  
  );

};