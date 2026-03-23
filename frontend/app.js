const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const abi = [

{
"inputs":[
{"internalType":"string","name":"_id","type":"string"},
{"internalType":"string","name":"_name","type":"string"},
{"internalType":"string","name":"_course","type":"string"},
{"internalType":"string","name":"_date","type":"string"}
],
"name":"addCertificate",
"outputs":[],
"stateMutability":"nonpayable",
"type":"function"
},

{
"inputs":[
{"internalType":"string","name":"_id","type":"string"}
],
"name":"getCertificate",
"outputs":[
{"internalType":"string","name":"","type":"string"},
{"internalType":"string","name":"","type":"string"},
{"internalType":"string","name":"","type":"string"}
],
"stateMutability":"view",
"type":"function"
}

];

let provider;
let signer;
let contract;

async function connect(){

if(typeof window.ethereum !== "undefined"){

provider = new ethers.providers.Web3Provider(window.ethereum);

await provider.send("eth_requestAccounts",[]);

signer = provider.getSigner();

contract = new ethers.Contract(contractAddress,abi,signer);

console.log("Wallet Connected");

}
else{

alert("Please install MetaMask");

}

}

window.onload = connect;


async function addCert(){

try{

let id=document.getElementById("id").value;
let name=document.getElementById("name").value;
let course=document.getElementById("course").value;
let date=document.getElementById("date").value;

const tx = await contract.addCertificate(id,name,course,date);

await tx.wait();

alert("Certificate Added Successfully");

}

catch(err){

console.log(err);

alert("Transaction Failed");

}

}



async function verifyCert(){

try{

let id=document.getElementById("verifyId").value;

let data = await contract.getCertificate(id);

document.getElementById("result").innerHTML = 
"Name: "+data[0]+" | Course: "+data[1]+" | Date: "+data[2];

}

catch(err){

console.log(err);

alert("Certificate Not Found");

}

}