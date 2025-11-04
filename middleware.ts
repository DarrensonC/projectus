import { NextRequest, NextResponse } from 'next/server';

// PARAM LIST
const paramList: Record<string, string> = {
  'Zkxidj6qY8JKKyK': 'kim', // LEGACY CAT PARAM
  'KPTSqxgasIkXDoN': 'kim',
  'DhvR0HwvtT5hwMg': 'rock',
  'bw5epB1IhzbROy3': 'megan',
};

// DOMAIN MAPPING - Mapeamento de domínios para variações
const domainMapping: Record<string, string> = {
  'usetaskora.com': 'kim',
  'www.usetaskora.com': 'kim',
  'taskaro.site': 'kim',
  'www.taskaro.site': 'kim',
  'taskoria.space': 'kim',
  'www.taskoria.space': 'kim',
  'novyraonline.site': 'kim',
  'www.novyraonline.site': 'kim',
  'nomady.site': 'kim',
  'www.nomady.site': 'kim',
  'klareo.space': 'kim',
  'www.klareo.space': 'kim',
};

export function middleware(req: NextRequest) {

  const { nextUrl } = req;
  const url = nextUrl.toString() || '';
  const host = nextUrl.hostname.toLowerCase() || '';
  const params = nextUrl.searchParams;
  const catParam = params.get('xcat') || params.get('cat') || ''; // LEGACY CAT PARAM
  const localParam = params.get('xtest') || '';
  const requestHeaders = new Headers(req.headers);
  const localTestParamEnv = process.env.LOCAL_TEST_PARAM || 'dev';

  requestHeaders.set('x-url', url);
  requestHeaders.set('x-host', host);
  requestHeaders.set('x-params', params.toString());
  requestHeaders.set('x-cat-param', catParam);
  requestHeaders.set('x-pathname', nextUrl.pathname);

  if (localParam === localTestParamEnv) {
    requestHeaders.set('x-local-param', 'true');
  };

  // VERIFICAR SE O DOMÍNIO ESTÁ MAPEADO
  if (domainMapping[host]) {
    // Adicionar o content do domínio no header também
    requestHeaders.set('x-domain-content', domainMapping[host]);
    
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    
    response.cookies.set({
      name: 'xcat_valid',
      value: domainMapping[host],
      path: '/',
      maxAge: 60 * 60 * 72,
      httpOnly: false,
    });
  
    return response;
  };

  if (catParam && paramList[catParam]) {

    params.delete('cat');
    params.delete('xcat');
    const newUrl = req.nextUrl.clone();
    newUrl.search = params.toString();
  
    const response = NextResponse.redirect(newUrl, { status: 302 });
    
    response.cookies.set({
      name: 'xcat_valid',
      value: paramList[catParam],
      path: '/',
      maxAge: 60 * 60 * 72,
      httpOnly: false,
    });
  
    return response;
  
  };

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

};

export const config = {
  matcher: ["/:path*"],
};