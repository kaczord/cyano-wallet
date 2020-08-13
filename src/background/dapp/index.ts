import { client, provider } from '@ont-dev/ontology-dapi';
import { assetApi as asset } from './asset';
import { identityApi as identity } from './identity';
import { messageApi as message } from './message';
import { networkApi as network } from './network';
import { providerApi } from './provider';
import { smartContractApi as smartContract } from './smartContract';
import { stateChannelApi as stateChannel } from './stateChannel';
import { claimApi as claim } from './claim';

export function initDApiProvider() {
  provider.registerProvider({
    logMessages: true,
    provider: {
      asset,
      identity,
      message,
      network,
      provider: providerApi,
      smartContract,
      stateChannel,
      utils: client.api.utils,
      claim
    },
  });
}
