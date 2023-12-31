import express from "express";
import env from './environment';
import { ethers } from "ethers";
import { getCollectionNfts, getMaxSupply, contract } from "./utils";
import swaggerUi from "swagger-ui-express";
import fs from 'fs'
import YAML from 'yaml'

const app = express();
const port = env.PORT || 3000;

app.use(express.json());

const file = fs.readFileSync(__dirname + '/api.yaml', 'utf8')
const swaggerDoc = YAML.parse(file)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.get("/", async (req: any, res) => {
    try {
        res.send("Welcome to our free mint marketplace. Please call 'url/listItems' to list minted NFTs, or 'url/purchase/:nftId' to buy one!");
    } catch (error) {
        res.status(500).send("Internal error");
        console.log(error);
    }
});

app.get("/listItems", async (req, res) => {
    try {
        var maxSupply = await getMaxSupply();
        var nfts = await getCollectionNfts();
        res.send({ nfts, availableQuantity: maxSupply ? maxSupply - nfts.length : "Unlimited mint" });
    } catch (error) {
        res.status(500).send("Internal error");
        console.log(error);
    }
});

app.post("/purchase/:userAddress/:nftQuantity", async (req: any, res) => {
    let { userAddress, nftQuantity } = req.params;
    try {
        if (!ethers.isAddress(userAddress))
            return res.status(400).send("Wrong user address");

        if (nftQuantity <= 0)
            return res.status(401).send("Quantity could not be lesser than 1");

        var maxSupply = await getMaxSupply();
        var totalSupply = (await getCollectionNfts()).length;

        if (maxSupply && totalSupply + nftQuantity >= maxSupply) {
            return res.status(403).send("Tokens sold out!");
        }

        var tx = await contract.mint(nftQuantity, userAddress)

        await tx.wait()
            .catch((err: any) => {
                console.log("err", err);
            });

        res.send(`Your NFT is on the way. Here is Your transaction hash: ${tx.hash}`)
    } catch (error) {
        res.status(500).send("Internal error");
        console.log(error);
    }
});

app.listen(port, async () => {
    console.log(`App listening on port ${port}`);
});

export default app;