"use client";

import { useState } from "react";
import AirdropForm from "@/components/AirdropForm";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function HomeContent() {
  const [isUnsafeMode, setIsUnsafeMode] = useState(false);

  return (
    <main>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openConnectModal,
          mounted,
        }) => {
          const connected = mounted && account && chain;

          return (
            <>
              {!connected ? (
                <div className="flex items-center justify-center h-screen">
                  <button
                    onClick={openConnectModal}
                    className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition"
                  >
                    Connect Wallet
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-center p-4 md:p-6 xl:p-8">
                  <AirdropForm
                    isUnsafeMode={isUnsafeMode}
                    onModeChange={setIsUnsafeMode}
                  />
                </div>
              )}
            </>
          );
        }}
      </ConnectButton.Custom>
    </main>
  );
}
