// Automatically generated with Reach 0.1.10 (31c3a32d)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (31c3a32d)';
export const _backendVersion = 12;

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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    Attendee_iWillGo0_81: ctc3,
    Checkin_theyCame0_81: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v301 = stdlib.protect(ctc2, interact.deadline, 'for Admin\'s interact field deadline');
  const v302 = stdlib.protect(ctc2, interact.price, 'for Admin\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v302, v301],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v306, v307], secs: v309, time: v308, didSend: v29, from: v305 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v306, v307], secs: v309, time: v308, didSend: v29, from: v305 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v305, v306, v307, v308],
    evt_cnt: 0,
    funcNum: 1,
    lct: v308,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v312, time: v311, didSend: v34, from: v310 } = txn2;
      
      ;
      const v313 = stdlib.addressEq(v305, v310);
      ;
      
      const v321 = stdlib.add(v308, v307);
      const v323 = stdlib.checkedBigNumberify('./index.rsh:32:27:decimal', stdlib.UInt_max, '0');
      const v324 = true;
      const v325 = v311;
      
      if (await (async () => {
        
        return v324;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v485 = stdlib.mul(v323, v306);
        sim_r.txns.push({
          amt: v485,
          kind: 'from',
          to: v305,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v312, time: v311, didSend: v34, from: v310 } = txn2;
  ;
  const v313 = stdlib.addressEq(v305, v310);
  stdlib.assert(v313, {
    at: './index.rsh:25:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:26:19:application',
    fs: ['at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)', 'at ./index.rsh:26:19:application call to "liftedInteract" (defined at: ./index.rsh:26:19:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  const v321 = stdlib.add(v308, v307);
  let v323 = stdlib.checkedBigNumberify('./index.rsh:32:27:decimal', stdlib.UInt_max, '0');
  let v324 = true;
  let v325 = v311;
  
  while (await (async () => {
    
    return v324;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: ['time', v321],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v475], secs: v477, time: v476, didSend: v269, from: v474 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v478 = true;
      await txn4.getOutput('Checkin_timesUp', 'v478', ctc7, v478);
      const cv323 = v323;
      const cv324 = false;
      const cv325 = v476;
      
      v323 = cv323;
      v324 = cv324;
      v325 = cv325;
      
      continue;
      }
    else {
      const {data: [v376], secs: v378, time: v377, didSend: v204, from: v375 } = txn3;
      switch (v376[0]) {
        case 'Attendee_iWillGo0_81': {
          const v379 = v376[1];
          undefined /* setApiDetails */;
          ;
          const v389 = true;
          await txn3.getOutput('Attendee_iWillGo', 'v389', ctc7, v389);
          const v395 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v375), null);
          let v396;
          switch (v395[0]) {
            case 'None': {
              const v397 = v395[1];
              v396 = false;
              
              break;
              }
            case 'Some': {
              const v398 = v395[1];
              v396 = true;
              
              break;
              }
            }
          const v399 = v396 ? false : true;
          stdlib.assert(v399, {
            at: './index.rsh:35:14:application',
            fs: ['at ./index.rsh:61:28:application call to "checkIWillGo" (defined at: ./index.rsh:34:34:function exp)', 'at ./index.rsh:59:11:application call to [unknown function] (defined at: ./index.rsh:59:11:function exp)'],
            msg: 'not yet',
            who: 'Admin'
            });
          await stdlib.mapSet(map0, v375, null);
          const v401 = stdlib.add(v323, stdlib.checkedBigNumberify('./index.rsh:38:41:decimal', stdlib.UInt_max, '1'));
          const cv323 = v401;
          const cv324 = true;
          const cv325 = v377;
          
          v323 = cv323;
          v324 = cv324;
          v325 = cv325;
          
          continue;
          break;
          }
        case 'Checkin_theyCame0_81': {
          const v425 = v376[1];
          undefined /* setApiDetails */;
          ;
          const v451 = v425[stdlib.checkedBigNumberify('./index.rsh:63:9:spread', stdlib.UInt_max, '0')];
          const v452 = true;
          await txn3.getOutput('Checkin_theyCame', 'v452', ctc7, v452);
          const v458 = stdlib.addressEq(v375, v305);
          stdlib.assert(v458, {
            at: './index.rsh:42:14:application',
            fs: ['at ./index.rsh:68:29:application call to "checkTheyCame" (defined at: ./index.rsh:41:42:function exp)', 'at ./index.rsh:66:16:application call to [unknown function] (defined at: ./index.rsh:66:16:function exp)'],
            msg: 'you are the boss',
            who: 'Admin'
            });
          const v459 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v451), null);
          let v460;
          switch (v459[0]) {
            case 'None': {
              const v461 = v459[1];
              v460 = false;
              
              break;
              }
            case 'Some': {
              const v462 = v459[1];
              v460 = true;
              
              break;
              }
            }
          stdlib.assert(v460, {
            at: './index.rsh:43:14:application',
            fs: ['at ./index.rsh:68:29:application call to "checkTheyCame" (defined at: ./index.rsh:41:42:function exp)', 'at ./index.rsh:66:16:application call to [unknown function] (defined at: ./index.rsh:66:16:function exp)'],
            msg: 'yep',
            who: 'Admin'
            });
          ;
          await stdlib.mapSet(map0, v451, undefined /* Nothing */);
          const v468 = stdlib.sub(v323, stdlib.checkedBigNumberify('./index.rsh:47:41:decimal', stdlib.UInt_max, '1'));
          const cv323 = v468;
          const cv324 = true;
          const cv325 = v377;
          
          v323 = cv323;
          v324 = cv324;
          v325 = cv325;
          
          continue;
          break;
          }
        }}
    
    }
  const v485 = stdlib.mul(v323, v306);
  ;
  return;
  
  
  
  
  };
export async function Attendee_iWillGo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attendee_iWillGo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attendee_iWillGo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Data({
    Attendee_iWillGo0_81: ctc4,
    Checkin_theyCame0_81: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v305, v306, v321, v323] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v345 = ctc.selfAddress();
  const v347 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:57:10:application call to [unknown function] (defined at: ./index.rsh:57:10:function exp)', 'at ./index.rsh:32:19:application call to "runAttendee_iWillGo0_81" (defined at: ./index.rsh:56:9:function exp)', 'at ./index.rsh:32:19:application call to [unknown function] (defined at: ./index.rsh:32:19:function exp)'],
    msg: 'in',
    who: 'Attendee_iWillGo'
    });
  const v349 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v345), null);
  let v350;
  switch (v349[0]) {
    case 'None': {
      const v351 = v349[1];
      v350 = false;
      
      break;
      }
    case 'Some': {
      const v352 = v349[1];
      v350 = true;
      
      break;
      }
    }
  const v353 = v350 ? false : true;
  stdlib.assert(v353, {
    at: './index.rsh:35:14:application',
    fs: ['at ./index.rsh:57:37:application call to "checkIWillGo" (defined at: ./index.rsh:34:34:function exp)', 'at ./index.rsh:57:10:application call to [unknown function] (defined at: ./index.rsh:57:10:function exp)', 'at ./index.rsh:57:10:application call to [unknown function] (defined at: ./index.rsh:57:10:function exp)', 'at ./index.rsh:32:19:application call to "runAttendee_iWillGo0_81" (defined at: ./index.rsh:56:9:function exp)', 'at ./index.rsh:32:19:application call to [unknown function] (defined at: ./index.rsh:32:19:function exp)'],
    msg: 'not yet',
    who: 'Attendee_iWillGo'
    });
  const v356 = ['Attendee_iWillGo0_81', v347];
  
  const txn1 = await (ctc.sendrecv({
    args: [v305, v306, v321, v323, v356],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v306, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v376], secs: v378, time: v377, didSend: v204, from: v375 } = txn1;
      
      switch (v376[0]) {
        case 'Attendee_iWillGo0_81': {
          const v379 = v376[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Attendee_iWillGo"
            });
          sim_r.txns.push({
            amt: v306,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v389 = true;
          const v390 = await txn1.getOutput('Attendee_iWillGo', 'v389', ctc7, v389);
          
          const v395 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v375), null);
          let v396;
          switch (v395[0]) {
            case 'None': {
              const v397 = v395[1];
              v396 = false;
              
              break;
              }
            case 'Some': {
              const v398 = v395[1];
              v396 = true;
              
              break;
              }
            }
          const v399 = v396 ? false : true;
          ;
          await stdlib.simMapSet(sim_r, 0, v375, null);
          const v401 = stdlib.add(v323, stdlib.checkedBigNumberify('./index.rsh:38:41:decimal', stdlib.UInt_max, '1'));
          const v949 = v401;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Checkin_theyCame0_81': {
          const v425 = v376[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v376], secs: v378, time: v377, didSend: v204, from: v375 } = txn1;
  switch (v376[0]) {
    case 'Attendee_iWillGo0_81': {
      const v379 = v376[1];
      undefined /* setApiDetails */;
      ;
      const v389 = true;
      const v390 = await txn1.getOutput('Attendee_iWillGo', 'v389', ctc7, v389);
      if (v204) {
        stdlib.protect(ctc0, await interact.out(v379, v390), {
          at: './index.rsh:56:10:application',
          fs: ['at ./index.rsh:56:10:application call to [unknown function] (defined at: ./index.rsh:56:10:function exp)', 'at ./index.rsh:60:10:application call to "k" (defined at: ./index.rsh:59:11:function exp)', 'at ./index.rsh:59:11:application call to [unknown function] (defined at: ./index.rsh:59:11:function exp)'],
          msg: 'out',
          who: 'Attendee_iWillGo'
          });
        }
      else {
        }
      
      const v395 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v375), null);
      let v396;
      switch (v395[0]) {
        case 'None': {
          const v397 = v395[1];
          v396 = false;
          
          break;
          }
        case 'Some': {
          const v398 = v395[1];
          v396 = true;
          
          break;
          }
        }
      const v399 = v396 ? false : true;
      stdlib.assert(v399, {
        at: './index.rsh:35:14:application',
        fs: ['at ./index.rsh:61:28:application call to "checkIWillGo" (defined at: ./index.rsh:34:34:function exp)', 'at ./index.rsh:59:11:application call to [unknown function] (defined at: ./index.rsh:59:11:function exp)'],
        msg: 'not yet',
        who: 'Attendee_iWillGo'
        });
      await stdlib.mapSet(map0, v375, null);
      const v401 = stdlib.add(v323, stdlib.checkedBigNumberify('./index.rsh:38:41:decimal', stdlib.UInt_max, '1'));
      const v949 = v401;
      return;
      
      break;
      }
    case 'Checkin_theyCame0_81': {
      const v425 = v376[1];
      return;
      break;
      }
    }
  
  
  };
export async function Checkin_theyCame(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Checkin_theyCame expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Checkin_theyCame expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Attendee_iWillGo0_81: ctc5,
    Checkin_theyCame0_81: ctc4
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v305, v306, v321, v323] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v358 = ctc.selfAddress();
  const v360 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:32:19:application call to "runCheckin_theyCame0_81" (defined at: ./index.rsh:63:9:function exp)', 'at ./index.rsh:32:19:application call to [unknown function] (defined at: ./index.rsh:32:19:function exp)'],
    msg: 'in',
    who: 'Checkin_theyCame'
    });
  const v361 = v360[stdlib.checkedBigNumberify('./index.rsh:63:9:spread', stdlib.UInt_max, '0')];
  const v363 = stdlib.addressEq(v358, v305);
  stdlib.assert(v363, {
    at: './index.rsh:42:14:application',
    fs: ['at ./index.rsh:64:41:application call to "checkTheyCame" (defined at: ./index.rsh:41:42:function exp)', 'at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:32:19:application call to "runCheckin_theyCame0_81" (defined at: ./index.rsh:63:9:function exp)', 'at ./index.rsh:32:19:application call to [unknown function] (defined at: ./index.rsh:32:19:function exp)'],
    msg: 'you are the boss',
    who: 'Checkin_theyCame'
    });
  const v364 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v361), null);
  let v365;
  switch (v364[0]) {
    case 'None': {
      const v366 = v364[1];
      v365 = false;
      
      break;
      }
    case 'Some': {
      const v367 = v364[1];
      v365 = true;
      
      break;
      }
    }
  stdlib.assert(v365, {
    at: './index.rsh:43:14:application',
    fs: ['at ./index.rsh:64:41:application call to "checkTheyCame" (defined at: ./index.rsh:41:42:function exp)', 'at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:13:function exp)', 'at ./index.rsh:32:19:application call to "runCheckin_theyCame0_81" (defined at: ./index.rsh:63:9:function exp)', 'at ./index.rsh:32:19:application call to [unknown function] (defined at: ./index.rsh:32:19:function exp)'],
    msg: 'yep',
    who: 'Checkin_theyCame'
    });
  const v370 = ['Checkin_theyCame0_81', v360];
  
  const txn1 = await (ctc.sendrecv({
    args: [v305, v306, v321, v323, v370],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v376], secs: v378, time: v377, didSend: v204, from: v375 } = txn1;
      
      switch (v376[0]) {
        case 'Attendee_iWillGo0_81': {
          const v379 = v376[1];
          
          break;
          }
        case 'Checkin_theyCame0_81': {
          const v425 = v376[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Checkin_theyCame"
            });
          ;
          const v451 = v425[stdlib.checkedBigNumberify('./index.rsh:63:9:spread', stdlib.UInt_max, '0')];
          const v452 = true;
          const v453 = await txn1.getOutput('Checkin_theyCame', 'v452', ctc7, v452);
          
          const v458 = stdlib.addressEq(v375, v305);
          ;
          const v459 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v451), null);
          let v460;
          switch (v459[0]) {
            case 'None': {
              const v461 = v459[1];
              v460 = false;
              
              break;
              }
            case 'Some': {
              const v462 = v459[1];
              v460 = true;
              
              break;
              }
            }
          ;
          sim_r.txns.push({
            amt: v306,
            kind: 'from',
            to: v451,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v451, undefined /* Nothing */);
          const v468 = stdlib.sub(v323, stdlib.checkedBigNumberify('./index.rsh:47:41:decimal', stdlib.UInt_max, '1'));
          const v961 = v468;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v376], secs: v378, time: v377, didSend: v204, from: v375 } = txn1;
  switch (v376[0]) {
    case 'Attendee_iWillGo0_81': {
      const v379 = v376[1];
      return;
      break;
      }
    case 'Checkin_theyCame0_81': {
      const v425 = v376[1];
      undefined /* setApiDetails */;
      ;
      const v451 = v425[stdlib.checkedBigNumberify('./index.rsh:63:9:spread', stdlib.UInt_max, '0')];
      const v452 = true;
      const v453 = await txn1.getOutput('Checkin_theyCame', 'v452', ctc7, v452);
      if (v204) {
        stdlib.protect(ctc0, await interact.out(v425, v453), {
          at: './index.rsh:63:10:application',
          fs: ['at ./index.rsh:63:10:application call to [unknown function] (defined at: ./index.rsh:63:10:function exp)', 'at ./index.rsh:67:10:application call to "k" (defined at: ./index.rsh:66:16:function exp)', 'at ./index.rsh:66:16:application call to [unknown function] (defined at: ./index.rsh:66:16:function exp)'],
          msg: 'out',
          who: 'Checkin_theyCame'
          });
        }
      else {
        }
      
      const v458 = stdlib.addressEq(v375, v305);
      stdlib.assert(v458, {
        at: './index.rsh:42:14:application',
        fs: ['at ./index.rsh:68:29:application call to "checkTheyCame" (defined at: ./index.rsh:41:42:function exp)', 'at ./index.rsh:66:16:application call to [unknown function] (defined at: ./index.rsh:66:16:function exp)'],
        msg: 'you are the boss',
        who: 'Checkin_theyCame'
        });
      const v459 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v451), null);
      let v460;
      switch (v459[0]) {
        case 'None': {
          const v461 = v459[1];
          v460 = false;
          
          break;
          }
        case 'Some': {
          const v462 = v459[1];
          v460 = true;
          
          break;
          }
        }
      stdlib.assert(v460, {
        at: './index.rsh:43:14:application',
        fs: ['at ./index.rsh:68:29:application call to "checkTheyCame" (defined at: ./index.rsh:41:42:function exp)', 'at ./index.rsh:66:16:application call to [unknown function] (defined at: ./index.rsh:66:16:function exp)'],
        msg: 'yep',
        who: 'Checkin_theyCame'
        });
      ;
      await stdlib.mapSet(map0, v451, undefined /* Nothing */);
      const v468 = stdlib.sub(v323, stdlib.checkedBigNumberify('./index.rsh:47:41:decimal', stdlib.UInt_max, '1'));
      const v961 = v468;
      return;
      
      break;
      }
    }
  
  
  };
export async function Checkin_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Checkin_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Checkin_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v305, v306, v321, v323] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v473 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:71:7:application',
    fs: ['at ./index.rsh:71:7:application call to [unknown function] (defined at: ./index.rsh:71:7:function exp)', 'at ./index.rsh:70:33:application call to [unknown function] (defined at: ./index.rsh:70:33:function exp)'],
    msg: 'in',
    who: 'Checkin_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v305, v306, v321, v323, v473],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v475], secs: v477, time: v476, didSend: v269, from: v474 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Checkin_timesUp"
        });
      ;
      const v478 = true;
      const v479 = await txn1.getOutput('Checkin_timesUp', 'v478', ctc5, v478);
      
      const v968 = stdlib.mul(v323, v306);
      sim_r.txns.push({
        amt: v968,
        kind: 'from',
        to: v305,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v475], secs: v477, time: v476, didSend: v269, from: v474 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v478 = true;
  const v479 = await txn1.getOutput('Checkin_timesUp', 'v478', ctc5, v478);
  stdlib.protect(ctc0, await interact.out(v475, v479), {
    at: './index.rsh:71:7:application',
    fs: ['at ./index.rsh:71:7:application call to [unknown function] (defined at: ./index.rsh:71:7:function exp)', 'at ./index.rsh:72:8:application call to "k" (defined at: ./index.rsh:71:7:function exp)', 'at ./index.rsh:70:33:application call to [unknown function] (defined at: ./index.rsh:70:33:function exp)'],
    msg: 'out',
    who: 'Checkin_timesUp'
    });
  
  const v968 = stdlib.mul(v323, v306);
  ;
  return;
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Attendee_iWillGo()byte`, `Checkin_theyCame(address)byte`, `Checkin_timesUp()byte`],
    pure: [],
    sigs: [`Attendee_iWillGo()byte`, `Checkin_theyCame(address)byte`, `Checkin_timesUp()byte`]
    },
  appApproval: `BiAJAAEEKCAwCLuBwd8Cs/b77wMmAwEAAQEAIjUAMRhBAvYqZEkiWzUBIQZbNQIxGSMSQQAIMQAoKGZCAsQ2GgAXSUEAQSI1BCM1BkkhBwxAAChJIQgMQAARIQgSRCo1/yg0/1AyA1BCAI4hBxJENhoBNf8pNP9QQgB+gYT1l5EBEkQqQgAdNhoCFzUENhoDNhoBF0mBAwxAAUtJJAxAAFckEkQkNAESRDQESSISTDQCEhFEKGRJNQMlWzX/STUFNf6ABNTgGC00/lCwMgY0/w9EgAkAAAAAAAAB3gGwKTUHNANXACA0AyEEWzT/NAMhBVsiMgZCAYpIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+JVs1/SEFWzX8STUFNfuABBSRQNQ0+1CwMgY0/QxENPsiVUAARjT+iAHrgAkAAAAAAAABhQGwKTUHMQCIAcpJNfkiVUAABiI1+kIABiM1+kIAADT6FEQxACgpZjT/NP40/TT8IwgjMgZCAP00+1cBIDX6NPo1+YAJAAAAAAAAAcQBsCk1BzEANP8SRDT5iAF4STX3IlVAAAYiNfhCAAYjNfhCAAA0+ESxIrIBNP6yCCOyEDT5sgezNPkoKGY0/zT+NP00/CMJIzIGQgCcSSMMQABCIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABJqLkXSwNP8xABJENP80AyEEWzQDIQVbNAMlWwgiIzIGQgBUSCI0ARJENARJIhJMNAISEURJNQVJIls1/yEGWzX+gASs0R/DNP8WUDT+FlCwgaCNBogAzTEANP8WUDT+FlAyBhZQKEsBVwA4Z0gjNQEyBjUCQgBjNf81/jX9Nfw1+zX6NP5BACA0+jT7FlA0/BZQNP0WUChLAVcAOGdIJDUBMgY1AkIAMrEisgE0/TT7C7III7IQNPqyB7NCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/w0kxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 56,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
                "name": "v306",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v307",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
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
                "name": "v306",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v307",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
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
        "internalType": "struct T8",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attendee_iWillGo0_81",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_Checkin_theyCame0_81",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v376",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
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
                "internalType": "bool",
                "name": "v475",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v389",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v452",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v478",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Attendee_iWillGo",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Checkin_theyCame",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Checkin_timesUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attendee_iWillGo0_81",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_Checkin_theyCame0_81",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v376",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v475",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200179a3803806200179a833981016040819052620000269162000241565b6000805543600355604080518251815260208084015180518284015201518183015290517f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9181900360600190a162000082341560076200013a565b620000b7604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252436060808801828152600160008190559290925582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200013192919062000164565b505050620002de565b81620001605760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017290620002a1565b90600052602060002090601f016020900481019282620001965760008555620001e1565b82601f10620001b157805160ff1916838001178555620001e1565b82800160010185558215620001e1579182015b82811115620001e1578251825591602001919060010190620001c4565b50620001ef929150620001f3565b5090565b5b80821115620001ef5760008155600101620001f4565b604080519081016001600160401b03811182821017156200023b57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025557600080fd5b6200025f6200020a565b835181526040601f19830112156200027657600080fd5b620002806200020a565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002b657607f821691505b60208210811415620002d857634e487b7160e01b600052602260045260246000fd5b50919050565b6114ac80620002ee6000396000f3fe60806040526004361061008f5760003560e01c80634e634106116100565780634e63410614610132578063832307571461013a578063a98bf2231461014f578063ab53f2c614610162578063af020d631461018557005b80631e93b0f1146100985780632c10a159146100bc5780632fe76ef0146100cf578063310e7397146100f25780633bc5b7bf1461010557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004610fed565b61018d565b6100e26100dd366004611025565b6101c6565b60405190151581526020016100b3565b610096610100366004611042565b61025f565b34801561011157600080fd5b50610125610120366004611025565b610294565b6040516100b39190611088565b6100e26102c0565b34801561014657600080fd5b506001546100a9565b61009661015d366004610fed565b61030c565b34801561016e57600080fd5b50610177610341565b6040516100b39291906110ba565b6100e26103de565b60408051606081018252600080825260208201819052918101919091526101c26101bc368490038401846111c0565b82610461565b5050565b604080516060810182526000808252602082018190529181018290526101ea610e4b565b610219604080516060810190915280600081526000602080830182905260408051918201815291815291015290565b60408051602080820183526001600160a01b0388168252838301919091526001835281518082019092528282528301526102538284610602565b50506020015192915050565b60408051606081018252600080825260208201819052918101919091526101c261028e368490038401846111f6565b82610602565b60408051606081018252600080825260208201819052918101919091526102ba82610a53565b92915050565b604080516060810182526000808252602082018190529181018290526102e4610e95565b60408051602080820190925260008152908201526103028183610b2c565b5060400151919050565b60408051606081018252600080825260208201819052918101919091526101c261033b368490038401846112a2565b82610b2c565b600060606000546002808054610356906112fa565b80601f0160208091040260200160405190810160405280929190818152602001828054610382906112fa565b80156103cf5780601f106103a4576101008083540402835291602001916103cf565b820191906000526020600020905b8154815290600101906020018083116103b257829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101829052610402610e4b565b610431604080516060810190915280600081526000602080830182905260408051918201815291815291015290565b6000602082810182905290825260408051808301909152828152908301526104598284610602565b505051919050565b610471600160005414600a610ceb565b815161048c90158061048557508251600154145b600b610ceb565b60008080556002805461049e906112fa565b80601f01602080910402602001604051908101604052809291908181526020018280546104ca906112fa565b80156105175780601f106104ec57610100808354040283529160200191610517565b820191906000526020600020905b8154815290600101906020018083116104fa57829003601f168201915b505050505080602001905181019061052f91906113ae565b60408051855181526020808701511515908201529192507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a161057d34156008610ceb565b8051610595906001600160a01b031633146009610ceb565b61059d610ebf565b815181516001600160a01b039091169052602080830151825190910152604082015160608301516105ce91906113e0565b815160409081019190915260208083018051600090528051600192019190915251439101526105fc81610d10565b50505050565b6106126004600054146011610ceb565b815161062d90158061062657508251600154145b6012610ceb565b60008080556002805461063f906112fa565b80601f016020809104026020016040519081016040528092919081815260200182805461066b906112fa565b80156106b85780601f1061068d576101008083540402835291602001916106b8565b820191906000526020600020905b81548152906001019060200180831161069b57829003601f168201915b50505050508060200190518101906106d091906113ae565b90506106fd6040805160608101825260008082528251602080820185528282528301529181019190915290565b61070e826040015143106013610ceb565b7f5227d87949acbf5b3bfa920cb03638f9ca88f71fbd0f51227191649eb15e87eb8460405161073d91906113f8565b60405180910390a1600060208501515151600181111561075f5761075f611054565b14156108a45761077682602001513414600c610ceb565b604051600181527f9b99693f78e3a430c20c8f0437dec323f5c09b5bd5c5af4ed8702e72620a7b009060200160405180910390a16001835260006107b933610a53565b5160018111156107cb576107cb611054565b14156107da5760008152610802565b60016107e533610a53565b5160018111156107f7576107f7611054565b141561080257600181525b805161081d90610813576001610816565b60005b600d610ceb565b336000908152600460205260409020805462ff00ff19166001179055610841610ebf565b825181516001600160a01b039091169052602080840151825190910152604080840151825190910152606083015161087b906001906113e0565b602080830180519290925281516001910152514360409091015261089e81610d10565b506105fc565b60016020850151515160018111156108be576108be611054565b14156105fc576020808501515160400151908201526108df3415600e610ceb565b604051600181527fc8b17b9acfce3c64219ec972aa5180635107f7b160bea661e7ac4047bd0dab869060200160405180910390a1600160208401528151610932906001600160a01b03163314600f610ceb565b600060208201515161094390610a53565b51600181111561095557610955611054565b14156109675760006040820152610998565b600160208201515161097890610a53565b51600181111561098a5761098a611054565b141561099857600160408201525b6109a781604001516010610ceb565b60208082015151908301516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109e8573d6000803e3d6000fd5b50602080820151516001600160a01b03166000908152600490915260409020805462ffffff19169055610a19610ebf565b825181516001600160a01b039091169052602080840151825190910152604080840151825190910152606083015161087b90600190611440565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610a9f57610a9f611054565b1415610b1c576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610ae057610ae0611054565b6001811115610af157610af1611054565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610b3c6004600054146015610ceb565b8151610b57901580610b5057508251600154145b6016610ceb565b600080805560028054610b69906112fa565b80601f0160208091040260200160405190810160405280929190818152602001828054610b95906112fa565b8015610be25780601f10610bb757610100808354040283529160200191610be2565b820191906000526020600020905b815481529060010190602001808311610bc557829003601f168201915b5050505050806020019051810190610bfa91906113ae565b9050610c0e81604001514310156017610ceb565b6040805184518152602080860151511515908201527ff0ce61bd733256e13049010befa30f7514f9c0015409b84e04039d1ddbde5020910160405180910390a1610c5a34156014610ceb565b604051600181527f3a8aca8b1b8769649abdebc4bd258dd30ad2e18089aff4f39fdca088b6285dae9060200160405180910390a160016040830152610c9d610ebf565b815181516001600160a01b039091169052602080830151825182015260408084015183518201526060840151828401805191909152805160009301929092529051439101526105fc81610d10565b816101c25760405163100960cb60e01b81526004810182905260240160405180910390fd5b80602001516020015115610de057610d52604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b0316808252825160209081015181840190815284516040908101518186019081528387015151606080880191825260046000554360015583519586019690965292519184019190915251928201929092529051608082015260a00160405160208183030381529060405260029080519060200190610ddb929190610f06565b505050565b8051805160209182015191830151516001600160a01b03909116916108fc91610e099190611457565b6040518115909202916000818181858888f19350505050158015610e31573d6000803e3d6000fd5b5060008080556001819055610e4890600290610f8a565b50565b604051806040016040528060008152602001610e9060408051608081018252600060208083018281528385018390528451918201909452908152606082015290815290565b905290565b604051806040016040528060008152602001610e9060405180602001604052806000151581525090565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b828054610f12906112fa565b90600052602060002090601f016020900481019282610f345760008555610f7a565b82601f10610f4d57805160ff1916838001178555610f7a565b82800160010185558215610f7a579182015b82811115610f7a578251825591602001919060010190610f5f565b50610f86929150610fc0565b5090565b508054610f96906112fa565b6000825580601f10610fa6575050565b601f016020900490600052602060002090810190610e4891905b5b80821115610f865760008155600101610fc1565b600060408284031215610fe757600080fd5b50919050565b600060408284031215610fff57600080fd5b6110098383610fd5565b9392505050565b6001600160a01b0381168114610e4857600080fd5b60006020828403121561103757600080fd5b813561100981611010565b600060808284031215610fe757600080fd5b634e487b7160e01b600052602160045260246000fd5b60028110610e4857634e487b7160e01b600052602160045260246000fd5b815160608201906110988161106a565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b818110156110ee578581018301518582016060015282016110d2565b81811115611100576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff8111828210171561114857634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561114857634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561114857634e487b7160e01b600052604160045260246000fd5b80358015158114610b2757600080fd5b6000604082840312156111d257600080fd5b6111da611117565b823581526111ea602084016111b0565b60208201529392505050565b6000818303608081121561120957600080fd5b611211611117565b833581526060601f198301121561122757600080fd5b61122f61114e565b61123761117f565b60208601356002811061124957600080fd5b8152611257604087016111b0565b60208201526020605f198501121561126e57600080fd5b61127661114e565b9350606086013561128681611010565b8452604081019390935291825260208101919091529392505050565b600081830360408112156112b557600080fd5b6112bd611117565b833581526020601f19830112156112d357600080fd5b6112db61114e565b91506112e9602085016111b0565b825260208101919091529392505050565b600181811c9082168061130e57607f821691505b60208210811415610fe757634e487b7160e01b600052602260045260246000fd5b60006080828403121561134157600080fd5b6040516080810181811067ffffffffffffffff8211171561137257634e487b7160e01b600052604160045260246000fd5b8060405250809150825161138581611010565b808252506020830151602082015260408301516040820152606083015160608201525092915050565b6000608082840312156113c057600080fd5b611009838361132f565b634e487b7160e01b600052601160045260246000fd5b600082198211156113f3576113f36113ca565b500190565b8151815260208201515180516080830191906114138161106a565b8060208501525060208101511515604084015260018060a01b036040820151511660608401525092915050565b600082821015611452576114526113ca565b500390565b6000816000190483118215151615611471576114716113ca565b50029056fea26469706673582212202c3b9a28d12ea475076c61886fe5b6f23a5464cae463f2575860c27b0330799964736f6c634300080c0033`,
  BytecodeLen: 6042,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:24:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:77:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:32:19:after expr stmt semicolon',
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
  "Admin": Admin,
  "Attendee_iWillGo": Attendee_iWillGo,
  "Checkin_theyCame": Checkin_theyCame,
  "Checkin_timesUp": Checkin_timesUp
  };
export const _APIs = {
  Attendee: {
    iWillGo: Attendee_iWillGo
    },
  Checkin: {
    theyCame: Checkin_theyCame,
    timesUp: Checkin_timesUp
    }
  };
