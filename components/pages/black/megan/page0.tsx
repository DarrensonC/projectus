import Button from "@/components/button";
import { CheckCheck, Loader2 } from "lucide-react";

export default function Page({
  active,
  handleClick,
}:{
  active: boolean,
  handleClick: () => void,
}) {

  return (
    <div className="flex flex-col gap-4 sm:gap-5 text-center appear">
      
      {/* Box Principal */}
      <div className="rounded-2xl sm:rounded-3xl border shadow-lg p-4 sm:p-6 md:p-8 bg-gradient-to-b from-white to-gray-50 border-gray-300">
        
        {/* Título */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 text-gray-900 leading-tight">
          🎁 Congratulations! 🎁
        </div>
        
        {/* Subtítulo */}
        <div className="text-sm sm:text-base font-semibold text-gray-800 mb-3 sm:mb-4 leading-snug px-2">
          You&apos;ve been pre-selected to join the program!
        </div>
        
        {/* Box Verde com Check */}
        <div className="bg-green-50 border-2 border-dashed border-green-500 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-3 sm:mb-5">
          <div className="text-xs sm:text-sm text-green-700 leading-relaxed">
            To unlock your full access and withdraw your earnings, just follow the step-by-step instructions below.
          </div>
        </div>
        
        {/* Texto de Importância */}
        <div className="text-xs sm:text-sm text-gray-700 font-medium mb-3 sm:mb-4 leading-relaxed px-2">
          Your honest opinion is essential to complete this stage.
        </div>
        
        {/* Instrução */}
        <div className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed px-2">
          Click the button below and finish the activation in just a few seconds! 👇
        </div>
        
      </div>

      {/* Botão Verde Grande */}
      <Button
        onClick={handleClick}
        disabled={active}
        className="pulse !py-3 sm:!py-4 !text-sm sm:!text-base !bg-green-500 !border-green-600 hover:!bg-green-600 !leading-tight"
      >
        {active ? (
          <Loader2 className="size-5 sm:size-6 animate-spin" />
        ):(
          <CheckCheck className="size-5 sm:size-6" />
        )}
        <span className="leading-snug">Activate full access and withdraw my balance</span>
      </Button>
      
    </div>
  );

};

