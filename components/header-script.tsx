import Script from "next/script";

const idList: Record<string, string> = {
  kim: "68d2918cf1f6ffb0ac84056b",
  elon: "68d2918cf1f6ffb0ac84056b",
  shakira: "68d2918cf1f6ffb0ac84056b",
};

// Mapeamento de domínios para Pixel IDs
const domainPixelMap: Record<string, string> = {
  'usetaskora.com': '68f12cbc1ae3293afa512bd8',
  'www.usetaskora.com': '68f12cbc1ae3293afa512bd8',
  'taskaro.site': '68fd735bf27b9bf33fe96a7d',
  'www.taskaro.site': '68fd735bf27b9bf33fe96a7d',
};

export default function HeaderScript({ content, host }: { content: string; host: string }) {

  // Seleciona pixel baseado no domínio ou usa o padrão
  const pixelId = domainPixelMap[host] || "68f12cbc1ae3293afa512bd8";

  return (
    <>
      <Script
        id="utmify-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.pixelId=${JSON.stringify(pixelId)};`,
        }}
      />
      <Script
        id="utmify-pixel"
        src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
        strategy="afterInteractive"
      />
      <Script
        id="utmify-utms"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck
        data-utmify-prevent-subids
        strategy="afterInteractive"
      />
    </>
  );
  
};