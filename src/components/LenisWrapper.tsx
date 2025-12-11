import { ReactLenis } from "@studio-freight/react-lenis";
import type { PropsWithChildren } from "react";

type LenisWrapperProps = PropsWithChildren<{
  options?: Parameters<typeof ReactLenis>[0]["options"];
}>;

export default function LenisWrapper({ options, children }: LenisWrapperProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        duration: 1.05,
        smoothWheel: true,
        smoothTouch: false,
        ...options,
      }}
    >
      {children}
    </ReactLenis>
  );
}
