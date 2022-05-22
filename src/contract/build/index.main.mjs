// Automatically generated with Reach 0.1.10 (2604daf0)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (2604daf0)';
export const _backendVersion = 16;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  
  return {
    infos: {
      },
    views: {
      1: [],
      2: [ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Organizer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Organizer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Organizer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v90 = stdlib.protect(ctc0, interact.rewardToken, 'for Organizer\'s interact field rewardToken');
  const v91 = stdlib.protect(ctc0, interact.ticket, 'for Organizer\'s interact field ticket');
  const v92 = stdlib.protect(ctc1, interact.ticketFee, 'for Organizer\'s interact field ticketFee');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v30, from: v95 } = txn1;
  ;
  const v102 = stdlib.tokenEq(v91, v90);
  const v103 = v102 ? false : true;
  stdlib.assert(v103, {
    at: './index.rsh:51:11:application',
    fs: ['at ./index.rsh:43:17:application call to [unknown function] (defined at: ./index.rsh:43:21:function exp)'],
    msg: null,
    who: 'Organizer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v91, v92, v90],
    evt_cnt: 3,
    funcNum: 1,
    lct: v97,
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v105, v106, v107], secs: v109, time: v108, didSend: v49, from: v104 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v105
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v107
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v105, v106, v107], secs: v109, time: v108, didSend: v49, from: v104 } = txn2;
  const v110 = stdlib.tokenEq(v105, v107);
  const v111 = v110 ? false : true;
  stdlib.assert(v111, {
    at: './index.rsh:55:13:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Organizer'
    });
  ;
  ;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v104, v105, v107],
    evt_cnt: 0,
    funcNum: 2,
    lct: v108,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v128, time: v127, didSend: v54, from: v126 } = txn3;
      
      ;
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v107
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v105
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v128, time: v127, didSend: v54, from: v126 } = txn3;
  ;
  const v129 = stdlib.addressEq(v104, v126);
  stdlib.assert(v129, {
    at: './index.rsh:57:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Organizer'
    });
  stdlib.protect(ctc2, await interact.ready(), {
    at: './index.rsh:58:27:application',
    fs: ['at ./index.rsh:58:27:application call to [unknown function] (defined at: ./index.rsh:58:27:function exp)', 'at ./index.rsh:58:27:application call to "liftedInteract" (defined at: ./index.rsh:58:27:application)'],
    msg: 'ready',
    who: 'Organizer'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Platform(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Platform expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Platform expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Token;
  
  
  const v89 = stdlib.protect(ctc0, interact.takePlatformFee, 'for Platform\'s interact field takePlatformFee');
  
  const txn1 = await (ctc.sendrecv({
    args: [v89],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:39:21:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v96], secs: v98, time: v97, didSend: v30, from: v95 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v30, from: v95 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.ready(), {
    at: './index.rsh:40:35:application',
    fs: ['at ./index.rsh:40:35:application call to [unknown function] (defined at: ./index.rsh:40:35:function exp)', 'at ./index.rsh:40:35:application call to "liftedInteract" (defined at: ./index.rsh:40:35:application)'],
    msg: 'ready',
    who: 'Platform'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc2, ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v105, v106, v107], secs: v109, time: v108, didSend: v49, from: v104 } = txn2;
  const v110 = stdlib.tokenEq(v105, v107);
  const v111 = v110 ? false : true;
  stdlib.assert(v111, {
    at: './index.rsh:55:13:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Platform'
    });
  ;
  ;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v128, time: v127, didSend: v54, from: v126 } = txn3;
  ;
  const v129 = stdlib.addressEq(v104, v126);
  stdlib.assert(v129, {
    at: './index.rsh:57:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Platform'
    });
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAGAAECBKCNBggmAgABACI1ADEYQQGcKGRJIls1ASEFWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAA7UkkDEAAXiQSRCQ0ARJENARJIhJMNAISEUQpZDUDgARBsUBNsDQDVwAgMQASRLEisgEishIlshAyCbIVMgqyFDQDgShbshGzsSKyASKyEiWyEDIJshUyCrIUNAOBIFuyEbNCALpIIzQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEFWzX+gRBbNf2ABM35pJQ0/xZQNP4WUDT9FlCwNP80/RNEIQSIANGxIrIBIrISJbIQMgqyFDT/shGzIQSIALmxIrIBIrISJbIQMgqyFDT9shGzMQA0/xZQNP0WUClLAVcAMGdIJDUBMgY1AkIATUghBIgAhCI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v105",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v107",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v105",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v107",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610a9d380380610a9d8339810160408190526100229161017c565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a161007c341560076100ba565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100b29260029201906100e3565b505050610255565b816100df5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100ef9061021a565b90600052602060002090601f0160209004810192826101115760008555610157565b82601f1061012a57805160ff1916838001178555610157565b82800160010185558215610157579182015b8281111561015757825182559160200191906001019061013c565b50610163929150610167565b5090565b5b808211156101635760008155600101610168565b600081830360408082121561019057600080fd5b80518082016001600160401b0380821183831017156101bf57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101d857600080fd5b83519450602085019150848210818311171561020457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061022e57607f821691505b6020821081141561024f57634e487b7160e01b600052602260045260246000fd5b50919050565b610839806102646000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780637eea518c14610078578063832307571461008b578063ab53f2c6146100a0578063fafdbe3d146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046105cf565b6100d6565b34801561009757600080fd5b50600154610065565b3480156100ac57600080fd5b506100b561021c565b60405161006f9291906105e7565b6100526100d1366004610644565b6102b9565b6100e6600260005414600e6104d4565b610100813515806100f957506001548235145b600f6104d4565b60008080556002805461011290610656565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610656565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906106a0565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516101d692919061072e565b60405180910390a16101ea3415600c6104d4565b8051610202906001600160a01b03163314600d6104d4565b60008080556001819055610218906002906104f9565b5050565b60006060600054600280805461023190610656565b80601f016020809104026020016040519081016040528092919081815260200182805461025d90610656565b80156102aa5780601f1061027f576101008083540402835291602001916102aa565b820191906000526020600020905b81548152906001019060200180831161028d57829003601f168201915b50505050509050915091509091565b6102c9600160005414600a6104d4565b6102e3813515806102dc57506001548235145b600b6104d4565b6000808055600280546102f590610656565b80601f016020809104026020016040519081016040528092919081815260200182805461032190610656565b801561036e5780601f106103435761010080835404028352916020019161036e565b820191906000526020600020905b81548152906001019060200180831161035157829003601f168201915b50505050508060200190518101906103869190610766565b90507fc5f5e4220336a9f408ee8454de2bd4b61df0519879deb1297f117c38e34a4ff933836040516103b992919061078a565b60405180910390a161040c6103d460808401606085016107e6565b6001600160a01b03166103ed60408501602086016107e6565b6001600160a01b031614610402576001610405565b60005b60086104d4565b610418341560096104d4565b604080516060810182526000808252602082018190529181019190915233815261044860408401602085016107e6565b6001600160a01b0316602082015261046660808401606085016107e6565b6001600160a01b03908116604083810191825260026000554360015580518451841660208083019190915285015184169181019190915290519091166060820152608001604051602081830303815290604052600290805190602001906104ce929190610536565b50505050565b816102185760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461050590610656565b6000825580601f10610515575050565b601f01602090049060005260206000209081019061053391906105ba565b50565b82805461054290610656565b90600052602060002090601f01602090048101928261056457600085556105aa565b82601f1061057d57805160ff19168380011785556105aa565b828001600101855582156105aa579182015b828111156105aa57825182559160200191906001019061058f565b506105b69291506105ba565b5090565b5b808211156105b657600081556001016105bb565b6000604082840312156105e157600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561061b578581018301518582016060015282016105ff565b8181111561062d576000606083870101525b50601f01601f191692909201606001949350505050565b6000608082840312156105e157600080fd5b600181811c9082168061066a57607f821691505b602082108114156105e157634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461053357600080fd5b6000606082840312156106b257600080fd5b6040516060810181811067ffffffffffffffff821117156106e357634e487b7160e01b600052604160045260246000fd5b60405282516106f18161068b565b815260208301516107018161068b565b602082015260408301516107148161068b565b60408201529392505050565b801515811461053357600080fd5b6001600160a01b03831681528135602080830191909152606082019083013561075681610720565b8015156040840152509392505050565b60006020828403121561077857600080fd5b815161078381610720565b9392505050565b6001600160a01b038381168252823560208084019190915260a0830191908401356107b48161068b565b8181166040850152506040840135606084015260608401356107d58161068b565b818116608085015250509392505050565b6000602082840312156107f857600080fd5b81356107838161068b56fea26469706673582212209fe5b3ec48de04f37c730247cf558e539fc272c68a1fee494fc11420f0d0be6a64736f6c634300080c0033`,
  BytecodeLen: 2717,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:56:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:60:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Organizer": Organizer,
  "Platform": Platform
  };
export const _APIs = {
  };
