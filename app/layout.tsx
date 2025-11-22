import WhiteContent from "@/components/pages/white/home";
import HeaderScript from "@/components/header-script";
import { getUserLayer } from "@/utils/get-user-layer";
import { LayerProvider } from "@/context/layer-provider";
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import { headers, cookies } from "next/headers";
import "@/app/globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
  // Headers/cookies disponíveis no Server
  const cks = await cookies();
  const hdrs = await headers();
  const pathname = hdrs.get("x-pathname") || "";

  // Rotas que não queremos mexer (mantém título padrão da black)
  const bypassLayerRoutes = ["/ready", "/almost", "/thanks", "/promo"];
  const shouldBypassLayer = bypassLayerRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Título/descrição padrão (black)
  const defaultTitle = "YouTube Rewards";
  const defaultDescription =
    "This new YouTube tool is scaring experts around the world.";

  if (shouldBypassLayer) {
    return {
      title: defaultTitle,
      description: defaultDescription,
    };
  }

  // Descobrir layer do usuário
  const userLayer = await getUserLayer({ cks, hdrs });

  // White (1) e Gray (2) recebem título neutro
  if (userLayer === 1 || userLayer === 2) {
    return {
      title: "Congratulations",
      description: "Congratulations! Discover a new rewards experience.",
    };
  }

  // Black (3) mantém o padrão
  return {
    title: defaultTitle,
    description: defaultDescription,
  };
}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // ENVIRONMENT VERIFY
  const frontLink = 'https://pay.hotmart.com/A103016372G?off=arnsxp2f';
  const promoLink = 'https://pay.hotmart.com/A103016372G?off=vsd974cy&checkoutMode=10&bid=1763595037909';
  const isProduction = process.env.NODE_ENV === 'production';

  // GET DOMAIN ID
  const cks = await cookies();
  const hdrs = await headers();
  const host = hdrs.get('x-host') || '';
  const catParamCookie = cks.get('xcat_valid');
  const catParamHeader = hdrs.get('x-domain-content');
  const content = catParamCookie?.value || catParamHeader || '';
  const params = hdrs.get('x-params') || '';
  const pathname = hdrs.get('x-pathname') || '';
  
  // ROTAS QUE DEVEM IGNORAR O SISTEMA DE LAYERS
  const bypassLayerRoutes = ['/ready', '/almost', '/thanks', '/promo'];
  const shouldBypassLayer = bypassLayerRoutes.some(route => pathname.startsWith(route));
  
  // GET USER LAYER (somente se não for rota de bypass)
  const userLayer = shouldBypassLayer ? null : await getUserLayer({ cks, hdrs });

  // BODY CLASS
  const bodyClassName = `flex flex-col w-full max-w-full overflow-x-hidden items-center select-none ${redHatDisplay.variable} antialiased`;
    
  return (
    <html lang="es" className="overflow-x-hidden">
      <body className={bodyClassName} suppressHydrationWarning>
        {isProduction && (
          <HeaderScript content={content} host={host} />
        )}
        {shouldBypassLayer || userLayer === 3 ? (
          <LayerProvider
            host={host}
            layer={userLayer || 3}
            params={params}
            content={content}
            frontLink={frontLink}
            promoLink={promoLink}
          >
            {children}
          </LayerProvider>
        ) : (
          <WhiteContent />
        )}
      </body>
    </html>
  );
  
};