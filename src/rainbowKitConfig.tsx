"use client"

import {getDefaultConfig} from "@rainbow-me/rainbowkit";
import { arbitrum, base, mainnet, optimism, anvil, zksync, sepolia } from "wagmi/chains"

export default getDefaultConfig({
    appName: "Airdrop",
    projectId: "e2e4f7496b96a4be50f2b4b4694861c9",
    chains: [mainnet, optimism, arbitrum, base, zksync, sepolia, anvil],
    ssr: false,
})