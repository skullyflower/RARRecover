import PageCard from '@renderer/components/layout/page-card'
import ColorBox from '@renderer/components/layout/color-box'
import { Heading, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import AssetsSection from './assets-section'

function ACAAssetsPage(): JSX.Element {
  const [praise, setPraise] = useState<string[]>([])

  return (
    <Stack gap={4} width="100%">
      <Heading textAlign="center" as="h1" size="lg">
        Assets
      </Heading>
      <PageCard>
        <Stack gap={4} width={'100%'}>
          <ColorBox>
            <AssetsSection praise={praise} setSetPraise={setPraise as (value: string[]) => void} />
          </ColorBox>
        </Stack>
      </PageCard>
    </Stack>
  )
}
export default ACAAssetsPage
