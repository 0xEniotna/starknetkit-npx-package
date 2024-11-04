"use client"

import { publicProvider, StarknetConfig } from "@starknet-react/core"
import { mainnet, sepolia } from "@starknet-react/chains"
import { constants } from "starknet"
import { CHAIN_ID } from "@/constants"
import { connectors } from "@/connectors"
import { StarknetDapp } from "@/components/StarknetDapp"
import { Flex } from "@/components/ui/Flex"

export default function Home() {
  const chains = [
    CHAIN_ID === constants.NetworkName.SN_MAIN ? mainnet : sepolia,
  ]
  const providers = publicProvider()
  return (
    <Flex flexDirection="column" padding="40px 0">
      {/* eslint-disable @typescript-eslint/no-explicit-any */}
      <StarknetConfig
        chains={chains}
        provider={providers}
        /* TODO: wait for starknet-react to update Connector interface */
        connectors={connectors as any}
      >
        <StarknetDapp />
      </StarknetConfig>
      {/* eslint-enable @typescript-eslint/no-explicit-any */}
    </Flex>
  )
}