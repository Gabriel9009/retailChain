const hre = require('hardhat')

async function main() {
    const retailChain = await hre.ethers.getContractFactory("retailChain");
 
    // Start deployment, returning a promise that resolves to a contract object
    const retail_Chain = await retailChain.deploy();   
    console.log("Contract deployed to address:", retail_Chain.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });