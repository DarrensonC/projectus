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
    <div className="flex flex-col gap-5 text-center appear">
      
      {/* Box Principal */}
      <div className="rounded-3xl border shadow-lg p-6 sm:p-8 bg-gradient-to-b from-white to-gray-50 border-gray-300">
        
        {/* Título */}
        <div className="text-3xl sm:text-4xl font-black mb-4 text-gray-900">
          🎁 Congratulations! 🎁
        </div>
        
        {/* Subtítulo */}
        <div className="text-base font-semibold text-gray-800 mb-4">
          You&apos;ve been pre-selected to join the program!
        </div>
        
        {/* Box Verde com Check */}
        <div className="bg-green-50 border-2 border-dashed border-green-500 rounded-2xl p-5 mb-5">
          <div className="text-sm text-green-700 leading-relaxed">
            To unlock your full access and withdraw your earnings, just follow the step-by-step instructions below.
          </div>
        </div>
        
        {/* Texto de Importância */}
        <div className="text-sm text-gray-700 font-medium mb-4">
          Your honest opinion is essential to complete this stage.
        </div>
        
        {/* Instrução */}
        <div className="text-sm text-gray-700 font-medium">
          Click the button below and finish the activation in just a few seconds! 👇
        </div>
        
      </div>

      {/* Botão Verde Grande */}
      <Button
        onClick={handleClick}
        disabled={active}
        className="pulse !py-4 !text-base !bg-green-500 !border-green-600 hover:!bg-green-600"
      >
        {active ? (
          <Loader2 className="size-6 animate-spin" />
        ):(
          <CheckCheck className="size-6" />
        )}
        <span>Activate full access and withdraw my balance</span>
      </Button>
      
    </div>
  );

};

