//For this section you need to deploy your own contracts and set environment as described in the Video

//TK1: 
//TK2: 
//Oracle1: 
//Oracle2: 
//Lending 

//Initializing constants
const serverUrl = "";//Get your own Moralis Server.
const appId = "";//Get your own Moralis Server.

//web3 constants
const contractAddress = ""; //your own contract
const contractABI = [{"inputs":[],"name":"NeedsMoreThanZero","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"TokenNotAllowed","type":"error"},{"inputs":[],"name":"TransferFailed","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"priceFeed","type":"address"}],"name":"AllowedTokenSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"repayToken","type":"address"},{"indexed":true,"internalType":"address","name":"rewardToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"halfDebtInEth","type":"uint256"},{"indexed":false,"internalType":"address","name":"liquidator","type":"address"}],"name":"Liquidate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Repay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"LIQUIDATION_REWARD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LIQUIDATION_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_HEALH_FACTOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"borrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getAccountBorrowedValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getAccountCollateralValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getAccountInformation","outputs":[{"internalType":"uint256","name":"borrowedValueInETH","type":"uint256"},{"internalType":"uint256","name":"collateralValueInETH","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getTokenValueFromUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getUSDValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"healthFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"repayToken","type":"address"},{"internalType":"address","name":"rewardToken","type":"address"}],"name":"liquidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"repay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"s_accountToTokenBorrows","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"s_accountToTokenDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"s_allowedTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"s_tokenToPriceFeed","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"priceFeed","type":"address"}],"name":"setAllowedToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const tokenABI = [{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const ethers = Moralis.web3Library;


//web3 Functions
async function login(){
    Moralis.Web3.authenticate().then(async function (){
        const chainIdHex = await Moralis.switchNetwork("0x13881");
        populateUserData()
    });
}

async function getUserData(_account) {
    const accountInfo = await getAccountInfo(_account);
    const healthFactor = await getHealthFactor(_account);
    return [ healthFactor,accountInfo[0],accountInfo[1]];
}

async function populateUserData(){
    const account = await Moralis.account;
    const userData = await getUserData(account);
    document.getElementById('collateralAmount').value = userData[2];
    document.getElementById('debtAmount').value = userData[1];
    document.getElementById('healthFactor').value = userData[0];
}

async function queryAccount(){
    const account = document.getElementById("accountAddressQ").value
    const userData = await getUserData(account);
    document.getElementById('collateralAmountQ').value = userData[2];
    document.getElementById('debtAmountQ').value = userData[1];
    document.getElementById('healthFactorQ').value = userData[0];
}

async function getHealthFactor(_account) {
    const contractOptions = {
        contractAddress: contractAddress,
        abi: contractABI,
        functionName: "healthFactor",
        params: {
            account:_account,
        }
    }
    try{
        const healtFactorHex = await Moralis.executeFunction(contractOptions);
        return healtFactorHex.div(1e8).toBigInt();
    }
    catch(error){
        displayMessage("01","Transaction reverted see console for details");
        console.log(error)
    }
}

async function getTokenValueFromUSD(_token,_amount) {
    console.log(_token)
    const contractOptions = {
        contractAddress: contractAddress,
        abi: contractABI,
        functionName: "getTokenValueFromUSD",
        params: {
            token:_token,
            amount:_amount,
        }
    }
    try{
        const tokenValueHex = await Moralis.executeFunction(contractOptions);
        return tokenValueHex.toBigInt();
    }
    catch(error){
        displayMessage("01","Transaction reverted see console for details");
        console.log(error)
    }
}

async function getAccountInfo(_account) {
    const contractOptions = {
        contractAddress: contractAddress,
        abi: contractABI,
        functionName: "getAccountInformation",
        params: {
            user:_account,
        }
    }
    try{
        const accountInfo = await Moralis.executeFunction(contractOptions);
        return [accountInfo[0].div(1e8).toBigInt(),accountInfo[1].div(1e8).toBigInt()]
    }
    catch(error){
        displayMessage("01","Transaction reverted see console for details");
        console.log(error)
    }
}

async function deposit() {
    const _token = document.getElementById("tokenAddressD").value;
    const _amount = Moralis.Units.Token(document.getElementById("depositAmount").value,"18");
    await approve(_token, _amount, "Deposit")
    const contractOptions = {
        contractAddress: contractAddress,
        abi: contractABI,
        functionName: "deposit",
        params: {
            token:_token,
            amount:_amount,
        }
    }
    try{
        const transaction = await Moralis.executeFunction(contractOptions);
        await transaction.wait();
        displayMessage("00","Deposit complete")
        populateUserData()
    }
    catch(error){
        displayMessage("01","Transaction reverted see console for details");
        console.log(error)
    }
}

async function repay() {
    const _token = document.getElementById("tokenAddressR").value;
    const _amount = Moralis.Units.Token(document.getElementById("repayAmount").value,"18");
    await approve(_token, _amount, "repay")
    const contractOptions = {
        contractAddress: contractAddress,
        abi: contractABI,
        functionName: "repay",
        params: {
            token:_token,
            amount:_amount,
        }
    }
    try{
        const transaction = await Moralis.executeFunction(contractOptions);
        await transaction.wait();
        displayMessage("00","Repayment complete")
        populateUserData()
    }
    catch(error){
        displayMessage("01","Transaction reverted see console for details");
        console.log(error)
    }
}

async function borrow() {
    const _token = document.getElementById("tokenAddressB").value;
    const _amount = Moralis.Units.Token(document.getElementById("borrowAmount").value,"18");
    const contractOptions = {
        contractAddress: contractAddress,
        abi: contractABI,
        functionName: "borrow",
        params: {
            token:_token,
            amount:_amount,
        }
    }
    try{
        const transaction = await Moralis.executeFunction(contractOptions);
        await transaction.wait();
        displayMessage("00","Borrow operation complete");
        populateUserData();

    }
    catch(error){
        displayMessage("01","Transaction reverted see console for details");
        console.log(error);
    }
}

async function withdraw() {
    const _token = document.getElementById("tokenAddressW").value;
    const _amount = Moralis.Units.Token(document.getElementById("withdrawAmount").value,"18");
    const contractOptions = {
        contractAddress: contractAddress,
        abi: contractABI,
        functionName: "withdraw",
        params: {
            token:_token,
            amount:_amount,
        }
    }
    try{
        const transaction = await Moralis.executeFunction(contractOptions);
        await transaction.wait();
        displayMessage("00","Withdraw complete");
        populateUserData();

    }
    catch(error){
        displayMessage("01","Transaction reverted see console for details");
        console.log(error);
    }
}

async function liquidate() {
    const _account = document.getElementById("accountAddressQ").value;
    const _repayToken = document.getElementById("tokenAddressRP").value;
    const _rewardToken = document.getElementById("tokenAddressRW").value;
    const _halfDebt = Moralis.Units.Token(document.getElementById("debtAmountQ").value/2,"8");
    const _halfDebtToken = await getTokenValueFromUSD(_repayToken,_halfDebt);
    await approve(_repayToken, _halfDebtToken, "liquidate")
    const contractOptions = {
        contractAddress: contractAddress,
        abi: contractABI,
        functionName: "liquidate",
        params: {
            repayToken:_repayToken,
            rewardToken:_rewardToken,
            account:_account,
        }
    }
    try{
        const transaction = await Moralis.executeFunction(contractOptions);
        await transaction.wait();
        displayMessage("00","Liquidation complete")
        populateUserData()
    }
    catch(error){
        displayMessage("01","Transaction reverted see console for details");
        console.log(error)
    }
}


async function approve(_tokenAddress, _amount, nextOperation) {
    const contractOptions = {
        contractAddress: _tokenAddress,
        abi: tokenABI,
        functionName: "approve",
        params: {
            spender:contractAddress,
            amount:_amount,
        }
    }
    try{
        const transaction = await Moralis.executeFunction(contractOptions);
        await transaction.wait();
        displayMessage("00","Approval granted, proceeding to " + nextOperation);
    }
    catch(error){
        displayMessage("01","Transaction reverted see console for details");
        console.log(error)
    }
}



function displayMessage(messageType, message){
    const messages = {
                "00":`<div class= "alert alert-success"> ${message} </div>`,
                "01":`<div class= "alert alert-danger"> ${message} </div>`
            }
    document.getElementById("notifications").innerHTML = messages[messageType];
}

Moralis.start({ serverUrl, appId }); 
login();