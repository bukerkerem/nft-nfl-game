const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('BitciGame');
    const gameContract = await gameContractFactory.deploy(
      ["Patriots", "Eagles", "Lions"],    // Names
      ["https://i.imgur.com/W32WeHW.png", // Images
      "https://i.imgur.com/Eex0c1Z.png", 
      "https://i.imgur.com/dvRIBFA.png"],
      [300, 200, 100],                    // HP values
      [100, 50, 25]                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();