# Memecoin Factory
![Memecoin](https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2022/08/dogecoin_getty.jpeg.jpg)

A simple ERC-20 token factory conract to help you generate tokens on chain easily! 

A memecoin is a cryptocurrency inspired by internet memes or pop culture, often created as a joke or for fun rather than serious utility. Its value is typically driven by online hype, social media trends, and community enthusiasm rather than strong technology or use cases. Examples like Dogecoin and Shiba Inu have gained popularity due to viral attention, but memecoins are highly speculative and volatile investments.

An ERC-20 token factory contract is a smart contract that automates the creation and deployment of ERC-20 tokens on the Ethereum blockchain. It provides a template for generating tokens with standard features like transfers and balance checks, making token creation easy and accessible without writing custom code for each new token.

# ENV Variables 
You will need to create a file called *.env* in the root directory, copy the text in *.env.example* and fill in the variables 


# How to Run 
You first need to setup all the necessary keys such as [Etherscan](https://etherscan.io/). Then setup your required RPCs and networks in hardhat.config.js.  
```
npm install
npx hardhat ignition deploy ignition/modules/Meme.js --network bsc --verify
npx hardhat ignition deploy ignition/modules/Factory.js --network bsc --verify

```
