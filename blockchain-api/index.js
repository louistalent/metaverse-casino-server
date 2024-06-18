
const {
    provider, nftContract } = require('../contracts');
const { BlockNumController } = require("../controllers")

const { handleEvent } = require("../utils/utils");

const handleTransfer = () => {
    const handler = async (tx) => {
        var tokenDatas = {
            from: tx.args.from,
            to: tx.args.to,
            tokenId: tx.args.tokenId
        };
        console.log(tokenDatas);
        // connect to metaverse db
    }

    handleEvent({
        id: "transfer",
        provider: provider,
        contract: nftContract,
        event: "Transfer",
        times: 15,
        handler: handler,
        BlockNumController: BlockNumController
    });
}

module.exports = { handleTransfer };