import { LedgerVapory, BrowserLedgerConnectionFactory, Network } from '../source/index';

async function doStuff() {
	const onConnectLedgerRequest = async () => { console.log('onConnectLedgerRequest'); }
	const onOpenVaporyAppRequest = async () => { console.log('onOpenVaporyAppRequest'); }
	const onSwitchLedgerModeRequest = async () => { console.log('onSwitchLedgerModeRequest'); }
	const onEnableContractSupportRequest = async () => { console.log('onEnableContractSupportRequest'); }

	const ledgerVapory = new LedgerVapory(Network.Main, BrowserLedgerConnectionFactory, onConnectLedgerRequest, onOpenVaporyAppRequest, onSwitchLedgerModeRequest, onEnableContractSupportRequest);
	const address = await ledgerVapory.getAddressByBip44Index(0);
	console.log(address);
	const firstSignedMessagePromise = ledgerVapory.signTransactionByBip44Index("e8018504e3b292008252089428ee52a8f3d6e5d15f8b131996950d7f296c7952872bd72a2487400080", 7);
	const secondSignedMessagePromise = ledgerVapory.signTransactionByBip32Path("e8018504e3b292008252089428ee52a8f3d6e5d15f8b131996950d7f296c7952872bd72a2487400080", "m/44'/60'/0'/0/7");
	const firstSignedMessage = await firstSignedMessagePromise;
	const secondSignedMessage = await secondSignedMessagePromise;
	console.log(firstSignedMessage);
	console.log(secondSignedMessage);
}

doStuff().then(() => {
	console.log('done');
}).catch(error => {
	console.log(error);
});
