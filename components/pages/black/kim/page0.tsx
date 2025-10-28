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
          Congratulations!
        </div>
        
        {/* Box Verde com Check */}
        <div className="bg-green-50 border-2 border-dashed border-green-500 rounded-2xl p-5 mb-5">
          <div className="flex items-center justify-center gap-2 text-green-700 font-bold text-base sm:text-lg mb-2">
            <span className="text-2xl">✅</span>
            <span>YOU&apos;RE NOW ELIGIBLE TO EARN</span>
          </div>
          <div className="text-sm text-green-600">
            Your verification step is complete. But to unlock your full access and withdraw your earnings, just follow the last step below.
          </div>
        </div>
        
        {/* Instrução */}
        <div className="text-sm text-gray-700 font-medium">
          Click the button below and see the immediate withdrawal guide! 👇
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

