# hardhat-base

<!-- ABOUT THE PROJECT -->

## About The Project

This is a base project to create a fast web3 development environment with hardhat.

The project mainly consists of the contracts, the tests and the deployment scripts.

To run the project:

First, it doesn't contain a .env file because of the nature of web3 apps. Please be sure that you've created your own .env file with your own credentials and never share/post it.

To create .env file

```sh
touch .env
```

The .env file should look something like below

```sh
PRIVATE_KEY = <HERE_COMES_YOUR_PRIVATE_KEY>
MAINNET_URL = <MAINNET_URL>
ROPSTEN_URL = <ALCHEMY_ROPSTEN_URL>
RINKEBY_URL = <ALCHEMY_RINKEBY_URL>
ETHERSCAN_KEY = <ETHERSCAN_KEY>
```

To run the tests:

```sh
npx hardhat test
```

To compile contracts:

```sh
npx hardhat compile
```

To deploy the contracts to Rinkeby Testnet:

```sh
npx hardhat run deployments/deployContract.js --network rinkeby
```

To verify the contracts on Rinkeby Testnet:

```sh
hardhat verify — network <networkName> <contractAddress> <ConstructorArguments>
```

in this case

```sh
npx hardhat verify --network rinkeby <CONTRACT_ADDRESS> "100000000000000000000000"
```

<p align="right">(<a href="#top">back to top</a>)</p>
