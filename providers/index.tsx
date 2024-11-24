'use client'
import { privyConfig } from "@/lib/privy/config";
import { PrivyProvider } from "@privy-io/react-auth";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
        config={privyConfig}
    >{children}</PrivyProvider>;
};

export default Providers;
