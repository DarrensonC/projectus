import Option from "@/components/option";
import { Frown, Meh, Smile } from "lucide-react";

export default function Page({
  handleClick,
}:{
  handleClick: () => void,
}) {

  return (
    <div className="flex flex-col gap-3 sm:gap-4 text-sm appear">
      
      {/* Vídeo PandaVideo 1 */}
      <div className="rounded-3xl border shadow-lg overflow-hidden bg-black border-gray-400/20 shadow-black/5">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe 
            id="panda-c2c36d6a-874a-4f09-872c-ebaa9cfc1829" 
            src="https://player-vz-e29bdd42-f4e.tv.pandavideo.com.br/embed/?v=c2c36d6a-874a-4f09-872c-ebaa9cfc1829" 
            style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
            allowFullScreen={true}
          />
        </div>
      </div>
      
      {/* Pergunta */}
      <div className="flex flex-col gap-2 text-center text-balance my-4">
        <span className="text-lg font-semibold">
          What did you think of this video?
        </span>
        <span className="text-sm text-gray-600">
          Select an option below ⬇️
        </span>
      </div>
      
      {/* Opções de Reação */}
      <div className="grid grid-cols-3 gap-3">
        <Option onClick={handleClick} className="active:!ring-green-500">
          <Smile size={45} className="text-green-400" />
        </Option>
        <Option onClick={handleClick} className="active:!ring-red-500">
          <Meh size={45} className="text-yellow-500" />
        </Option>
        <Option onClick={handleClick} className="active:!ring-red-500">
          <Frown size={45} className="text-red-500" />
        </Option>
      </div>
    </div>
  );

};
