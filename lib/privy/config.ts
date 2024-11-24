import { CHAIN } from "@/lib/constants";
import type { PrivyClientConfig } from "@privy-io/react-auth";

export const privyConfig: PrivyClientConfig = {
    appearance: { theme: "light", accentColor: "#FA9866" },
    defaultChain: CHAIN,
    supportedChains: [CHAIN],
    embeddedWallets: {
        createOnLogin: "users-without-wallets",
    },
};
