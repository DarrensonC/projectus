import Script from "next/script";

const idList: Record<string, string> = {
  kim: "68d2918cf1f6ffb0ac84056b",
  elon: "68d2918cf1f6ffb0ac84056b",
  shakira: "68d2918cf1f6ffb0ac84056b",
};

// Mapeamento de domínios para Pixel IDs
const domainPixelMap: Record<string, string> = {
  'tubevity.online': '69208c9d1d9755682618d35d',
  'www.tubevity.online': '69208c9d1d9755682618d35d',
  // IMPORTANTE: usar exatamente o mesmo ID do pixel cadastrado na UTMify
  // (mesmo valor do window.pixelId do snippet da UTMify)
  'yuvox.online': '69208b54a4f3234d09b3f7ab',
  'www.yuvox.online': '69208b54a4f3234d09b3f7ab',
  'viduple.com': '69208b54a4f3234d09b3f7ab',
  'www.viduple.com': '69208b54a4f3234d09b3f7ab',
  'taskflowr.online': '6920b560aab29d45bc124b8f',
  'www.taskflowr.online': '6920b560aab29d45bc124b8f',
};

// (Opcional) Mapeamento de Meta Pixel para o Helper detectar
const domainMetaPixelMap: Record<string, string> = {
  'taskaro.site': '871887588831959',
  'www.taskaro.site': '871887588831959',
  'taskoria.space': '871887588831959',
  'www.taskoria.space': '871887588831959',
  'klareo.space': '871887588831959',
  'www.klareo.space': '871887588831959',
};

export default function HeaderScript({ content, host }: { content: string; host: string }) {

  // Seleciona pixel baseado no domínio ou usa o padrão
  const pixelId = domainPixelMap[host] || "68fd735bf27b9bf33fe96a7d";
  const metaPixelId = domainMetaPixelMap[host];

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
        id="utmify-pixel-loader"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              try {
                var a = document.createElement("script");
                a.setAttribute("async", "");
                a.setAttribute("defer", "");
                a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
                document.head.appendChild(a);
              } catch(e) {}
            })();
          `,
        }}
      />
      {metaPixelId && (
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}
      <Script
        id="utmify-utms"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck
        data-utmify-prevent-subids
        async
        defer
        strategy="afterInteractive"
      />
    </>
  );
  
};