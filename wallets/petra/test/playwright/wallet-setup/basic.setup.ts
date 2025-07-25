import { defineWalletSetup } from '@synthetixio/synpress-cache'
import { getExtensionIdPetra, Petra } from '../../../src/playwright'

export const SEED_PHRASE = 'test test test test test test test test test test test junk'
export const PASSWORD = 'Tester@1234'

export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
  const extensionId = await getExtensionIdPetra(context, 'Petra Aptos Wallet')
  const petra = new Petra(context, walletPage, PASSWORD, extensionId)

  await petra.importWallet(SEED_PHRASE)

  await petra.goToHomePage()

  await petra.toggleNetworkMode('testnet')
})
