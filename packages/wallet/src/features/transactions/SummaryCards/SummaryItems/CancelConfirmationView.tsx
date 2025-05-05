import { providers } from 'ethers'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Flex, FlexLoader, Separator, Skeleton, Text, isWeb } from 'ui/src'
import { SlashCircle } from 'ui/src/components/icons'
import { fonts } from 'ui/src/theme'
import { AuthTrigger } from 'uniswap/src/features/auth/types'
import { useUSDValueOfGasFee } from 'uniswap/src/features/gas/hooks'
import { useLocalizationContext } from 'uniswap/src/features/language/LocalizationContext'
import { isUniswapX } from 'uniswap/src/features/transactions/swap/utils/routing'
import { TransactionDetails, TransactionStatus } from 'uniswap/src/features/transactions/types/transactionDetails'
import { TestID } from 'uniswap/src/test/fixtures/testIDs'
import { NumberType } from 'utilities/src/format/types'
import { useCancellationGasFeeInfo } from 'wallet/src/features/gas/hooks'
import { useSelectTransaction } from 'wallet/src/features/transactions/hooks'

export function CancelConfirmationView({
  authTrigger,
  onBack,
  onCancel,
  transactionDetails,
}: {
  authTrigger?: AuthTrigger
  onBack: () => void
  onCancel: (txRequest: providers.TransactionRequest) => void
  transactionDetails: TransactionDetails
}): JSX.Element {
  const { t } = useTranslation()
  const { convertFiatAmountFormatted } = useLocalizationContext()

  const cancellationGasFeeInfo = useCancellationGasFeeInfo(transactionDetails)
  const { value: gasFeeUSD } = useUSDValueOfGasFee(
    transactionDetails.chainId,
    cancellationGasFeeInfo?.gasFeeDisplayValue,
  )
  const gasFee = convertFiatAmountFormatted(gasFeeUSD, NumberType.FiatGasPrice)

  const onCancelConfirm = useCallback(() => {
    if (!cancellationGasFeeInfo?.cancelRequest) {
      return
    }

    onCancel(cancellationGasFeeInfo.cancelRequest)
  }, [cancellationGasFeeInfo, onCancel])

  const onPressCancel = useCallback(async () => {
    if (authTrigger) {
      await authTrigger({ successCallback: onCancelConfirm, failureCallback: () => {} })
    } else {
      onCancelConfirm()
    }
  }, [authTrigger, onCancelConfirm])

  // We don't currently support cancelling orders made from another device.
  const isRemoteOrder =
    useSelectTransaction(transactionDetails.from, transactionDetails.chainId, transactionDetails.id) === undefined &&
    isUniswapX(transactionDetails)

  const disableConfirmationButton =
    !cancellationGasFeeInfo?.cancelRequest || transactionDetails.status !== TransactionStatus.Pending || isRemoteOrder

  return (
    <Flex
      centered
      grow
      backgroundColor="$surface1"
      borderRadius="$rounded20"
      gap="$spacing16"
      mt={isWeb ? '$spacing16' : '$none'}
      px={isWeb ? '$none' : '$spacing24'}
      py={isWeb ? '$none' : '$spacing12'}
    >
      <Flex centered backgroundColor="$surface3" borderRadius="$rounded12" p="$spacing12">
        <SlashCircle color="$neutral2" size="$icon.20" />
      </Flex>
      <Flex centered gap="$spacing8">
        <Text variant="buttonLabel2">{t('transaction.action.cancel.title')}</Text>
        <Text color="$neutral2" textAlign="center" variant="body3">
          {t('transaction.action.cancel.description')}
        </Text>
      </Flex>
      <Flex width="100%">
        <Separator />
      </Flex>
      <Flex row justifyContent="space-between" pb="$spacing8" px="$spacing12" width="100%">
        <Text color="$neutral2" variant="body3">
          {t('transaction.networkCost.label')}
        </Text>
        {!gasFeeUSD ? (
          <Skeleton>
            <FlexLoader borderRadius="$rounded4" height={fonts.body3.lineHeight} opacity={0.4} width="$spacing48" />
          </Skeleton>
        ) : (
          <Text variant="body3">{gasFee}</Text>
        )}
      </Flex>
      <Flex row gap="$spacing8" width="100%">
        <Button emphasis="secondary" onPress={onBack}>
          {t('common.button.back')}
        </Button>
        <Button
          isDisabled={disableConfirmationButton}
          testID={TestID.Cancel}
          variant="critical"
          emphasis="secondary"
          onPress={onPressCancel}
        >
          {t('common.button.confirm')}
        </Button>
      </Flex>
    </Flex>
  )
}
