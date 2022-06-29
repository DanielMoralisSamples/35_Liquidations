# DeFi Liquidations
- This repository contains examples for a Lending Pool.
- For running the front end"
    - You need a moralis server and get your moralis server url and app id.
    - You need to deploy the contracts in the solidity folder in this order.
        - Two instances of Token Contract.
        - Two instances of MockOracle Contract.
        - One instance of Lending Contract.
        - Transfer tokens to your secondary account from the Token Contracts deployer.
        - Whitelist each instance of your Token Contract in the Lending contract, you need to provide the MockOracle contract that you will set for each of the tokens to get their price.