"use client";

import { createContext, useContext, ReactNode } from "react";

type LayerContext = {
  host: string,
  layer: number,
  content: string,
  params: string,
  frontLink: string,
  promoLink: string,
};

const LayerContext = createContext<LayerContext | undefined>(undefined);

type LayerProviderProps = {
  host: string,
  layer: number,
  params: string,
  content: string,
  children: ReactNode,
  frontLink: string,
  promoLink: string,
};

export function LayerProvider({
  host,
  layer,
  params,
  content,
  children,
  frontLink,
  promoLink,
}: LayerProviderProps) {

  function buildUrlWithParams(url: string, qs: string) {
    if (!url) return '';
    if (!qs) return url;
    return url + (url.includes('?') ? '&' : '?') + qs;
  };

  const frontLinkWithParams = buildUrlWithParams(frontLink, params);

  const contextValue = {
    host,
    layer,
    params,
    content,
    frontLink: frontLinkWithParams,
    promoLink,
  };

  return (
    <LayerContext.Provider value={contextValue}>
      {children}
    </LayerContext.Provider>
  );

};

export function useLayer() {

  const layer = useContext(LayerContext);

  if (!layer) {
    throw new Error("useLayer deve ser usado dentro de LayerProvider");
  };
  
  return layer;

};