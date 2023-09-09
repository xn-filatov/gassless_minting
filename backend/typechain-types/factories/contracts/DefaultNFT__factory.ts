/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  DefaultNFT,
  DefaultNFTInterface,
} from "../../contracts/DefaultNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260006007553480156200001657600080fd5b506040518060400160405280600a81526020017f44656661756c744e4654000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f444e465400000000000000000000000000000000000000000000000000000000815250620000a362000097620000cf60201b60201c565b620000d760201b60201c565b8160019081620000b4919062000415565b508060029081620000c6919062000415565b505050620004fc565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021d57607f821691505b602082108103620002335762000232620001d5565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025e565b620002a986836200025e565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f6620002f0620002ea84620002c1565b620002cb565b620002c1565b9050919050565b6000819050919050565b6200031283620002d5565b6200032a6200032182620002fd565b8484546200026b565b825550505050565b600090565b6200034162000332565b6200034e81848462000307565b505050565b5b8181101562000376576200036a60008262000337565b60018101905062000354565b5050565b601f821115620003c5576200038f8162000239565b6200039a846200024e565b81016020851015620003aa578190505b620003c2620003b9856200024e565b83018262000353565b50505b505050565b600082821c905092915050565b6000620003ea60001984600802620003ca565b1980831691505092915050565b6000620004058383620003d7565b9150826002028217905092915050565b62000420826200019b565b67ffffffffffffffff8111156200043c576200043b620001a6565b5b62000448825462000204565b620004558282856200037a565b600060209050601f8311600181146200048d576000841562000478578287015190505b620004848582620003f7565b865550620004f4565b601f1984166200049d8662000239565b60005b82811015620004c757848901518255600182019150602085019450602081019050620004a0565b86831015620004e75784890151620004e3601f891682620003d7565b8355505b6001600288020188555050505b505050505050565b612d2e806200050c6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063a22cb46511610071578063a22cb465146102f6578063b88d4fde14610312578063c87b56dd1461032e578063e985e9c51461035e578063f2fde38b1461038e57610121565b806370a0823114610264578063715018a6146102945780638da5cb5b1461029e57806394bf804d146102bc57806395d89b41146102d857610121565b806318160ddd116100f457806318160ddd146101c057806323b872dd146101de57806332cb6b0c146101fa57806342842e0e146102185780636352211e1461023457610121565b806301ffc9a71461012657806306fdde0314610156578063081812fc14610174578063095ea7b3146101a4575b600080fd5b610140600480360381019061013b9190611c1f565b6103aa565b60405161014d9190611c67565b60405180910390f35b61015e61048c565b60405161016b9190611d12565b60405180910390f35b61018e60048036038101906101899190611d6a565b61051e565b60405161019b9190611dd8565b60405180910390f35b6101be60048036038101906101b99190611e1f565b610564565b005b6101c861067b565b6040516101d59190611e6e565b60405180910390f35b6101f860048036038101906101f39190611e89565b610681565b005b6102026106e1565b60405161020f9190611e6e565b60405180910390f35b610232600480360381019061022d9190611e89565b6106e7565b005b61024e60048036038101906102499190611d6a565b610707565b60405161025b9190611dd8565b60405180910390f35b61027e60048036038101906102799190611edc565b61078d565b60405161028b9190611e6e565b60405180910390f35b61029c610844565b005b6102a6610858565b6040516102b39190611dd8565b60405180910390f35b6102d660048036038101906102d19190611f09565b610881565b005b6102e0610a1a565b6040516102ed9190611d12565b60405180910390f35b610310600480360381019061030b9190611f75565b610aac565b005b61032c600480360381019061032791906120ea565b610ac2565b005b61034860048036038101906103439190611d6a565b610b24565b6040516103559190611d12565b60405180910390f35b6103786004803603810190610373919061216d565b610b8c565b6040516103859190611c67565b60405180910390f35b6103a860048036038101906103a39190611edc565b610c20565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061047557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610485575061048482610ca3565b5b9050919050565b60606001805461049b906121dc565b80601f01602080910402602001604051908101604052809291908181526020018280546104c7906121dc565b80156105145780601f106104e957610100808354040283529160200191610514565b820191906000526020600020905b8154815290600101906020018083116104f757829003601f168201915b5050505050905090565b600061052982610d0d565b6005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061056f82610707565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d69061227f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105fe610d58565b73ffffffffffffffffffffffffffffffffffffffff16148061062d575061062c81610627610d58565b610b8c565b5b61066c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066390612311565b60405180910390fd5b6106768383610d60565b505050565b60075481565b61069261068c610d58565b82610e19565b6106d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c8906123a3565b60405180910390fd5b6106dc838383610eae565b505050565b6103e881565b61070283838360405180602001604052806000815250610ac2565b505050565b600080610713836111a7565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610784576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077b9061240f565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f4906124a1565b60405180910390fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61084c6111e4565b6108566000611262565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6108896111e4565b6103e8600754106108cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c690612533565b60405180910390fd5b60008211610912576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610909906125c5565b60405180910390fd5b6103e8826007546109239190612614565b1115610964576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095b90612694565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ca90612726565b60405180910390fd5b60005b82811015610a15576109ea82600754611326565b600760008154809291906109fd90612746565b91905055508080610a0d90612746565b9150506109d6565b505050565b606060028054610a29906121dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610a55906121dc565b8015610aa25780601f10610a7757610100808354040283529160200191610aa2565b820191906000526020600020905b815481529060010190602001808311610a8557829003601f168201915b5050505050905090565b610abe610ab7610d58565b8383611344565b5050565b610ad3610acd610d58565b83610e19565b610b12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b09906123a3565b60405180910390fd5b610b1e848484846114b0565b50505050565b6060610b2f82610d0d565b6000610b3961150c565b90506000815111610b595760405180602001604052806000815250610b84565b80610b6384611523565b604051602001610b749291906127ca565b6040516020818303038152906040525b915050919050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610c286111e4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8e90612860565b60405180910390fd5b610ca081611262565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610d16816115f1565b610d55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4c9061240f565b60405180910390fd5b50565b600033905090565b816005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610dd383610707565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610e2583610707565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610e675750610e668185610b8c565b5b80610ea557508373ffffffffffffffffffffffffffffffffffffffff16610e8d8461051e565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610ece82610707565b73ffffffffffffffffffffffffffffffffffffffff1614610f24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1b906128f2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8a90612984565b60405180910390fd5b610fa08383836001611632565b8273ffffffffffffffffffffffffffffffffffffffff16610fc082610707565b73ffffffffffffffffffffffffffffffffffffffff1614611016576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100d906128f2565b60405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46111a28383836001611638565b505050565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6111ec610d58565b73ffffffffffffffffffffffffffffffffffffffff1661120a610858565b73ffffffffffffffffffffffffffffffffffffffff1614611260576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611257906129f0565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61134082826040518060200160405280600081525061163e565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036113b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a990612a5c565b60405180910390fd5b80600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516114a39190611c67565b60405180910390a3505050565b6114bb848484610eae565b6114c784848484611699565b611506576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114fd90612aee565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000600161153284611820565b01905060008167ffffffffffffffff81111561155157611550611fbf565b5b6040519080825280601f01601f1916602001820160405280156115835781602001600182028036833780820191505090505b509050600082602001820190505b6001156115e6578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816115da576115d9612b0e565b5b04945060008503611591575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16611613836111a7565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b6116488383611973565b6116556000848484611699565b611694576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168b90612aee565b60405180910390fd5b505050565b60006116ba8473ffffffffffffffffffffffffffffffffffffffff16611b90565b15611813578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026116e3610d58565b8786866040518563ffffffff1660e01b81526004016117059493929190612b92565b6020604051808303816000875af192505050801561174157506040513d601f19601f8201168201806040525081019061173e9190612bf3565b60015b6117c3573d8060008114611771576040519150601f19603f3d011682016040523d82523d6000602084013e611776565b606091505b5060008151036117bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117b290612aee565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611818565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061187e577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161187457611873612b0e565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106118bb576d04ee2d6d415b85acef810000000083816118b1576118b0612b0e565b5b0492506020810190505b662386f26fc1000083106118ea57662386f26fc1000083816118e0576118df612b0e565b5b0492506010810190505b6305f5e1008310611913576305f5e100838161190957611908612b0e565b5b0492506008810190505b612710831061193857612710838161192e5761192d612b0e565b5b0492506004810190505b6064831061195b576064838161195157611950612b0e565b5b0492506002810190505b600a831061196a576001810190505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036119e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119d990612c6c565b60405180910390fd5b6119eb816115f1565b15611a2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a2290612cd8565b60405180910390fd5b611a39600083836001611632565b611a42816115f1565b15611a82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a7990612cd8565b60405180910390fd5b6001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611b8c600083836001611638565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611bfc81611bc7565b8114611c0757600080fd5b50565b600081359050611c1981611bf3565b92915050565b600060208284031215611c3557611c34611bbd565b5b6000611c4384828501611c0a565b91505092915050565b60008115159050919050565b611c6181611c4c565b82525050565b6000602082019050611c7c6000830184611c58565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611cbc578082015181840152602081019050611ca1565b60008484015250505050565b6000601f19601f8301169050919050565b6000611ce482611c82565b611cee8185611c8d565b9350611cfe818560208601611c9e565b611d0781611cc8565b840191505092915050565b60006020820190508181036000830152611d2c8184611cd9565b905092915050565b6000819050919050565b611d4781611d34565b8114611d5257600080fd5b50565b600081359050611d6481611d3e565b92915050565b600060208284031215611d8057611d7f611bbd565b5b6000611d8e84828501611d55565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611dc282611d97565b9050919050565b611dd281611db7565b82525050565b6000602082019050611ded6000830184611dc9565b92915050565b611dfc81611db7565b8114611e0757600080fd5b50565b600081359050611e1981611df3565b92915050565b60008060408385031215611e3657611e35611bbd565b5b6000611e4485828601611e0a565b9250506020611e5585828601611d55565b9150509250929050565b611e6881611d34565b82525050565b6000602082019050611e836000830184611e5f565b92915050565b600080600060608486031215611ea257611ea1611bbd565b5b6000611eb086828701611e0a565b9350506020611ec186828701611e0a565b9250506040611ed286828701611d55565b9150509250925092565b600060208284031215611ef257611ef1611bbd565b5b6000611f0084828501611e0a565b91505092915050565b60008060408385031215611f2057611f1f611bbd565b5b6000611f2e85828601611d55565b9250506020611f3f85828601611e0a565b9150509250929050565b611f5281611c4c565b8114611f5d57600080fd5b50565b600081359050611f6f81611f49565b92915050565b60008060408385031215611f8c57611f8b611bbd565b5b6000611f9a85828601611e0a565b9250506020611fab85828601611f60565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ff782611cc8565b810181811067ffffffffffffffff8211171561201657612015611fbf565b5b80604052505050565b6000612029611bb3565b90506120358282611fee565b919050565b600067ffffffffffffffff82111561205557612054611fbf565b5b61205e82611cc8565b9050602081019050919050565b82818337600083830152505050565b600061208d6120888461203a565b61201f565b9050828152602081018484840111156120a9576120a8611fba565b5b6120b484828561206b565b509392505050565b600082601f8301126120d1576120d0611fb5565b5b81356120e184826020860161207a565b91505092915050565b6000806000806080858703121561210457612103611bbd565b5b600061211287828801611e0a565b945050602061212387828801611e0a565b935050604061213487828801611d55565b925050606085013567ffffffffffffffff81111561215557612154611bc2565b5b612161878288016120bc565b91505092959194509250565b6000806040838503121561218457612183611bbd565b5b600061219285828601611e0a565b92505060206121a385828601611e0a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806121f457607f821691505b602082108103612207576122066121ad565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612269602183611c8d565b91506122748261220d565b604082019050919050565b600060208201905081810360008301526122988161225c565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b60006122fb603d83611c8d565b91506123068261229f565b604082019050919050565b6000602082019050818103600083015261232a816122ee565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b600061238d602d83611c8d565b915061239882612331565b604082019050919050565b600060208201905081810360008301526123bc81612380565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006123f9601883611c8d565b9150612404826123c3565b602082019050919050565b60006020820190508181036000830152612428816123ec565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061248b602983611c8d565b91506124968261242f565b604082019050919050565b600060208201905081810360008301526124ba8161247e565b9050919050565b7f44656661756c744e46543a3a6d696e743a204d6178696d756d20737570706c7960008201527f20697320726561636865642e0000000000000000000000000000000000000000602082015250565b600061251d602c83611c8d565b9150612528826124c1565b604082019050919050565b6000602082019050818103600083015261254c81612510565b9050919050565b7f44656661756c744e46543a3a6d696e743a205175616e746974792063616e6e6f60008201527f74206265207a65726f2e00000000000000000000000000000000000000000000602082015250565b60006125af602a83611c8d565b91506125ba82612553565b604082019050919050565b600060208201905081810360008301526125de816125a2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061261f82611d34565b915061262a83611d34565b9250828201905080821115612642576126416125e5565b5b92915050565b7f44656661756c744e46543a3a6d696e743a20536f6c64206f75742e0000000000600082015250565b600061267e601b83611c8d565b915061268982612648565b602082019050919050565b600060208201905081810360008301526126ad81612671565b9050919050565b7f44656661756c744e46543a3a6d696e743a20526563656976657220616464726560008201527f73732063616e206e6f74206265207a65726f2e00000000000000000000000000602082015250565b6000612710603383611c8d565b915061271b826126b4565b604082019050919050565b6000602082019050818103600083015261273f81612703565b9050919050565b600061275182611d34565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612783576127826125e5565b5b600182019050919050565b600081905092915050565b60006127a482611c82565b6127ae818561278e565b93506127be818560208601611c9e565b80840191505092915050565b60006127d68285612799565b91506127e28284612799565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061284a602683611c8d565b9150612855826127ee565b604082019050919050565b600060208201905081810360008301526128798161283d565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006128dc602583611c8d565b91506128e782612880565b604082019050919050565b6000602082019050818103600083015261290b816128cf565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061296e602483611c8d565b915061297982612912565b604082019050919050565b6000602082019050818103600083015261299d81612961565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006129da602083611c8d565b91506129e5826129a4565b602082019050919050565b60006020820190508181036000830152612a09816129cd565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612a46601983611c8d565b9150612a5182612a10565b602082019050919050565b60006020820190508181036000830152612a7581612a39565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612ad8603283611c8d565b9150612ae382612a7c565b604082019050919050565b60006020820190508181036000830152612b0781612acb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600081519050919050565b600082825260208201905092915050565b6000612b6482612b3d565b612b6e8185612b48565b9350612b7e818560208601611c9e565b612b8781611cc8565b840191505092915050565b6000608082019050612ba76000830187611dc9565b612bb46020830186611dc9565b612bc16040830185611e5f565b8181036060830152612bd38184612b59565b905095945050505050565b600081519050612bed81611bf3565b92915050565b600060208284031215612c0957612c08611bbd565b5b6000612c1784828501612bde565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612c56602083611c8d565b9150612c6182612c20565b602082019050919050565b60006020820190508181036000830152612c8581612c49565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612cc2601c83611c8d565b9150612ccd82612c8c565b602082019050919050565b60006020820190508181036000830152612cf181612cb5565b905091905056fea2646970667358221220623938c7378ac971daa597e459e6da3e80f8c2b3dfce712d91bc54fc4ebe833f64736f6c63430008130033";

type DefaultNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DefaultNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DefaultNFT__factory extends ContractFactory {
  constructor(...args: DefaultNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DefaultNFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DefaultNFT__factory {
    return super.connect(runner) as DefaultNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DefaultNFTInterface {
    return new Interface(_abi) as DefaultNFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DefaultNFT {
    return new Contract(address, _abi, runner) as unknown as DefaultNFT;
  }
}
