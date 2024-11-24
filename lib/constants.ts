import { base, baseSepolia } from "viem/chains";

const IS_PROD = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
export const CHAIN = IS_PROD ? base : baseSepolia;

console.log({ IS_PROD, CHAIN })