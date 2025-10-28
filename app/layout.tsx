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

export const metadata: Metadata = {
  title: "YouTube Rewards",
  description: "This new YouTube tool is scaring experts around the world.",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // ENVIRONMENT VERIFY
  const frontLink = 'https://pay.hotmart.com/R102443695N?off=e6dv0vup&bid=1761437242712';
  const promoLink = 'https://pay.hotmart.com/R102443695N?off=bw7ina0z&bid=1761437282372';
  const isProduction = process.env.NODE_ENV === 'production';

  // GET DOMAIN ID
  const cks = await cookies();
  const hdrs = await headers();
  const host = hdrs.get('x-host') || '';
  const catParam = cks.get('xcat_valid');
  const content = catParam?.value || '';
  const params = hdrs.get('x-params') || '';
  const pathname = hdrs.get('x-pathname') || '';
  
  // ROTAS QUE DEVEM IGNORAR O SISTEMA DE LAYERS
  const bypassLayerRoutes = ['/ready', '/almost', '/thanks', '/promo'];
  const shouldBypassLayer = bypassLayerRoutes.some(route => pathname.startsWith(route));
  
  // GET USER LAYER (somente se não for rota de bypass)
  const userLayer = shouldBypassLayer ? null : await getUserLayer({ cks, hdrs });

  // BODY CLASS
  const bodyClassName = `flex flex-col min-w-[350px] items-center select-none ${redHatDisplay.variable} antialiased`;
    
  return (
    <html lang="es">
      {isProduction && (
        <head>
          <HeaderScript content={content} />
        </head>
      )}
      <body className={bodyClassName} suppressHydrationWarning>
        {shouldBypassLayer || userLayer !== 1 ? (
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