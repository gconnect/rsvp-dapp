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
  
  return {
    infos: {
      },
    views: {
      1: []
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  
  
  const v87 = stdlib.protect(ctc0, interact.deadline, 'for Organizer\'s interact field deadline');
  const v88 = stdlib.protect(ctc1, interact.rewardToken, 'for Organizer\'s interact field rewardToken');
  const v89 = stdlib.protect(ctc1, interact.ticket, 'for Organizer\'s interact field ticket');
  const v90 = stdlib.protect(ctc0, interact.ticketFee, 'for Organizer\'s interact field ticketFee');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v94], secs: v96, time: v95, didSend: v31, from: v93 } = txn1;
  ;
  const v100 = stdlib.tokenEq(v89, v88);
  const v101 = v100 ? false : true;
  stdlib.assert(v101, {
    at: './index.rsh:60:11:application',
    fs: ['at ./index.rsh:55:17:application call to [unknown function] (defined at: ./index.rsh:55:21:function exp)'],
    msg: null,
    who: 'Organizer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v89, v90, v88, v87],
    evt_cnt: 4,
    funcNum: 1,
    lct: v95,
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v103, v104, v105, v106], secs: v108, time: v107, didSend: v51, from: v102 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v103
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v105
        });
      ;
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v105
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v103
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
    tys: [ctc1, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v103, v104, v105, v106], secs: v108, time: v107, didSend: v51, from: v102 } = txn2;
  const v109 = stdlib.tokenEq(v103, v105);
  const v110 = v109 ? false : true;
  stdlib.assert(v110, {
    at: './index.rsh:63:13:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Organizer'
    });
  ;
  ;
  ;
  stdlib.protect(ctc2, await interact.ready(), {
    at: './index.rsh:65:27:application',
    fs: ['at ./index.rsh:65:27:application call to [unknown function] (defined at: ./index.rsh:65:27:function exp)', 'at ./index.rsh:65:27:application call to "liftedInteract" (defined at: ./index.rsh:65:27:application)'],
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
  
  
  const v86 = stdlib.protect(ctc0, interact.takePlatformFee, 'for Platform\'s interact field takePlatformFee');
  
  const txn1 = await (ctc.sendrecv({
    args: [v86],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:51:21:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v94], secs: v96, time: v95, didSend: v31, from: v93 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v94], secs: v96, time: v95, didSend: v31, from: v93 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.ready(), {
    at: './index.rsh:52:35:application',
    fs: ['at ./index.rsh:52:35:application call to [unknown function] (defined at: ./index.rsh:52:35:function exp)', 'at ./index.rsh:52:35:application call to "liftedInteract" (defined at: ./index.rsh:52:35:application)'],
    msg: 'ready',
    who: 'Platform'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 1,
    out_tys: [ctc2, ctc0, ctc2, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v103, v104, v105, v106], secs: v108, time: v107, didSend: v51, from: v102 } = txn2;
  const v109 = stdlib.tokenEq(v103, v105);
  const v110 = v109 ? false : true;
  stdlib.assert(v110, {
    at: './index.rsh:63:13:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Platform'
    });
  ;
  ;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAFAAEEoI0GCCYBACI1ADEYQQFVKGRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAApyMSRCM0ARJENARJIhJMNAISEURJNQVJSiJbNf8hBFs1/oEQWzX9gRhbNfyABKgYPKg0/xZQNP4WUDT9FlA0/BZQsDT/NP0TRCWIAOSxIrIBIrISJLIQMgqyFDT/shGzJYgAzbEisgEishIkshAyCrIUNP2yEbOxIrIBIrISJLIQMgmyFTIKshQ0/bIRs7EisgEishIkshAyCbIVMgqyFDT/shGzQgAwSCWIAIQiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
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
                "name": "v94",
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
                "name": "v94",
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
                "name": "v103",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v104",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v105",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                "name": "v103",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v104",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v105",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161074a38038061074a8339810160408190526100229161017c565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a161007c341560076100ba565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100b29260029201906100e3565b505050610255565b816100df5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100ef9061021a565b90600052602060002090601f0160209004810192826101115760008555610157565b82601f1061012a57805160ff1916838001178555610157565b82800160010185558215610157579182015b8281111561015757825182559160200191906001019061013c565b50610163929150610167565b5090565b5b808211156101635760008155600101610168565b600081830360408082121561019057600080fd5b80518082016001600160401b0380821183831017156101bf57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101d857600080fd5b83519450602085019150848210818311171561020457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061022e57607f821691505b6020821081141561024f57634e487b7160e01b600052602260045260246000fd5b50919050565b6104e6806102646000396000f3fe6080604052600436106100405760003560e01c80631a2401f8146100495780631e93b0f11461005c5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b610047610057366004610349565b6100b8565b34801561006857600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008c57600080fd5b5060015461006d565b3480156100a157600080fd5b506100aa610231565b604051610077929190610361565b6100c8600160005414600a6102ce565b6100e2813515806100db57506001548235145b600b6102ce565b6000808055600280546100f4906103be565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103be565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103f3565b90507f590ab81e56d5e5af57796f6ae3f43019b91bd3eb1613b81a7b1ede7387a6c6d033836040516101b8929190610438565b60405180910390a161020b6101d36080840160608501610495565b6001600160a01b03166101ec6040850160208601610495565b6001600160a01b031614610201576001610204565b60005b60086102ce565b610217341560096102ce565b6000808055600181905561022d906002906102f3565b5050565b600060606000546002808054610246906103be565b80601f0160208091040260200160405190810160405280929190818152602001828054610272906103be565b80156102bf5780601f10610294576101008083540402835291602001916102bf565b820191906000526020600020905b8154815290600101906020018083116102a257829003601f168201915b50505050509050915091509091565b8161022d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102ff906103be565b6000825580601f1061030f575050565b601f01602090049060005260206000209081019061032d9190610330565b50565b5b808211156103455760008155600101610331565b5090565b600060a0828403121561035b57600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561039557858101830151858201606001528201610379565b818111156103a7576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103d257607f821691505b6020821081141561035b57634e487b7160e01b600052602260045260246000fd5b60006020828403121561040557600080fd5b8151801515811461041557600080fd5b9392505050565b80356001600160a01b038116811461043357600080fd5b919050565b600060c08201905060018060a01b03808516835283356020840152806104606020860161041c565b166040840152604084013560608401528061047d6060860161041c565b16608084015250608083013560a08301529392505050565b6000602082840312156104a757600080fd5b6104158261041c56fea264697066735822122028d51efc3f8aee4f91fe57785176b77bb8f9e69f14ca3cc9ed64b17f7bcc080264736f6c634300080c0033`,
  BytecodeLen: 1866,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:53:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:68:11:after expr stmt semicolon',
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
