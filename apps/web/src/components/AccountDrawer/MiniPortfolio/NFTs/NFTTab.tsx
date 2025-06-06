import { NFT } from 'components/AccountDrawer/MiniPortfolio/NFTs/NFTItem'
import { DEFAULT_NFT_QUERY_AMOUNT } from 'components/AccountDrawer/MiniPortfolio/constants'
import { useAccountDrawer } from 'components/AccountDrawer/MiniPortfolio/hooks'
import { useNftBalance } from 'graphql/data/nft/NftBalance'
import styled from 'lib/styled-components'
import { LoadingAssets } from 'nft/components/collection/CollectionAssetLoading'
import { EmptyWalletModule } from 'nft/components/profile/view/EmptyWalletContent'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Chain } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks'
import { useEnabledChains } from 'uniswap/src/features/chains/hooks/useEnabledChains'
import { FeatureFlags } from 'uniswap/src/features/gating/flags'
import { useFeatureFlag } from 'uniswap/src/features/gating/hooks'

export default function NFTs({ account }: { account: string }) {
  const accountDrawer = useAccountDrawer()
  const { gqlChains, isTestnetModeEnabled } = useEnabledChains()

  const isL2NFTsEnabled = useFeatureFlag(FeatureFlags.L2NFTs)
  const { walletAssets, loading, hasNext, loadMore } = useNftBalance({
    ownerAddress: account,
    first: DEFAULT_NFT_QUERY_AMOUNT,
    skip: !accountDrawer.isOpen,
    chains: isTestnetModeEnabled ? gqlChains : isL2NFTsEnabled ? [Chain.Ethereum, Chain.Zora] : undefined,
  })

  const [currentTokenPlayingMedia, setCurrentTokenPlayingMedia] = useState<string | undefined>()

  if (loading && !walletAssets) {
    return (
      <AssetsContainer>
        <LoadingAssets count={2} />
      </AssetsContainer>
    )
  }

  if (!walletAssets || walletAssets?.length === 0) {
    return <EmptyWalletModule onNavigateClick={accountDrawer.close} />
  }

  return (
    <>
      <InfiniteScroll
        next={loadMore}
        hasMore={hasNext ?? false}
        loader={
          Boolean(hasNext && walletAssets?.length) && (
            <AssetsContainer>
              <LoadingAssets count={2} />
            </AssetsContainer>
          )
        }
        dataLength={walletAssets?.length ?? 0}
        style={{ overflow: 'unset' }}
        scrollableTarget="wallet-dropdown-scroll-wrapper"
      >
        <AssetsContainer>
          {walletAssets?.length
            ? walletAssets.map((asset, index) => {
                return (
                  <NFT
                    setCurrentTokenPlayingMedia={setCurrentTokenPlayingMedia}
                    mediaShouldBePlaying={currentTokenPlayingMedia === asset.tokenId}
                    key={index}
                    asset={asset}
                  />
                )
              })
            : null}
        </AssetsContainer>
      </InfiniteScroll>
    </>
  )
}

const AssetsContainer = styled.div`
  display: grid;
  gap: 12px;

  // use minmax to not let grid items escape the parent container
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  margin: 16px;
`
