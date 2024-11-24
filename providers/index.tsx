'use client'

import { CHAIN } from "@/lib/constants";
import { PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth";

export const privyConfig: PrivyClientConfig = {
    appearance: { theme: "light", accentColor: "#FA9866" },
    defaultChain: CHAIN,
    supportedChains: [CHAIN],
    embeddedWallets: {
        createOnLogin: "users-without-wallets",
    },
};

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
        config={privyConfig}
    >{children}</PrivyProvider>;
};

export default Providers;
