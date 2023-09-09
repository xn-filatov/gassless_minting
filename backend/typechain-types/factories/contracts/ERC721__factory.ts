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
import type { ERC721, ERC721Interface } from "../../contracts/ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026dd380380620026dd8339818101604052810190620000379190620001f6565b8160009081620000489190620004c6565b5080600190816200005a9190620004c6565b505050620005ad565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000cc8262000081565b810181811067ffffffffffffffff82111715620000ee57620000ed62000092565b5b80604052505050565b60006200010362000063565b9050620001118282620000c1565b919050565b600067ffffffffffffffff82111562000134576200013362000092565b5b6200013f8262000081565b9050602081019050919050565b60005b838110156200016c5780820151818401526020810190506200014f565b60008484015250505050565b60006200018f620001898462000116565b620000f7565b905082815260208101848484011115620001ae57620001ad6200007c565b5b620001bb8482856200014c565b509392505050565b600082601f830112620001db57620001da62000077565b5b8151620001ed84826020860162000178565b91505092915050565b6000806040838503121562000210576200020f6200006d565b5b600083015167ffffffffffffffff81111562000231576200023062000072565b5b6200023f85828601620001c3565b925050602083015167ffffffffffffffff81111562000263576200026262000072565b5b6200027185828601620001c3565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002ce57607f821691505b602082108103620002e457620002e362000286565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200034e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200030f565b6200035a86836200030f565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003a7620003a16200039b8462000372565b6200037c565b62000372565b9050919050565b6000819050919050565b620003c38362000386565b620003db620003d282620003ae565b8484546200031c565b825550505050565b600090565b620003f2620003e3565b620003ff818484620003b8565b505050565b5b8181101562000427576200041b600082620003e8565b60018101905062000405565b5050565b601f82111562000476576200044081620002ea565b6200044b84620002ff565b810160208510156200045b578190505b620004736200046a85620002ff565b83018262000404565b50505b505050565b600082821c905092915050565b60006200049b600019846008026200047b565b1980831691505092915050565b6000620004b6838362000488565b9150826002028217905092915050565b620004d1826200027b565b67ffffffffffffffff811115620004ed57620004ec62000092565b5b620004f98254620002b5565b620005068282856200042b565b600060209050601f8311600181146200053e576000841562000529578287015190505b620005358582620004a8565b865550620005a5565b601f1984166200054e86620002ea565b60005b82811015620005785784890151825560018201915060208501945060208101905062000551565b8683101562000598578489015162000594601f89168262000488565b8355505b6001600288020188555050505b505050505050565b61212080620005bd6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e991906114f4565b6102bc565b6040516100fb919061153c565b60405180910390f35b61010c61039e565b60405161011991906115e7565b60405180910390f35b61013c6004803603810190610137919061163f565b610430565b60405161014991906116ad565b60405180910390f35b61016c600480360381019061016791906116f4565b610476565b005b61018860048036038101906101839190611734565b61058d565b005b6101a4600480360381019061019f9190611734565b6105ed565b005b6101c060048036038101906101bb919061163f565b61060d565b6040516101cd91906116ad565b60405180910390f35b6101f060048036038101906101eb9190611787565b610693565b6040516101fd91906117c3565b60405180910390f35b61020e61074a565b60405161021b91906115e7565b60405180910390f35b61023e6004803603810190610239919061180a565b6107dc565b005b61025a6004803603810190610255919061197f565b6107f2565b005b6102766004803603810190610271919061163f565b610854565b60405161028391906115e7565b60405180910390f35b6102a660048036038101906102a19190611a02565b6108bc565b6040516102b3919061153c565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610397575061039682610950565b5b9050919050565b6060600080546103ad90611a71565b80601f01602080910402602001604051908101604052809291908181526020018280546103d990611a71565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b826109ba565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104818261060d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036104f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e890611b14565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610510610a05565b73ffffffffffffffffffffffffffffffffffffffff16148061053f575061053e81610539610a05565b6108bc565b5b61057e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057590611ba6565b60405180910390fd5b6105888383610a0d565b505050565b61059e610598610a05565b82610ac6565b6105dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d490611c38565b60405180910390fd5b6105e8838383610b5b565b505050565b610608838383604051806020016040528060008152506107f2565b505050565b60008061061983610e54565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361068a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068190611ca4565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610703576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fa90611d36565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461075990611a71565b80601f016020809104026020016040519081016040528092919081815260200182805461078590611a71565b80156107d25780601f106107a7576101008083540402835291602001916107d2565b820191906000526020600020905b8154815290600101906020018083116107b557829003601f168201915b5050505050905090565b6107ee6107e7610a05565b8383610e91565b5050565b6108036107fd610a05565b83610ac6565b610842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083990611c38565b60405180910390fd5b61084e84848484610ffd565b50505050565b606061085f826109ba565b6000610869611059565b9050600081511161088957604051806020016040528060008152506108b4565b8061089384611070565b6040516020016108a4929190611d92565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6109c38161113e565b610a02576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f990611ca4565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610a808361060d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610ad28361060d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610b145750610b1381856108bc565b5b80610b5257508373ffffffffffffffffffffffffffffffffffffffff16610b3a84610430565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610b7b8261060d565b73ffffffffffffffffffffffffffffffffffffffff1614610bd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc890611e28565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3790611eba565b60405180910390fd5b610c4d838383600161117f565b8273ffffffffffffffffffffffffffffffffffffffff16610c6d8261060d565b73ffffffffffffffffffffffffffffffffffffffff1614610cc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cba90611e28565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610e4f8383836001611185565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610eff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef690611f26565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ff0919061153c565b60405180910390a3505050565b611008848484610b5b565b6110148484848461118b565b611053576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104a90611fb8565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000600161107f84611312565b01905060008167ffffffffffffffff81111561109e5761109d611854565b5b6040519080825280601f01601f1916602001820160405280156110d05781602001600182028036833780820191505090505b509050600082602001820190505b600115611133578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161112757611126611fd8565b5b049450600085036110de575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661116083610e54565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b60006111ac8473ffffffffffffffffffffffffffffffffffffffff16611465565b15611305578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026111d5610a05565b8786866040518563ffffffff1660e01b81526004016111f7949392919061205c565b6020604051808303816000875af192505050801561123357506040513d601f19601f8201168201806040525081019061123091906120bd565b60015b6112b5573d8060008114611263576040519150601f19603f3d011682016040523d82523d6000602084013e611268565b606091505b5060008151036112ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a490611fb8565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061130a565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611370577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161136657611365611fd8565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106113ad576d04ee2d6d415b85acef810000000083816113a3576113a2611fd8565b5b0492506020810190505b662386f26fc1000083106113dc57662386f26fc1000083816113d2576113d1611fd8565b5b0492506010810190505b6305f5e1008310611405576305f5e10083816113fb576113fa611fd8565b5b0492506008810190505b612710831061142a5761271083816114205761141f611fd8565b5b0492506004810190505b6064831061144d576064838161144357611442611fd8565b5b0492506002810190505b600a831061145c576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6114d18161149c565b81146114dc57600080fd5b50565b6000813590506114ee816114c8565b92915050565b60006020828403121561150a57611509611492565b5b6000611518848285016114df565b91505092915050565b60008115159050919050565b61153681611521565b82525050565b6000602082019050611551600083018461152d565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611591578082015181840152602081019050611576565b60008484015250505050565b6000601f19601f8301169050919050565b60006115b982611557565b6115c38185611562565b93506115d3818560208601611573565b6115dc8161159d565b840191505092915050565b6000602082019050818103600083015261160181846115ae565b905092915050565b6000819050919050565b61161c81611609565b811461162757600080fd5b50565b60008135905061163981611613565b92915050565b60006020828403121561165557611654611492565b5b60006116638482850161162a565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006116978261166c565b9050919050565b6116a78161168c565b82525050565b60006020820190506116c2600083018461169e565b92915050565b6116d18161168c565b81146116dc57600080fd5b50565b6000813590506116ee816116c8565b92915050565b6000806040838503121561170b5761170a611492565b5b6000611719858286016116df565b925050602061172a8582860161162a565b9150509250929050565b60008060006060848603121561174d5761174c611492565b5b600061175b868287016116df565b935050602061176c868287016116df565b925050604061177d8682870161162a565b9150509250925092565b60006020828403121561179d5761179c611492565b5b60006117ab848285016116df565b91505092915050565b6117bd81611609565b82525050565b60006020820190506117d860008301846117b4565b92915050565b6117e781611521565b81146117f257600080fd5b50565b600081359050611804816117de565b92915050565b6000806040838503121561182157611820611492565b5b600061182f858286016116df565b9250506020611840858286016117f5565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61188c8261159d565b810181811067ffffffffffffffff821117156118ab576118aa611854565b5b80604052505050565b60006118be611488565b90506118ca8282611883565b919050565b600067ffffffffffffffff8211156118ea576118e9611854565b5b6118f38261159d565b9050602081019050919050565b82818337600083830152505050565b600061192261191d846118cf565b6118b4565b90508281526020810184848401111561193e5761193d61184f565b5b611949848285611900565b509392505050565b600082601f8301126119665761196561184a565b5b813561197684826020860161190f565b91505092915050565b6000806000806080858703121561199957611998611492565b5b60006119a7878288016116df565b94505060206119b8878288016116df565b93505060406119c98782880161162a565b925050606085013567ffffffffffffffff8111156119ea576119e9611497565b5b6119f687828801611951565b91505092959194509250565b60008060408385031215611a1957611a18611492565b5b6000611a27858286016116df565b9250506020611a38858286016116df565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611a8957607f821691505b602082108103611a9c57611a9b611a42565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611afe602183611562565b9150611b0982611aa2565b604082019050919050565b60006020820190508181036000830152611b2d81611af1565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000611b90603d83611562565b9150611b9b82611b34565b604082019050919050565b60006020820190508181036000830152611bbf81611b83565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000611c22602d83611562565b9150611c2d82611bc6565b604082019050919050565b60006020820190508181036000830152611c5181611c15565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611c8e601883611562565b9150611c9982611c58565b602082019050919050565b60006020820190508181036000830152611cbd81611c81565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000611d20602983611562565b9150611d2b82611cc4565b604082019050919050565b60006020820190508181036000830152611d4f81611d13565b9050919050565b600081905092915050565b6000611d6c82611557565b611d768185611d56565b9350611d86818560208601611573565b80840191505092915050565b6000611d9e8285611d61565b9150611daa8284611d61565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000611e12602583611562565b9150611e1d82611db6565b604082019050919050565b60006020820190508181036000830152611e4181611e05565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611ea4602483611562565b9150611eaf82611e48565b604082019050919050565b60006020820190508181036000830152611ed381611e97565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000611f10601983611562565b9150611f1b82611eda565b602082019050919050565b60006020820190508181036000830152611f3f81611f03565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000611fa2603283611562565b9150611fad82611f46565b604082019050919050565b60006020820190508181036000830152611fd181611f95565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600081519050919050565b600082825260208201905092915050565b600061202e82612007565b6120388185612012565b9350612048818560208601611573565b6120518161159d565b840191505092915050565b6000608082019050612071600083018761169e565b61207e602083018661169e565b61208b60408301856117b4565b818103606083015261209d8184612023565b905095945050505050565b6000815190506120b7816114c8565b92915050565b6000602082840312156120d3576120d2611492565b5b60006120e1848285016120a8565b9150509291505056fea264697066735822122061410238943d95b438f317693e016333d7d9f5aacb895fbb116197418674107964736f6c63430008130033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override deploy(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<
      ERC721 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC721__factory {
    return super.connect(runner) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC721 {
    return new Contract(address, _abi, runner) as unknown as ERC721;
  }
}
