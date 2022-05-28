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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc3, ctc4, ctc0],
      2: [ctc4, ctc0, ctc4, ctc0, ctc1, ctc5, ctc6, ctc7, ctc8, ctc6, ctc0, ctc0, ctc3],
      3: [ctc4, ctc0, ctc1, ctc5, ctc0, ctc0, ctc5, ctc5, ctc3],
      4: [ctc4, ctc1, ctc5, ctc0, ctc0, ctc5, ctc5, ctc3, ctc4],
      5: [ctc4, ctc1, ctc5, ctc0, ctc0, ctc5, ctc5, ctc4, ctc3],
      6: [ctc4, ctc1, ctc5, ctc0, ctc0, ctc5, ctc5, ctc4, ctc3],
      7: [ctc4, ctc5, ctc0, ctc0, ctc5, ctc5, ctc4, ctc3],
      8: [ctc4, ctc5, ctc0, ctc0, ctc5, ctc5, ctc3],
      11: [ctc4, ctc0, ctc1, ctc5, ctc0, ctc0, ctc5, ctc5, ctc3],
      12: [ctc4, ctc1, ctc5, ctc0, ctc0, ctc5, ctc5, ctc3, ctc4],
      13: [ctc4, ctc1, ctc5, ctc0, ctc0, ctc5, ctc5, ctc4, ctc3],
      14: [ctc4, ctc1, ctc5, ctc0, ctc0, ctc5, ctc5, ctc4, ctc3],
      15: [ctc4, ctc5, ctc0, ctc0, ctc5, ctc5, ctc4, ctc3],
      16: [ctc4, ctc5, ctc0, ctc0, ctc5, ctc5, ctc3]
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
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc6 = stdlib.T_Object({
    amt: ctc0,
    metadata: ctc3,
    name: ctc3,
    supply: ctc0,
    symbol: ctc4,
    url: ctc5
    });
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc0, ctc0, ctc2]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  
  const v567 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v568 = [v567, v567, v567];
  const v573 = stdlib.protect(ctc0, interact.deadline, 'for Organizer\'s interact field deadline');
  const v574 = stdlib.protect(ctc0, interact.rewardAmt, 'for Organizer\'s interact field rewardAmt');
  const v575 = stdlib.protect(ctc1, interact.rewardToken, 'for Organizer\'s interact field rewardToken');
  const v576 = stdlib.protect(ctc0, interact.ticketFee, 'for Organizer\'s interact field ticketFee');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v581], secs: v583, time: v582, didSend: v32, from: v580 } = txn1;
  ;
  const v587 = stdlib.protect(ctc2, await interact.isCheckin(), {
    at: './index.rsh:55:54:application',
    fs: ['at ./index.rsh:51:17:application call to [unknown function] (defined at: ./index.rsh:51:21:function exp)'],
    msg: 'isCheckin',
    who: 'Organizer'
    });
  const v588 = stdlib.protect(ctc2, await interact.isTicketSold(), {
    at: './index.rsh:56:56:application',
    fs: ['at ./index.rsh:51:17:application call to [unknown function] (defined at: ./index.rsh:51:21:function exp)'],
    msg: 'isTicketSold',
    who: 'Organizer'
    });
  const v589 = stdlib.protect(ctc6, await interact.getParams(), {
    at: './index.rsh:59:87:application',
    fs: ['at ./index.rsh:51:17:application call to [unknown function] (defined at: ./index.rsh:51:21:function exp)'],
    msg: 'getParams',
    who: 'Organizer'
    });
  const v590 = v589.amt;
  const v591 = v589.metadata;
  const v592 = v589.name;
  const v593 = v589.supply;
  const v594 = v589.symbol;
  const v595 = v589.url;
  stdlib.protect(ctc7, await interact.payPlatformFee(v581), {
    at: './index.rsh:60:39:application',
    fs: ['at ./index.rsh:51:17:application call to [unknown function] (defined at: ./index.rsh:51:21:function exp)'],
    msg: 'payPlatformFee',
    who: 'Organizer'
    });
  const v602 = stdlib.le(v590, v593);
  stdlib.assert(v602, {
    at: './index.rsh:61:11:application',
    fs: ['at ./index.rsh:51:17:application call to [unknown function] (defined at: ./index.rsh:51:21:function exp)'],
    msg: null,
    who: 'Organizer'
    });
  const v603 = stdlib.le(v590, stdlib.UInt_max);
  stdlib.assert(v603, {
    at: './index.rsh:62:11:application',
    fs: ['at ./index.rsh:51:17:application call to [unknown function] (defined at: ./index.rsh:51:21:function exp)'],
    msg: null,
    who: 'Organizer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v568, v580, v581, v576, v573, v574, v587, v588, v575, v592, v594, v595, v591, v593, v590],
    evt_cnt: 12,
    funcNum: 1,
    lct: v582,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc1, ctc3, ctc4, ctc5, ctc3, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:64:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v616], secs: v618, time: v617, didSend: v72, from: v604 } = txn2;
      
      const v619 = v568[stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '0')];
      const v621 = v619[stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '1')];
      const v622 = v619[stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '2')];
      const v623 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v621, v622];
      const v624 = stdlib.Array_set(v568, stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '0'), v623);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v610
        });
      ;
      if (v609) {
        sim_r.isHalt = false;
        }
      else {
        
        const v951 = stdlib.simTokenNew(sim_r, v611, v612, v613, v614, v615, undefined /* Nothing */, getSimTokCtr());
        const v952 = await txn2.getOutput('internal', 'v951', ctc1, v951);
        const v962 = v624[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
        const v964 = v962[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
        const v965 = v962[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
        const v966 = [v615, v964, v965];
        const v967 = stdlib.Array_set(v624, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v966);
        const v969 = v967[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
        const v970 = v969[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
        const v972 = v969[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
        const v973 = [v970, v615, v972];
        const v974 = stdlib.Array_set(v967, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v973);
        const v975 = v974[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
        const v976 = v975[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
        const v977 = v975[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
        const v979 = [v976, v977, false];
        const v980 = stdlib.Array_set(v974, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v979);
        const v981 = stdlib.simTokenNew(sim_r, v611, v612, v613, v614, v615, undefined /* Nothing */, getSimTokCtr());
        const v982 = await txn2.getOutput('internal', 'v981', ctc1, v981);
        const v992 = v980[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
        const v994 = v992[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
        const v995 = v992[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
        const v996 = [v615, v994, v995];
        const v997 = stdlib.Array_set(v980, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v996);
        const v999 = v997[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
        const v1000 = v999[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
        const v1002 = v999[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
        const v1003 = [v1000, v615, v1002];
        const v1004 = stdlib.Array_set(v997, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v1003);
        const v1005 = v1004[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
        const v1006 = v1005[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
        const v1007 = v1005[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
        const v1009 = [v1006, v1007, false];
        const v1010 = stdlib.Array_set(v1004, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v1009);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc8, ctc0, ctc0, ctc0, ctc0, ctc2, ctc2, ctc1, ctc3, ctc4, ctc5, ctc3, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v616], secs: v618, time: v617, didSend: v72, from: v604 } = txn2;
  const v619 = v568[stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '0')];
  const v621 = v619[stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '1')];
  const v622 = v619[stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '2')];
  const v623 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v621, v622];
  const v624 = stdlib.Array_set(v568, stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '0'), v623);
  ;
  ;
  if (v609) {
    const txn3 = await (ctc.sendrecv({
      args: [v580, v581, v604, v605, v608, v610, v611, v612, v613, v614, v615, v616, v624],
      evt_cnt: 0,
      funcNum: 2,
      lct: v617,
      onlyIf: true,
      out_tys: [],
      pay: [v581, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v629, time: v628, didSend: v80, from: v627 } = txn3;
        
        sim_r.txns.push({
          amt: v581,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v580,
          tok: undefined /* Nothing */
          });
        
        const v640 = stdlib.simTokenNew(sim_r, v611, v612, v613, v614, v615, undefined /* Nothing */, getSimTokCtr());
        const v641 = await txn3.getOutput('internal', 'v640', ctc1, v640);
        const v651 = v624[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
        const v653 = v651[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
        const v654 = v651[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
        const v655 = [v615, v653, v654];
        const v656 = stdlib.Array_set(v624, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v655);
        const v658 = v656[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
        const v659 = v658[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
        const v661 = v658[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
        const v662 = [v659, v615, v661];
        const v663 = stdlib.Array_set(v656, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v662);
        const v664 = v663[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
        const v665 = v664[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
        const v666 = v664[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
        const v668 = [v665, v666, false];
        const v669 = stdlib.Array_set(v663, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v668);
        const v670 = stdlib.simTokenNew(sim_r, v611, v612, v613, v614, v615, undefined /* Nothing */, getSimTokCtr());
        const v671 = await txn3.getOutput('internal', 'v670', ctc1, v670);
        const v681 = v669[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
        const v683 = v681[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
        const v684 = v681[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
        const v685 = [v615, v683, v684];
        const v686 = stdlib.Array_set(v669, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v685);
        const v688 = v686[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
        const v689 = v688[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
        const v691 = v688[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
        const v692 = [v689, v615, v691];
        const v693 = stdlib.Array_set(v686, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v692);
        const v694 = v693[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
        const v695 = v694[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
        const v696 = v694[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
        const v698 = [v695, v696, false];
        const v699 = stdlib.Array_set(v693, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v698);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc8, ctc0, ctc8, ctc0, ctc2, ctc1, ctc3, ctc4, ctc5, ctc3, ctc0, ctc0, ctc10],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v629, time: v628, didSend: v80, from: v627 } = txn3;
    ;
    const v632 = stdlib.addressEq(v604, v627);
    stdlib.assert(v632, {
      at: './index.rsh:69:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Organizer'
      });
    ;
    stdlib.protect(ctc7, await interact.ready(), {
      at: './index.rsh:79:27:application',
      fs: ['at ./index.rsh:79:27:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at ./index.rsh:79:27:application call to "liftedInteract" (defined at: ./index.rsh:79:27:application)'],
      msg: 'ready',
      who: 'Organizer'
      });
    
    const v638 = stdlib.le(v616, v615);
    stdlib.assert(v638, {
      at: './index.rsh:80:10:application',
      fs: [],
      msg: null,
      who: 'Organizer'
      });
    const v639 = stdlib.le(v616, stdlib.UInt_max);
    stdlib.assert(v639, {
      at: './index.rsh:81:10:application',
      fs: [],
      msg: null,
      who: 'Organizer'
      });
    const v640 = undefined /* TokenNew */;
    const v641 = await txn3.getOutput('internal', 'v640', ctc1, v640);
    const v642 = [v610];
    const v1259 = v642[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
    const v1263 = stdlib.tokenEq(v641, v1259);
    const v650 = v1263 ? false : true;
    stdlib.assert(v650, {
      at: './index.rsh:84:25:application',
      fs: [],
      msg: 'New token is unique',
      who: 'Organizer'
      });
    const v651 = v624[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v653 = v651[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v654 = v651[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
    const v655 = [v615, v653, v654];
    const v656 = stdlib.Array_set(v624, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v655);
    const v658 = v656[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v659 = v658[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
    const v661 = v658[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
    const v662 = [v659, v615, v661];
    const v663 = stdlib.Array_set(v656, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v662);
    const v664 = v663[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v665 = v664[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
    const v666 = v664[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v668 = [v665, v666, false];
    const v669 = stdlib.Array_set(v663, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v668);
    const v670 = undefined /* TokenNew */;
    const v671 = await txn3.getOutput('internal', 'v670', ctc1, v670);
    const v672 = [v610, v641];
    const v673 = await stdlib.Array_asyncReduce([v672], false, async([v675], v674, v676) => {
      const v677 = stdlib.tokenEq(v671, v675);
      const v679 = v674 ? v674 : v677;
      
      return v679;})
    const v680 = v673 ? false : true;
    stdlib.assert(v680, {
      at: './index.rsh:87:39:application',
      fs: [],
      msg: 'New token is unique',
      who: 'Organizer'
      });
    const v681 = v669[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v683 = v681[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
    const v684 = v681[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v685 = [v615, v683, v684];
    const v686 = stdlib.Array_set(v669, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v685);
    const v688 = v686[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v689 = v688[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
    const v691 = v688[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v692 = [v689, v615, v691];
    const v693 = stdlib.Array_set(v686, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v692);
    const v694 = v693[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v695 = v694[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
    const v696 = v694[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
    const v698 = [v695, v696, false];
    const v699 = stdlib.Array_set(v693, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v698);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v703], secs: v705, time: v704, didSend: v128, from: v702 } = txn4;
    ;
    ;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v714, time: v713, didSend: v137, from: v712 } = txn5;
    ;
    const v715 = stdlib.addressEq(v702, v712);
    stdlib.assert(v715, {
      at: './index.rsh:105:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Organizer'
      });
    const v716 = v699[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
    const v717 = v716[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
    const v721 = stdlib.sub(v717, v616);
    const v724 = v716[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
    const v725 = v716[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
    const v726 = [v721, v724, v725];
    const v727 = stdlib.Array_set(v699, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1'), v726);
    ;
    const txn6 = await (ctc.sendrecv({
      args: [v604, v608, v610, v615, v616, v641, v671, v702, v727],
      evt_cnt: 0,
      funcNum: 5,
      lct: v713,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '0'), [[v616, v641]]],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v732, time: v731, didSend: v153, from: v730 } = txn6;
        
        ;
        const v733 = v727[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
        const v734 = v733[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '0')];
        const v735 = stdlib.add(v734, v616);
        const v738 = v733[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
        const v739 = v733[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '2')];
        const v740 = [v735, v738, v739];
        const v741 = stdlib.Array_set(v727, stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1'), v740);
        sim_r.txns.push({
          amt: v616,
          kind: 'to',
          tok: v641
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc8, ctc2, ctc1, ctc0, ctc0, ctc1, ctc1, ctc8, ctc10],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v732, time: v731, didSend: v153, from: v730 } = txn6;
    ;
    const v733 = v727[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
    const v734 = v733[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '0')];
    const v735 = stdlib.add(v734, v616);
    const v738 = v733[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
    const v739 = v733[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '2')];
    const v740 = [v735, v738, v739];
    const v741 = stdlib.Array_set(v727, stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1'), v740);
    ;
    const v742 = stdlib.addressEq(v604, v730);
    stdlib.assert(v742, {
      at: './index.rsh:109:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Organizer'
      });
    const txn7 = await (ctc.sendrecv({
      args: [v604, v608, v610, v615, v616, v641, v671, v702, v741],
      evt_cnt: 0,
      funcNum: 6,
      lct: v731,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:111:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v745, time: v744, didSend: v158, from: v743 } = txn7;
        
        ;
        if (v608) {
          sim_r.isHalt = false;
          }
        else {
          const v863 = v741[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v864 = v863[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
          const v868 = stdlib.sub(v864, v615);
          const v871 = v863[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v872 = v863[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
          const v873 = [v868, v871, v872];
          const v874 = stdlib.Array_set(v741, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v873);
          const v875 = v874[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v876 = v875[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v877 = stdlib.sub(v876, v615);
          const v879 = v875[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
          const v881 = v875[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
          const v882 = [v879, v877, v881];
          const v883 = stdlib.Array_set(v874, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v882);
          stdlib.simTokenBurn(sim_r, v641, v615);
          const v884 = v883[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
          const v888 = v884[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
          stdlib.simTokenDestroy(sim_r, v641);
          const v891 = v884[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
          const v894 = [v891, v888, true];
          const v895 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v894);
          const v896 = v895[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
          const v897 = v896[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
          stdlib.simTokenBurn(sim_r, v671, v897);
          stdlib.simTokenDestroy(sim_r, v671);
          sim_r.txns.push({
            kind: 'halt',
            tok: v610
            })
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
      tys: [ctc8, ctc2, ctc1, ctc0, ctc0, ctc1, ctc1, ctc8, ctc10],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v745, time: v744, didSend: v158, from: v743 } = txn7;
    ;
    const v746 = stdlib.addressEq(v604, v743);
    stdlib.assert(v746, {
      at: './index.rsh:111:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Organizer'
      });
    if (v608) {
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 7,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v749, time: v748, didSend: v163, from: v747 } = txn8;
      ;
      const v750 = stdlib.addressEq(v702, v747);
      stdlib.assert(v750, {
        at: './index.rsh:116:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Organizer'
        });
      const v751 = v741[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
      const v752 = v751[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
      const v756 = stdlib.sub(v752, v616);
      const v759 = v751[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
      const v760 = v751[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
      const v761 = [v756, v759, v760];
      const v762 = stdlib.Array_set(v741, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2'), v761);
      ;
      const txn9 = await (ctc.sendrecv({
        args: [v604, v610, v615, v616, v641, v671, v762],
        evt_cnt: 0,
        funcNum: 8,
        lct: v748,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '0'), [[v616, v671]]],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v767, time: v766, didSend: v179, from: v765 } = txn9;
          
          ;
          const v768 = v762[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
          const v769 = v768[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '0')];
          const v770 = stdlib.add(v769, v616);
          const v773 = v768[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '1')];
          const v774 = v768[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
          const v775 = [v770, v773, v774];
          const v776 = stdlib.Array_set(v762, stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2'), v775);
          sim_r.txns.push({
            amt: v616,
            kind: 'to',
            tok: v671
            });
          const v778 = v776[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v779 = v778[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
          const v783 = stdlib.sub(v779, v615);
          const v786 = v778[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v787 = v778[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
          const v788 = [v783, v786, v787];
          const v789 = stdlib.Array_set(v776, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v788);
          const v790 = v789[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v791 = v790[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v792 = stdlib.sub(v791, v615);
          const v794 = v790[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
          const v796 = v790[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
          const v797 = [v794, v792, v796];
          const v798 = stdlib.Array_set(v789, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v797);
          stdlib.simTokenBurn(sim_r, v641, v615);
          const v799 = v798[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
          const v803 = v799[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
          stdlib.simTokenDestroy(sim_r, v641);
          const v806 = v799[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
          const v809 = [v806, v803, true];
          const v810 = stdlib.Array_set(v798, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v809);
          const v811 = v810[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
          const v812 = v811[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
          stdlib.simTokenBurn(sim_r, v671, v812);
          stdlib.simTokenDestroy(sim_r, v671);
          sim_r.txns.push({
            kind: 'halt',
            tok: v610
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
        tys: [ctc8, ctc1, ctc0, ctc0, ctc1, ctc1, ctc10],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v767, time: v766, didSend: v179, from: v765 } = txn9;
      ;
      const v768 = v762[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
      const v769 = v768[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '0')];
      const v770 = stdlib.add(v769, v616);
      const v773 = v768[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '1')];
      const v774 = v768[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
      const v775 = [v770, v773, v774];
      const v776 = stdlib.Array_set(v762, stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2'), v775);
      ;
      const v777 = stdlib.addressEq(v604, v765);
      stdlib.assert(v777, {
        at: './index.rsh:119:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Organizer'
        });
      const v778 = v776[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v779 = v778[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v783 = stdlib.sub(v779, v615);
      const v786 = v778[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v787 = v778[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v788 = [v783, v786, v787];
      const v789 = stdlib.Array_set(v776, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v788);
      const v790 = v789[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v791 = v790[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v792 = stdlib.sub(v791, v615);
      const v794 = v790[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v796 = v790[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v797 = [v794, v792, v796];
      const v798 = stdlib.Array_set(v789, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v797);
      undefined /* TokenBurn */;
      const v799 = v798[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      const v803 = v799[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v806 = v799[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
      const v809 = [v806, v803, true];
      const v810 = stdlib.Array_set(v798, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v809);
      const v811 = v810[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
      const v812 = v811[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      
      
      
      
      }
    else {
      const v863 = v741[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v864 = v863[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v868 = stdlib.sub(v864, v615);
      const v871 = v863[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v872 = v863[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v873 = [v868, v871, v872];
      const v874 = stdlib.Array_set(v741, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v873);
      const v875 = v874[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v876 = v875[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v877 = stdlib.sub(v876, v615);
      const v879 = v875[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v881 = v875[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v882 = [v879, v877, v881];
      const v883 = stdlib.Array_set(v874, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v882);
      undefined /* TokenBurn */;
      const v884 = v883[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      const v888 = v884[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v891 = v884[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
      const v894 = [v891, v888, true];
      const v895 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v894);
      const v896 = v895[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
      const v897 = v896[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      }
    
    
    
    
    
    
    
    
    
    }
  else {
    stdlib.protect(ctc7, await interact.ready(), {
      at: './index.rsh:79:27:application',
      fs: ['at ./index.rsh:79:27:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at ./index.rsh:79:27:application call to "liftedInteract" (defined at: ./index.rsh:79:27:application)'],
      msg: 'ready',
      who: 'Organizer'
      });
    
    const v949 = stdlib.le(v616, v615);
    stdlib.assert(v949, {
      at: './index.rsh:80:10:application',
      fs: [],
      msg: null,
      who: 'Organizer'
      });
    const v950 = stdlib.le(v616, stdlib.UInt_max);
    stdlib.assert(v950, {
      at: './index.rsh:81:10:application',
      fs: [],
      msg: null,
      who: 'Organizer'
      });
    const v951 = undefined /* TokenNew */;
    const v952 = await txn2.getOutput('internal', 'v951', ctc1, v951);
    const v953 = [v610];
    const v1266 = v953[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
    const v1270 = stdlib.tokenEq(v952, v1266);
    const v961 = v1270 ? false : true;
    stdlib.assert(v961, {
      at: './index.rsh:84:25:application',
      fs: [],
      msg: 'New token is unique',
      who: 'Organizer'
      });
    const v962 = v624[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v964 = v962[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v965 = v962[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
    const v966 = [v615, v964, v965];
    const v967 = stdlib.Array_set(v624, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v966);
    const v969 = v967[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v970 = v969[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
    const v972 = v969[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
    const v973 = [v970, v615, v972];
    const v974 = stdlib.Array_set(v967, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v973);
    const v975 = v974[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v976 = v975[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
    const v977 = v975[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v979 = [v976, v977, false];
    const v980 = stdlib.Array_set(v974, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v979);
    const v981 = undefined /* TokenNew */;
    const v982 = await txn2.getOutput('internal', 'v981', ctc1, v981);
    const v983 = [v610, v952];
    const v984 = await stdlib.Array_asyncReduce([v983], false, async([v986], v985, v987) => {
      const v988 = stdlib.tokenEq(v982, v986);
      const v990 = v985 ? v985 : v988;
      
      return v990;})
    const v991 = v984 ? false : true;
    stdlib.assert(v991, {
      at: './index.rsh:87:39:application',
      fs: [],
      msg: 'New token is unique',
      who: 'Organizer'
      });
    const v992 = v980[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v994 = v992[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
    const v995 = v992[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v996 = [v615, v994, v995];
    const v997 = stdlib.Array_set(v980, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v996);
    const v999 = v997[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v1000 = v999[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
    const v1002 = v999[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v1003 = [v1000, v615, v1002];
    const v1004 = stdlib.Array_set(v997, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v1003);
    const v1005 = v1004[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v1006 = v1005[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
    const v1007 = v1005[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
    const v1009 = [v1006, v1007, false];
    const v1010 = stdlib.Array_set(v1004, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v1009);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 9,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1014], secs: v1016, time: v1015, didSend: v128, from: v1013 } = txn3;
    ;
    ;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 10,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1025, time: v1024, didSend: v137, from: v1023 } = txn4;
    ;
    const v1026 = stdlib.addressEq(v1013, v1023);
    stdlib.assert(v1026, {
      at: './index.rsh:105:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Organizer'
      });
    const v1027 = v1010[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
    const v1028 = v1027[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
    const v1032 = stdlib.sub(v1028, v616);
    const v1035 = v1027[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
    const v1036 = v1027[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
    const v1037 = [v1032, v1035, v1036];
    const v1038 = stdlib.Array_set(v1010, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1'), v1037);
    ;
    const txn5 = await (ctc.sendrecv({
      args: [v604, v608, v610, v615, v616, v952, v982, v1013, v1038],
      evt_cnt: 0,
      funcNum: 11,
      lct: v1024,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '0'), [[v616, v952]]],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1043, time: v1042, didSend: v153, from: v1041 } = txn5;
        
        ;
        const v1044 = v1038[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
        const v1045 = v1044[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '0')];
        const v1046 = stdlib.add(v1045, v616);
        const v1049 = v1044[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
        const v1050 = v1044[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '2')];
        const v1051 = [v1046, v1049, v1050];
        const v1052 = stdlib.Array_set(v1038, stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1'), v1051);
        sim_r.txns.push({
          amt: v616,
          kind: 'to',
          tok: v952
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc8, ctc2, ctc1, ctc0, ctc0, ctc1, ctc1, ctc8, ctc10],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1043, time: v1042, didSend: v153, from: v1041 } = txn5;
    ;
    const v1044 = v1038[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
    const v1045 = v1044[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '0')];
    const v1046 = stdlib.add(v1045, v616);
    const v1049 = v1044[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
    const v1050 = v1044[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '2')];
    const v1051 = [v1046, v1049, v1050];
    const v1052 = stdlib.Array_set(v1038, stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1'), v1051);
    ;
    const v1053 = stdlib.addressEq(v604, v1041);
    stdlib.assert(v1053, {
      at: './index.rsh:109:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Organizer'
      });
    const txn6 = await (ctc.sendrecv({
      args: [v604, v608, v610, v615, v616, v952, v982, v1013, v1052],
      evt_cnt: 0,
      funcNum: 12,
      lct: v1042,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:111:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1056, time: v1055, didSend: v158, from: v1054 } = txn6;
        
        ;
        if (v608) {
          sim_r.isHalt = false;
          }
        else {
          const v1174 = v1052[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v1175 = v1174[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
          const v1179 = stdlib.sub(v1175, v615);
          const v1182 = v1174[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v1183 = v1174[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
          const v1184 = [v1179, v1182, v1183];
          const v1185 = stdlib.Array_set(v1052, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1184);
          const v1186 = v1185[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v1187 = v1186[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v1188 = stdlib.sub(v1187, v615);
          const v1190 = v1186[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
          const v1192 = v1186[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
          const v1193 = [v1190, v1188, v1192];
          const v1194 = stdlib.Array_set(v1185, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1193);
          stdlib.simTokenBurn(sim_r, v952, v615);
          const v1195 = v1194[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
          const v1199 = v1195[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
          stdlib.simTokenDestroy(sim_r, v952);
          const v1202 = v1195[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
          const v1205 = [v1202, v1199, true];
          const v1206 = stdlib.Array_set(v1194, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v1205);
          const v1207 = v1206[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
          const v1208 = v1207[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
          stdlib.simTokenBurn(sim_r, v982, v1208);
          stdlib.simTokenDestroy(sim_r, v982);
          sim_r.txns.push({
            kind: 'halt',
            tok: v610
            })
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
      tys: [ctc8, ctc2, ctc1, ctc0, ctc0, ctc1, ctc1, ctc8, ctc10],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1056, time: v1055, didSend: v158, from: v1054 } = txn6;
    ;
    const v1057 = stdlib.addressEq(v604, v1054);
    stdlib.assert(v1057, {
      at: './index.rsh:111:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Organizer'
      });
    if (v608) {
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 13,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1060, time: v1059, didSend: v163, from: v1058 } = txn7;
      ;
      const v1061 = stdlib.addressEq(v1013, v1058);
      stdlib.assert(v1061, {
        at: './index.rsh:116:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Organizer'
        });
      const v1062 = v1052[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
      const v1063 = v1062[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
      const v1067 = stdlib.sub(v1063, v616);
      const v1070 = v1062[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
      const v1071 = v1062[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
      const v1072 = [v1067, v1070, v1071];
      const v1073 = stdlib.Array_set(v1052, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2'), v1072);
      ;
      const txn8 = await (ctc.sendrecv({
        args: [v604, v610, v615, v616, v952, v982, v1073],
        evt_cnt: 0,
        funcNum: 14,
        lct: v1059,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '0'), [[v616, v982]]],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v1078, time: v1077, didSend: v179, from: v1076 } = txn8;
          
          ;
          const v1079 = v1073[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
          const v1080 = v1079[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '0')];
          const v1081 = stdlib.add(v1080, v616);
          const v1084 = v1079[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '1')];
          const v1085 = v1079[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
          const v1086 = [v1081, v1084, v1085];
          const v1087 = stdlib.Array_set(v1073, stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2'), v1086);
          sim_r.txns.push({
            amt: v616,
            kind: 'to',
            tok: v982
            });
          const v1089 = v1087[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v1090 = v1089[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
          const v1094 = stdlib.sub(v1090, v615);
          const v1097 = v1089[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v1098 = v1089[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
          const v1099 = [v1094, v1097, v1098];
          const v1100 = stdlib.Array_set(v1087, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1099);
          const v1101 = v1100[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v1102 = v1101[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
          const v1103 = stdlib.sub(v1102, v615);
          const v1105 = v1101[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
          const v1107 = v1101[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
          const v1108 = [v1105, v1103, v1107];
          const v1109 = stdlib.Array_set(v1100, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1108);
          stdlib.simTokenBurn(sim_r, v952, v615);
          const v1110 = v1109[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
          const v1114 = v1110[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
          stdlib.simTokenDestroy(sim_r, v952);
          const v1117 = v1110[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
          const v1120 = [v1117, v1114, true];
          const v1121 = stdlib.Array_set(v1109, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v1120);
          const v1122 = v1121[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
          const v1123 = v1122[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
          stdlib.simTokenBurn(sim_r, v982, v1123);
          stdlib.simTokenDestroy(sim_r, v982);
          sim_r.txns.push({
            kind: 'halt',
            tok: v610
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
        tys: [ctc8, ctc1, ctc0, ctc0, ctc1, ctc1, ctc10],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1078, time: v1077, didSend: v179, from: v1076 } = txn8;
      ;
      const v1079 = v1073[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
      const v1080 = v1079[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '0')];
      const v1081 = stdlib.add(v1080, v616);
      const v1084 = v1079[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '1')];
      const v1085 = v1079[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
      const v1086 = [v1081, v1084, v1085];
      const v1087 = stdlib.Array_set(v1073, stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2'), v1086);
      ;
      const v1088 = stdlib.addressEq(v604, v1076);
      stdlib.assert(v1088, {
        at: './index.rsh:119:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Organizer'
        });
      const v1089 = v1087[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1090 = v1089[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v1094 = stdlib.sub(v1090, v615);
      const v1097 = v1089[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1098 = v1089[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v1099 = [v1094, v1097, v1098];
      const v1100 = stdlib.Array_set(v1087, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1099);
      const v1101 = v1100[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1102 = v1101[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1103 = stdlib.sub(v1102, v615);
      const v1105 = v1101[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v1107 = v1101[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v1108 = [v1105, v1103, v1107];
      const v1109 = stdlib.Array_set(v1100, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1108);
      undefined /* TokenBurn */;
      const v1110 = v1109[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      const v1114 = v1110[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v1117 = v1110[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
      const v1120 = [v1117, v1114, true];
      const v1121 = stdlib.Array_set(v1109, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v1120);
      const v1122 = v1121[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
      const v1123 = v1122[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      
      
      
      
      }
    else {
      const v1174 = v1052[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1175 = v1174[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v1179 = stdlib.sub(v1175, v615);
      const v1182 = v1174[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1183 = v1174[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v1184 = [v1179, v1182, v1183];
      const v1185 = stdlib.Array_set(v1052, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1184);
      const v1186 = v1185[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1187 = v1186[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1188 = stdlib.sub(v1187, v615);
      const v1190 = v1186[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v1192 = v1186[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v1193 = [v1190, v1188, v1192];
      const v1194 = stdlib.Array_set(v1185, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1193);
      undefined /* TokenBurn */;
      const v1195 = v1194[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      const v1199 = v1195[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v1202 = v1195[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
      const v1205 = [v1202, v1199, true];
      const v1206 = stdlib.Array_set(v1194, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v1205);
      const v1207 = v1206[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
      const v1208 = v1207[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      }
    
    
    
    
    
    
    
    }
  
  
  
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
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  
  
  const v567 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v568 = [v567, v567, v567];
  const v572 = stdlib.protect(ctc0, interact.takePlatformFee, 'for Platform\'s interact field takePlatformFee');
  
  const txn1 = await (ctc.sendrecv({
    args: [v572],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:21:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v581], secs: v583, time: v582, didSend: v32, from: v580 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v581], secs: v583, time: v582, didSend: v32, from: v580 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.ready(), {
    at: './index.rsh:48:35:application',
    fs: ['at ./index.rsh:48:35:application call to [unknown function] (defined at: ./index.rsh:48:35:function exp)', 'at ./index.rsh:48:35:application call to "liftedInteract" (defined at: ./index.rsh:48:35:application)'],
    msg: 'ready',
    who: 'Platform'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 12,
    funcNum: 1,
    out_tys: [ctc0, ctc0, ctc0, ctc2, ctc2, ctc3, ctc4, ctc5, ctc6, ctc4, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v616], secs: v618, time: v617, didSend: v72, from: v604 } = txn2;
  const v619 = v568[stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '0')];
  const v621 = v619[stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '1')];
  const v622 = v619[stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '2')];
  const v623 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v621, v622];
  const v624 = stdlib.Array_set(v568, stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '0'), v623);
  ;
  ;
  if (v609) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v629, time: v628, didSend: v80, from: v627 } = txn3;
    ;
    const v632 = stdlib.addressEq(v604, v627);
    stdlib.assert(v632, {
      at: './index.rsh:69:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Platform'
      });
    ;
    const v638 = stdlib.le(v616, v615);
    stdlib.assert(v638, {
      at: './index.rsh:80:10:application',
      fs: [],
      msg: null,
      who: 'Platform'
      });
    const v639 = stdlib.le(v616, stdlib.UInt_max);
    stdlib.assert(v639, {
      at: './index.rsh:81:10:application',
      fs: [],
      msg: null,
      who: 'Platform'
      });
    const v640 = undefined /* TokenNew */;
    const v641 = await txn3.getOutput('internal', 'v640', ctc3, v640);
    const v642 = [v610];
    const v1259 = v642[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
    const v1263 = stdlib.tokenEq(v641, v1259);
    const v650 = v1263 ? false : true;
    stdlib.assert(v650, {
      at: './index.rsh:84:25:application',
      fs: [],
      msg: 'New token is unique',
      who: 'Platform'
      });
    const v651 = v624[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v653 = v651[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v654 = v651[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
    const v655 = [v615, v653, v654];
    const v656 = stdlib.Array_set(v624, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v655);
    const v658 = v656[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v659 = v658[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
    const v661 = v658[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
    const v662 = [v659, v615, v661];
    const v663 = stdlib.Array_set(v656, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v662);
    const v664 = v663[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v665 = v664[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
    const v666 = v664[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v668 = [v665, v666, false];
    const v669 = stdlib.Array_set(v663, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v668);
    const v670 = undefined /* TokenNew */;
    const v671 = await txn3.getOutput('internal', 'v670', ctc3, v670);
    const v672 = [v610, v641];
    const v673 = await stdlib.Array_asyncReduce([v672], false, async([v675], v674, v676) => {
      const v677 = stdlib.tokenEq(v671, v675);
      const v679 = v674 ? v674 : v677;
      
      return v679;})
    const v680 = v673 ? false : true;
    stdlib.assert(v680, {
      at: './index.rsh:87:39:application',
      fs: [],
      msg: 'New token is unique',
      who: 'Platform'
      });
    const v681 = v669[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v683 = v681[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
    const v684 = v681[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v685 = [v615, v683, v684];
    const v686 = stdlib.Array_set(v669, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v685);
    const v688 = v686[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v689 = v688[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
    const v691 = v688[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v692 = [v689, v615, v691];
    const v693 = stdlib.Array_set(v686, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v692);
    const v694 = v693[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v695 = v694[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
    const v696 = v694[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
    const v698 = [v695, v696, false];
    const v699 = stdlib.Array_set(v693, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v698);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v703], secs: v705, time: v704, didSend: v128, from: v702 } = txn4;
    ;
    ;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v714, time: v713, didSend: v137, from: v712 } = txn5;
    ;
    const v715 = stdlib.addressEq(v702, v712);
    stdlib.assert(v715, {
      at: './index.rsh:105:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Platform'
      });
    const v716 = v699[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
    const v717 = v716[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
    const v721 = stdlib.sub(v717, v616);
    const v724 = v716[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
    const v725 = v716[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
    const v726 = [v721, v724, v725];
    const v727 = stdlib.Array_set(v699, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1'), v726);
    ;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v732, time: v731, didSend: v153, from: v730 } = txn6;
    ;
    const v733 = v727[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
    const v734 = v733[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '0')];
    const v735 = stdlib.add(v734, v616);
    const v738 = v733[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
    const v739 = v733[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '2')];
    const v740 = [v735, v738, v739];
    const v741 = stdlib.Array_set(v727, stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1'), v740);
    ;
    const v742 = stdlib.addressEq(v604, v730);
    stdlib.assert(v742, {
      at: './index.rsh:109:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Platform'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 6,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v745, time: v744, didSend: v158, from: v743 } = txn7;
    ;
    const v746 = stdlib.addressEq(v604, v743);
    stdlib.assert(v746, {
      at: './index.rsh:111:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Platform'
      });
    if (v608) {
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 7,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v749, time: v748, didSend: v163, from: v747 } = txn8;
      ;
      const v750 = stdlib.addressEq(v702, v747);
      stdlib.assert(v750, {
        at: './index.rsh:116:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Platform'
        });
      const v751 = v741[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
      const v752 = v751[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
      const v756 = stdlib.sub(v752, v616);
      const v759 = v751[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
      const v760 = v751[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
      const v761 = [v756, v759, v760];
      const v762 = stdlib.Array_set(v741, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2'), v761);
      ;
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 8,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v767, time: v766, didSend: v179, from: v765 } = txn9;
      ;
      const v768 = v762[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
      const v769 = v768[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '0')];
      const v770 = stdlib.add(v769, v616);
      const v773 = v768[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '1')];
      const v774 = v768[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
      const v775 = [v770, v773, v774];
      const v776 = stdlib.Array_set(v762, stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2'), v775);
      ;
      const v777 = stdlib.addressEq(v604, v765);
      stdlib.assert(v777, {
        at: './index.rsh:119:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Platform'
        });
      const v778 = v776[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v779 = v778[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v783 = stdlib.sub(v779, v615);
      const v786 = v778[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v787 = v778[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v788 = [v783, v786, v787];
      const v789 = stdlib.Array_set(v776, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v788);
      const v790 = v789[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v791 = v790[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v792 = stdlib.sub(v791, v615);
      const v794 = v790[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v796 = v790[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v797 = [v794, v792, v796];
      const v798 = stdlib.Array_set(v789, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v797);
      undefined /* TokenBurn */;
      const v799 = v798[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      const v803 = v799[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v806 = v799[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
      const v809 = [v806, v803, true];
      const v810 = stdlib.Array_set(v798, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v809);
      const v811 = v810[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
      const v812 = v811[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      
      
      
      
      }
    else {
      const v863 = v741[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v864 = v863[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v868 = stdlib.sub(v864, v615);
      const v871 = v863[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v872 = v863[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v873 = [v868, v871, v872];
      const v874 = stdlib.Array_set(v741, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v873);
      const v875 = v874[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v876 = v875[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v877 = stdlib.sub(v876, v615);
      const v879 = v875[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v881 = v875[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v882 = [v879, v877, v881];
      const v883 = stdlib.Array_set(v874, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v882);
      undefined /* TokenBurn */;
      const v884 = v883[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      const v888 = v884[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v891 = v884[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
      const v894 = [v891, v888, true];
      const v895 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v894);
      const v896 = v895[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
      const v897 = v896[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      }
    
    
    
    
    
    
    
    
    
    }
  else {
    const v949 = stdlib.le(v616, v615);
    stdlib.assert(v949, {
      at: './index.rsh:80:10:application',
      fs: [],
      msg: null,
      who: 'Platform'
      });
    const v950 = stdlib.le(v616, stdlib.UInt_max);
    stdlib.assert(v950, {
      at: './index.rsh:81:10:application',
      fs: [],
      msg: null,
      who: 'Platform'
      });
    const v951 = undefined /* TokenNew */;
    const v952 = await txn2.getOutput('internal', 'v951', ctc3, v951);
    const v953 = [v610];
    const v1266 = v953[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
    const v1270 = stdlib.tokenEq(v952, v1266);
    const v961 = v1270 ? false : true;
    stdlib.assert(v961, {
      at: './index.rsh:84:25:application',
      fs: [],
      msg: 'New token is unique',
      who: 'Platform'
      });
    const v962 = v624[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v964 = v962[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v965 = v962[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
    const v966 = [v615, v964, v965];
    const v967 = stdlib.Array_set(v624, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v966);
    const v969 = v967[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v970 = v969[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
    const v972 = v969[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
    const v973 = [v970, v615, v972];
    const v974 = stdlib.Array_set(v967, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v973);
    const v975 = v974[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v976 = v975[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
    const v977 = v975[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v979 = [v976, v977, false];
    const v980 = stdlib.Array_set(v974, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v979);
    const v981 = undefined /* TokenNew */;
    const v982 = await txn2.getOutput('internal', 'v981', ctc3, v981);
    const v983 = [v610, v952];
    const v984 = await stdlib.Array_asyncReduce([v983], false, async([v986], v985, v987) => {
      const v988 = stdlib.tokenEq(v982, v986);
      const v990 = v985 ? v985 : v988;
      
      return v990;})
    const v991 = v984 ? false : true;
    stdlib.assert(v991, {
      at: './index.rsh:87:39:application',
      fs: [],
      msg: 'New token is unique',
      who: 'Platform'
      });
    const v992 = v980[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v994 = v992[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
    const v995 = v992[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v996 = [v615, v994, v995];
    const v997 = stdlib.Array_set(v980, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v996);
    const v999 = v997[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v1000 = v999[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
    const v1002 = v999[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v1003 = [v1000, v615, v1002];
    const v1004 = stdlib.Array_set(v997, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v1003);
    const v1005 = v1004[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v1006 = v1005[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
    const v1007 = v1005[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
    const v1009 = [v1006, v1007, false];
    const v1010 = stdlib.Array_set(v1004, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v1009);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 9,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1014], secs: v1016, time: v1015, didSend: v128, from: v1013 } = txn3;
    ;
    ;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 10,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1025, time: v1024, didSend: v137, from: v1023 } = txn4;
    ;
    const v1026 = stdlib.addressEq(v1013, v1023);
    stdlib.assert(v1026, {
      at: './index.rsh:105:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Platform'
      });
    const v1027 = v1010[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
    const v1028 = v1027[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
    const v1032 = stdlib.sub(v1028, v616);
    const v1035 = v1027[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
    const v1036 = v1027[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
    const v1037 = [v1032, v1035, v1036];
    const v1038 = stdlib.Array_set(v1010, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1'), v1037);
    ;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 11,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1043, time: v1042, didSend: v153, from: v1041 } = txn5;
    ;
    const v1044 = v1038[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
    const v1045 = v1044[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '0')];
    const v1046 = stdlib.add(v1045, v616);
    const v1049 = v1044[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
    const v1050 = v1044[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '2')];
    const v1051 = [v1046, v1049, v1050];
    const v1052 = stdlib.Array_set(v1038, stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1'), v1051);
    ;
    const v1053 = stdlib.addressEq(v604, v1041);
    stdlib.assert(v1053, {
      at: './index.rsh:109:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Platform'
      });
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 12,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1056, time: v1055, didSend: v158, from: v1054 } = txn6;
    ;
    const v1057 = stdlib.addressEq(v604, v1054);
    stdlib.assert(v1057, {
      at: './index.rsh:111:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Platform'
      });
    if (v608) {
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 13,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1060, time: v1059, didSend: v163, from: v1058 } = txn7;
      ;
      const v1061 = stdlib.addressEq(v1013, v1058);
      stdlib.assert(v1061, {
        at: './index.rsh:116:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Platform'
        });
      const v1062 = v1052[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
      const v1063 = v1062[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
      const v1067 = stdlib.sub(v1063, v616);
      const v1070 = v1062[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
      const v1071 = v1062[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
      const v1072 = [v1067, v1070, v1071];
      const v1073 = stdlib.Array_set(v1052, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2'), v1072);
      ;
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 14,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1078, time: v1077, didSend: v179, from: v1076 } = txn8;
      ;
      const v1079 = v1073[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
      const v1080 = v1079[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '0')];
      const v1081 = stdlib.add(v1080, v616);
      const v1084 = v1079[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '1')];
      const v1085 = v1079[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
      const v1086 = [v1081, v1084, v1085];
      const v1087 = stdlib.Array_set(v1073, stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2'), v1086);
      ;
      const v1088 = stdlib.addressEq(v604, v1076);
      stdlib.assert(v1088, {
        at: './index.rsh:119:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Platform'
        });
      const v1089 = v1087[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1090 = v1089[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v1094 = stdlib.sub(v1090, v615);
      const v1097 = v1089[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1098 = v1089[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v1099 = [v1094, v1097, v1098];
      const v1100 = stdlib.Array_set(v1087, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1099);
      const v1101 = v1100[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1102 = v1101[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1103 = stdlib.sub(v1102, v615);
      const v1105 = v1101[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v1107 = v1101[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v1108 = [v1105, v1103, v1107];
      const v1109 = stdlib.Array_set(v1100, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1108);
      undefined /* TokenBurn */;
      const v1110 = v1109[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      const v1114 = v1110[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v1117 = v1110[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
      const v1120 = [v1117, v1114, true];
      const v1121 = stdlib.Array_set(v1109, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v1120);
      const v1122 = v1121[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
      const v1123 = v1122[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      
      
      
      
      }
    else {
      const v1174 = v1052[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1175 = v1174[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v1179 = stdlib.sub(v1175, v615);
      const v1182 = v1174[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1183 = v1174[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v1184 = [v1179, v1182, v1183];
      const v1185 = stdlib.Array_set(v1052, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1184);
      const v1186 = v1185[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1187 = v1186[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1188 = stdlib.sub(v1187, v615);
      const v1190 = v1186[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v1192 = v1186[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v1193 = [v1190, v1188, v1192];
      const v1194 = stdlib.Array_set(v1185, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1193);
      undefined /* TokenBurn */;
      const v1195 = v1194[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      const v1199 = v1195[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v1202 = v1195[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
      const v1205 = [v1202, v1199, true];
      const v1206 = stdlib.Array_set(v1194, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v1205);
      const v1207 = v1206[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
      const v1208 = v1207[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      }
    
    
    
    
    
    
    
    }
  
  
  
  };
export async function RSVPier(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for RSVPier expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for RSVPier expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  
  const v567 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v568 = [v567, v567, v567];
  const v577 = stdlib.protect(ctc0, interact.numberOfTicket, 'for RSVPier\'s interact field numberOfTicket');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v581], secs: v583, time: v582, didSend: v32, from: v580 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 12,
    funcNum: 1,
    out_tys: [ctc0, ctc0, ctc0, ctc1, ctc1, ctc2, ctc3, ctc4, ctc5, ctc3, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v616], secs: v618, time: v617, didSend: v72, from: v604 } = txn2;
  const v619 = v568[stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '0')];
  const v621 = v619[stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '1')];
  const v622 = v619[stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '2')];
  const v623 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v621, v622];
  const v624 = stdlib.Array_set(v568, stdlib.checkedBigNumberify('./index.rsh:64:13:dot', stdlib.UInt_max, '0'), v623);
  ;
  ;
  if (v609) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v629, time: v628, didSend: v80, from: v627 } = txn3;
    ;
    const v632 = stdlib.addressEq(v604, v627);
    stdlib.assert(v632, {
      at: './index.rsh:69:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'RSVPier'
      });
    ;
    const v638 = stdlib.le(v616, v615);
    stdlib.assert(v638, {
      at: './index.rsh:80:10:application',
      fs: [],
      msg: null,
      who: 'RSVPier'
      });
    const v639 = stdlib.le(v616, stdlib.UInt_max);
    stdlib.assert(v639, {
      at: './index.rsh:81:10:application',
      fs: [],
      msg: null,
      who: 'RSVPier'
      });
    const v640 = undefined /* TokenNew */;
    const v641 = await txn3.getOutput('internal', 'v640', ctc2, v640);
    const v642 = [v610];
    const v1259 = v642[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
    const v1263 = stdlib.tokenEq(v641, v1259);
    const v650 = v1263 ? false : true;
    stdlib.assert(v650, {
      at: './index.rsh:84:25:application',
      fs: [],
      msg: 'New token is unique',
      who: 'RSVPier'
      });
    const v651 = v624[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v653 = v651[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v654 = v651[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
    const v655 = [v615, v653, v654];
    const v656 = stdlib.Array_set(v624, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v655);
    const v658 = v656[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v659 = v658[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
    const v661 = v658[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
    const v662 = [v659, v615, v661];
    const v663 = stdlib.Array_set(v656, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v662);
    const v664 = v663[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v665 = v664[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
    const v666 = v664[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v668 = [v665, v666, false];
    const v669 = stdlib.Array_set(v663, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v668);
    const v670 = undefined /* TokenNew */;
    const v671 = await txn3.getOutput('internal', 'v670', ctc2, v670);
    const v672 = [v610, v641];
    const v673 = await stdlib.Array_asyncReduce([v672], false, async([v675], v674, v676) => {
      const v677 = stdlib.tokenEq(v671, v675);
      const v679 = v674 ? v674 : v677;
      
      return v679;})
    const v680 = v673 ? false : true;
    stdlib.assert(v680, {
      at: './index.rsh:87:39:application',
      fs: [],
      msg: 'New token is unique',
      who: 'RSVPier'
      });
    const v681 = v669[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v683 = v681[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
    const v684 = v681[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v685 = [v615, v683, v684];
    const v686 = stdlib.Array_set(v669, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v685);
    const v688 = v686[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v689 = v688[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
    const v691 = v688[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v692 = [v689, v615, v691];
    const v693 = stdlib.Array_set(v686, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v692);
    const v694 = v693[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v695 = v694[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
    const v696 = v694[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
    const v698 = [v695, v696, false];
    const v699 = stdlib.Array_set(v693, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v698);
    stdlib.protect(ctc6, await interact.buyTicket(v605), {
      at: './index.rsh:93:34:application',
      fs: ['at ./index.rsh:91:15:application call to [unknown function] (defined at: ./index.rsh:91:19:function exp)'],
      msg: 'buyTicket',
      who: 'RSVPier'
      });
    stdlib.protect(ctc6, await interact.acceptToken(v641), {
      at: './index.rsh:94:36:application',
      fs: ['at ./index.rsh:91:15:application call to [unknown function] (defined at: ./index.rsh:91:19:function exp)'],
      msg: 'acceptToken',
      who: 'RSVPier'
      });
    stdlib.protect(ctc6, await interact.acceptReward(v671), {
      at: './index.rsh:95:37:application',
      fs: ['at ./index.rsh:91:15:application call to [unknown function] (defined at: ./index.rsh:91:19:function exp)'],
      msg: 'acceptReward',
      who: 'RSVPier'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v604, v605, v608, v610, v615, v616, v641, v671, v699, v577],
      evt_cnt: 1,
      funcNum: 3,
      lct: v628,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [v605, []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v703], secs: v705, time: v704, didSend: v128, from: v702 } = txn4;
        
        sim_r.txns.push({
          amt: v605,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v604,
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc0, ctc1, ctc2, ctc0, ctc0, ctc2, ctc2, ctc9, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v703], secs: v705, time: v704, didSend: v128, from: v702 } = txn4;
    ;
    ;
    const txn5 = await (ctc.sendrecv({
      args: [v604, v608, v610, v615, v616, v641, v671, v699, v702],
      evt_cnt: 0,
      funcNum: 4,
      lct: v704,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:105:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v714, time: v713, didSend: v137, from: v712 } = txn5;
        
        ;
        const v716 = v699[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
        const v717 = v716[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
        const v721 = stdlib.sub(v717, v616);
        const v724 = v716[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
        const v725 = v716[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
        const v726 = [v721, v724, v725];
        const v727 = stdlib.Array_set(v699, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1'), v726);
        sim_r.txns.push({
          kind: 'from',
          to: v702,
          tok: v641
          });
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc1, ctc2, ctc0, ctc0, ctc2, ctc2, ctc9, ctc7],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v714, time: v713, didSend: v137, from: v712 } = txn5;
    ;
    const v715 = stdlib.addressEq(v702, v712);
    stdlib.assert(v715, {
      at: './index.rsh:105:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'RSVPier'
      });
    const v716 = v699[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
    const v717 = v716[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
    const v721 = stdlib.sub(v717, v616);
    const v724 = v716[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
    const v725 = v716[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
    const v726 = [v721, v724, v725];
    const v727 = stdlib.Array_set(v699, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1'), v726);
    ;
    stdlib.protect(ctc6, await interact.didTransfer(true, v616), {
      at: './index.rsh:103:29:application',
      fs: ['at ./index.rsh:103:29:application call to [unknown function] (defined at: ./index.rsh:103:29:function exp)', 'at ./index.rsh:103:29:application call to "liftedInteract" (defined at: ./index.rsh:103:29:application)', 'at ./index.rsh:106:14:application call to "doTransfer1" (defined at: ./index.rsh:101:35:function exp)'],
      msg: 'didTransfer',
      who: 'RSVPier'
      });
    
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v732, time: v731, didSend: v153, from: v730 } = txn6;
    ;
    const v733 = v727[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
    const v734 = v733[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '0')];
    const v735 = stdlib.add(v734, v616);
    const v738 = v733[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
    const v739 = v733[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '2')];
    const v740 = [v735, v738, v739];
    const v741 = stdlib.Array_set(v727, stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1'), v740);
    ;
    const v742 = stdlib.addressEq(v604, v730);
    stdlib.assert(v742, {
      at: './index.rsh:109:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'RSVPier'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 6,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v745, time: v744, didSend: v158, from: v743 } = txn7;
    ;
    const v746 = stdlib.addressEq(v604, v743);
    stdlib.assert(v746, {
      at: './index.rsh:111:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'RSVPier'
      });
    if (v608) {
      const txn8 = await (ctc.sendrecv({
        args: [v604, v610, v615, v616, v641, v671, v702, v741],
        evt_cnt: 0,
        funcNum: 7,
        lct: v744,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:116:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v749, time: v748, didSend: v163, from: v747 } = txn8;
          
          ;
          const v751 = v741[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
          const v752 = v751[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
          const v756 = stdlib.sub(v752, v616);
          const v759 = v751[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
          const v760 = v751[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
          const v761 = [v756, v759, v760];
          const v762 = stdlib.Array_set(v741, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2'), v761);
          sim_r.txns.push({
            kind: 'from',
            to: v702,
            tok: v671
            });
          
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc2, ctc0, ctc0, ctc2, ctc2, ctc7, ctc9],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v749, time: v748, didSend: v163, from: v747 } = txn8;
      ;
      const v750 = stdlib.addressEq(v702, v747);
      stdlib.assert(v750, {
        at: './index.rsh:116:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'RSVPier'
        });
      const v751 = v741[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
      const v752 = v751[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
      const v756 = stdlib.sub(v752, v616);
      const v759 = v751[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
      const v760 = v751[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
      const v761 = [v756, v759, v760];
      const v762 = stdlib.Array_set(v741, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2'), v761);
      ;
      stdlib.protect(ctc6, await interact.didTransfer(true, v616), {
        at: './index.rsh:103:29:application',
        fs: ['at ./index.rsh:103:29:application call to [unknown function] (defined at: ./index.rsh:103:29:function exp)', 'at ./index.rsh:103:29:application call to "liftedInteract" (defined at: ./index.rsh:103:29:application)', 'at ./index.rsh:117:16:application call to "doTransfer1" (defined at: ./index.rsh:101:35:function exp)'],
        msg: 'didTransfer',
        who: 'RSVPier'
        });
      
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 8,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v767, time: v766, didSend: v179, from: v765 } = txn9;
      ;
      const v768 = v762[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
      const v769 = v768[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '0')];
      const v770 = stdlib.add(v769, v616);
      const v773 = v768[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '1')];
      const v774 = v768[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
      const v775 = [v770, v773, v774];
      const v776 = stdlib.Array_set(v762, stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2'), v775);
      ;
      const v777 = stdlib.addressEq(v604, v765);
      stdlib.assert(v777, {
        at: './index.rsh:119:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'RSVPier'
        });
      const v778 = v776[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v779 = v778[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v783 = stdlib.sub(v779, v615);
      const v786 = v778[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v787 = v778[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v788 = [v783, v786, v787];
      const v789 = stdlib.Array_set(v776, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v788);
      const v790 = v789[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v791 = v790[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v792 = stdlib.sub(v791, v615);
      const v794 = v790[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v796 = v790[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v797 = [v794, v792, v796];
      const v798 = stdlib.Array_set(v789, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v797);
      undefined /* TokenBurn */;
      const v799 = v798[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      const v803 = v799[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v806 = v799[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
      const v809 = [v806, v803, true];
      const v810 = stdlib.Array_set(v798, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v809);
      const v811 = v810[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
      const v812 = v811[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      
      
      
      
      }
    else {
      const v863 = v741[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v864 = v863[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v868 = stdlib.sub(v864, v615);
      const v871 = v863[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v872 = v863[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v873 = [v868, v871, v872];
      const v874 = stdlib.Array_set(v741, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v873);
      const v875 = v874[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v876 = v875[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v877 = stdlib.sub(v876, v615);
      const v879 = v875[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v881 = v875[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v882 = [v879, v877, v881];
      const v883 = stdlib.Array_set(v874, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v882);
      undefined /* TokenBurn */;
      const v884 = v883[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      const v888 = v884[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v891 = v884[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
      const v894 = [v891, v888, true];
      const v895 = stdlib.Array_set(v883, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v894);
      const v896 = v895[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
      const v897 = v896[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      }
    
    
    
    
    
    
    
    
    
    }
  else {
    const v949 = stdlib.le(v616, v615);
    stdlib.assert(v949, {
      at: './index.rsh:80:10:application',
      fs: [],
      msg: null,
      who: 'RSVPier'
      });
    const v950 = stdlib.le(v616, stdlib.UInt_max);
    stdlib.assert(v950, {
      at: './index.rsh:81:10:application',
      fs: [],
      msg: null,
      who: 'RSVPier'
      });
    const v951 = undefined /* TokenNew */;
    const v952 = await txn2.getOutput('internal', 'v951', ctc2, v951);
    const v953 = [v610];
    const v1266 = v953[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
    const v1270 = stdlib.tokenEq(v952, v1266);
    const v961 = v1270 ? false : true;
    stdlib.assert(v961, {
      at: './index.rsh:84:25:application',
      fs: [],
      msg: 'New token is unique',
      who: 'RSVPier'
      });
    const v962 = v624[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v964 = v962[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v965 = v962[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
    const v966 = [v615, v964, v965];
    const v967 = stdlib.Array_set(v624, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v966);
    const v969 = v967[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v970 = v969[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
    const v972 = v969[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '2')];
    const v973 = [v970, v615, v972];
    const v974 = stdlib.Array_set(v967, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v973);
    const v975 = v974[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v976 = v975[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '0')];
    const v977 = v975[stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1')];
    const v979 = [v976, v977, false];
    const v980 = stdlib.Array_set(v974, stdlib.checkedBigNumberify('./index.rsh:84:25:application', stdlib.UInt_max, '1'), v979);
    const v981 = undefined /* TokenNew */;
    const v982 = await txn2.getOutput('internal', 'v981', ctc2, v981);
    const v983 = [v610, v952];
    const v984 = await stdlib.Array_asyncReduce([v983], false, async([v986], v985, v987) => {
      const v988 = stdlib.tokenEq(v982, v986);
      const v990 = v985 ? v985 : v988;
      
      return v990;})
    const v991 = v984 ? false : true;
    stdlib.assert(v991, {
      at: './index.rsh:87:39:application',
      fs: [],
      msg: 'New token is unique',
      who: 'RSVPier'
      });
    const v992 = v980[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v994 = v992[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
    const v995 = v992[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v996 = [v615, v994, v995];
    const v997 = stdlib.Array_set(v980, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v996);
    const v999 = v997[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v1000 = v999[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
    const v1002 = v999[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v1003 = [v1000, v615, v1002];
    const v1004 = stdlib.Array_set(v997, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v1003);
    const v1005 = v1004[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2')];
    const v1006 = v1005[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '0')];
    const v1007 = v1005[stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '1')];
    const v1009 = [v1006, v1007, false];
    const v1010 = stdlib.Array_set(v1004, stdlib.checkedBigNumberify('./index.rsh:87:39:application', stdlib.UInt_max, '2'), v1009);
    stdlib.protect(ctc6, await interact.buyTicket(v605), {
      at: './index.rsh:93:34:application',
      fs: ['at ./index.rsh:91:15:application call to [unknown function] (defined at: ./index.rsh:91:19:function exp)'],
      msg: 'buyTicket',
      who: 'RSVPier'
      });
    stdlib.protect(ctc6, await interact.acceptToken(v952), {
      at: './index.rsh:94:36:application',
      fs: ['at ./index.rsh:91:15:application call to [unknown function] (defined at: ./index.rsh:91:19:function exp)'],
      msg: 'acceptToken',
      who: 'RSVPier'
      });
    stdlib.protect(ctc6, await interact.acceptReward(v982), {
      at: './index.rsh:95:37:application',
      fs: ['at ./index.rsh:91:15:application call to [unknown function] (defined at: ./index.rsh:91:19:function exp)'],
      msg: 'acceptReward',
      who: 'RSVPier'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v604, v605, v608, v610, v615, v616, v952, v982, v1010, v577],
      evt_cnt: 1,
      funcNum: 9,
      lct: v617,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [v605, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v1014], secs: v1016, time: v1015, didSend: v128, from: v1013 } = txn3;
        
        sim_r.txns.push({
          amt: v605,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v604,
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc0, ctc1, ctc2, ctc0, ctc0, ctc2, ctc2, ctc9, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v1014], secs: v1016, time: v1015, didSend: v128, from: v1013 } = txn3;
    ;
    ;
    const txn4 = await (ctc.sendrecv({
      args: [v604, v608, v610, v615, v616, v952, v982, v1010, v1013],
      evt_cnt: 0,
      funcNum: 10,
      lct: v1015,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:105:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1025, time: v1024, didSend: v137, from: v1023 } = txn4;
        
        ;
        const v1027 = v1010[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
        const v1028 = v1027[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
        const v1032 = stdlib.sub(v1028, v616);
        const v1035 = v1027[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
        const v1036 = v1027[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
        const v1037 = [v1032, v1035, v1036];
        const v1038 = stdlib.Array_set(v1010, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1'), v1037);
        sim_r.txns.push({
          kind: 'from',
          to: v1013,
          tok: v952
          });
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc1, ctc2, ctc0, ctc0, ctc2, ctc2, ctc9, ctc7],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1025, time: v1024, didSend: v137, from: v1023 } = txn4;
    ;
    const v1026 = stdlib.addressEq(v1013, v1023);
    stdlib.assert(v1026, {
      at: './index.rsh:105:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'RSVPier'
      });
    const v1027 = v1010[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
    const v1028 = v1027[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
    const v1032 = stdlib.sub(v1028, v616);
    const v1035 = v1027[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
    const v1036 = v1027[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
    const v1037 = [v1032, v1035, v1036];
    const v1038 = stdlib.Array_set(v1010, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1'), v1037);
    ;
    stdlib.protect(ctc6, await interact.didTransfer(true, v616), {
      at: './index.rsh:103:29:application',
      fs: ['at ./index.rsh:103:29:application call to [unknown function] (defined at: ./index.rsh:103:29:function exp)', 'at ./index.rsh:103:29:application call to "liftedInteract" (defined at: ./index.rsh:103:29:application)', 'at ./index.rsh:106:14:application call to "doTransfer1" (defined at: ./index.rsh:101:35:function exp)'],
      msg: 'didTransfer',
      who: 'RSVPier'
      });
    
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 11,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1043, time: v1042, didSend: v153, from: v1041 } = txn5;
    ;
    const v1044 = v1038[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
    const v1045 = v1044[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '0')];
    const v1046 = stdlib.add(v1045, v616);
    const v1049 = v1044[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1')];
    const v1050 = v1044[stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '2')];
    const v1051 = [v1046, v1049, v1050];
    const v1052 = stdlib.Array_set(v1038, stdlib.checkedBigNumberify('./index.rsh:109:13:dot', stdlib.UInt_max, '1'), v1051);
    ;
    const v1053 = stdlib.addressEq(v604, v1041);
    stdlib.assert(v1053, {
      at: './index.rsh:109:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'RSVPier'
      });
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 12,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1056, time: v1055, didSend: v158, from: v1054 } = txn6;
    ;
    const v1057 = stdlib.addressEq(v604, v1054);
    stdlib.assert(v1057, {
      at: './index.rsh:111:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'RSVPier'
      });
    if (v608) {
      const txn7 = await (ctc.sendrecv({
        args: [v604, v610, v615, v616, v952, v982, v1013, v1052],
        evt_cnt: 0,
        funcNum: 13,
        lct: v1055,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:116:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v1060, time: v1059, didSend: v163, from: v1058 } = txn7;
          
          ;
          const v1062 = v1052[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
          const v1063 = v1062[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
          const v1067 = stdlib.sub(v1063, v616);
          const v1070 = v1062[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
          const v1071 = v1062[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
          const v1072 = [v1067, v1070, v1071];
          const v1073 = stdlib.Array_set(v1052, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2'), v1072);
          sim_r.txns.push({
            kind: 'from',
            to: v1013,
            tok: v982
            });
          
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc2, ctc0, ctc0, ctc2, ctc2, ctc7, ctc9],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1060, time: v1059, didSend: v163, from: v1058 } = txn7;
      ;
      const v1061 = stdlib.addressEq(v1013, v1058);
      stdlib.assert(v1061, {
        at: './index.rsh:116:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'RSVPier'
        });
      const v1062 = v1052[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
      const v1063 = v1062[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '0')];
      const v1067 = stdlib.sub(v1063, v616);
      const v1070 = v1062[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '1')];
      const v1071 = v1062[stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2')];
      const v1072 = [v1067, v1070, v1071];
      const v1073 = stdlib.Array_set(v1052, stdlib.checkedBigNumberify('./index.rsh:102:27:application', stdlib.UInt_max, '2'), v1072);
      ;
      stdlib.protect(ctc6, await interact.didTransfer(true, v616), {
        at: './index.rsh:103:29:application',
        fs: ['at ./index.rsh:103:29:application call to [unknown function] (defined at: ./index.rsh:103:29:function exp)', 'at ./index.rsh:103:29:application call to "liftedInteract" (defined at: ./index.rsh:103:29:application)', 'at ./index.rsh:117:16:application call to "doTransfer1" (defined at: ./index.rsh:101:35:function exp)'],
        msg: 'didTransfer',
        who: 'RSVPier'
        });
      
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 14,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1078, time: v1077, didSend: v179, from: v1076 } = txn8;
      ;
      const v1079 = v1073[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
      const v1080 = v1079[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '0')];
      const v1081 = stdlib.add(v1080, v616);
      const v1084 = v1079[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '1')];
      const v1085 = v1079[stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2')];
      const v1086 = [v1081, v1084, v1085];
      const v1087 = stdlib.Array_set(v1073, stdlib.checkedBigNumberify('./index.rsh:119:15:dot', stdlib.UInt_max, '2'), v1086);
      ;
      const v1088 = stdlib.addressEq(v604, v1076);
      stdlib.assert(v1088, {
        at: './index.rsh:119:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'RSVPier'
        });
      const v1089 = v1087[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1090 = v1089[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v1094 = stdlib.sub(v1090, v615);
      const v1097 = v1089[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1098 = v1089[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v1099 = [v1094, v1097, v1098];
      const v1100 = stdlib.Array_set(v1087, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1099);
      const v1101 = v1100[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1102 = v1101[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1103 = stdlib.sub(v1102, v615);
      const v1105 = v1101[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v1107 = v1101[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v1108 = [v1105, v1103, v1107];
      const v1109 = stdlib.Array_set(v1100, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1108);
      undefined /* TokenBurn */;
      const v1110 = v1109[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      const v1114 = v1110[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v1117 = v1110[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
      const v1120 = [v1117, v1114, true];
      const v1121 = stdlib.Array_set(v1109, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v1120);
      const v1122 = v1121[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
      const v1123 = v1122[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      
      
      
      
      }
    else {
      const v1174 = v1052[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1175 = v1174[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v1179 = stdlib.sub(v1175, v615);
      const v1182 = v1174[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1183 = v1174[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v1184 = [v1179, v1182, v1183];
      const v1185 = stdlib.Array_set(v1052, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1184);
      const v1186 = v1185[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1187 = v1186[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1')];
      const v1188 = stdlib.sub(v1187, v615);
      const v1190 = v1186[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '0')];
      const v1192 = v1186[stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '2')];
      const v1193 = [v1190, v1188, v1192];
      const v1194 = stdlib.Array_set(v1185, stdlib.checkedBigNumberify('./index.rsh:121:12:application', stdlib.UInt_max, '1'), v1193);
      undefined /* TokenBurn */;
      const v1195 = v1194[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      const v1199 = v1195[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v1202 = v1195[stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '0')];
      const v1205 = [v1202, v1199, true];
      const v1206 = stdlib.Array_set(v1194, stdlib.checkedBigNumberify('./index.rsh:122:15:application', stdlib.UInt_max, '1'), v1205);
      const v1207 = v1206[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '2')];
      const v1208 = v1207[stdlib.checkedBigNumberify('./index.rsh:123:26:application', stdlib.UInt_max, '0')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      }
    
    
    
    
    
    
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAcAAEDCAQpMTlBIAYhoI0GAg4oMDhABQcLDRAMD0n///////////8BJgQBAAEBAAECIjUAMRhBEJYqZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIRQMQAb7SSEVDEADrEkhFgxAAbtJIQ4MQAD9IQ4SRCEXNAESRDQESSISTDQCEhFEKGRJNQNJSkkhD1s1/yEQWzX+IRFbNf0hEls1/FdIMzX7gATPiQIgsDT7VyIRNfo0+1cAIjT6Ils0/ggWNPpXCAhQNPpXEAFQUDX5NP40/IgQDTQDVwAgMQASRDT5VxERNfg0+VcAETT4Ils0/wkWNPhXCAhQNPhXEAFQUDT5VyIRUEk191cRETX2NPdXABE09lcACDT2JVs0/wkWUDT2VxABUFA091ciEVBJNfVXERE19LEisgEkshA0/bIhs7EisgEkshA0/LIhs7EisgEishIhBLIQMgmyFTIKshQ0AyEJW7IRs0IPBkghGTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSlcAIDX/IQlbNf4hD1s1/SEQWzX8IRFbNfshEls1+ldIIDX5V2gzNfiABCKflwOwNPkxABJENPhXIhE19zT4VwAiNPciWzT8CRY091cICFA091cQAVBQNfaxIrIBNPyyEiEEshA0+bIUNPqyEbM0/zT+FlA0/RZQNPwWUDT7FlA0+hZQNPZQKEsBVwB7Z0ghFzUBMgY1AkIOa0khGAxAARxIIQ40ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/yELWzX+IQVbNf0hBls1/CEHWzX7IQhbNfpXSSA1+VdpMzX4gATKq843sDT/MQASRDQDVyABF0EANjT/NP4WUDT9FlA0/BZQNPsWUDT6FlA0+VA0+FAoSwFXAH9nKUsBV38cZ0ghGTUBMgY1AkIN0jT4VxERNfc0+FcAETT3Ils0/QkWNPdXCAhQNPdXEAFQUDT4VyIRUEk19lcRETX1NPZXABE09VcACDT1JVs0/QkWUDT1VxABUFA09lciEVBJNfRXERE187EisgEkshA0+7Ihs7EisgEkshA0+rIhs7EisgEishIhBLIQMgmyFTIKshQ0/rIRs0INLEghFjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/1cgARc1/iELWzX9IQVbNfwhBls1+yEHWzX6IQhbNflXSSA1+FdpMzX3gATj2TY1sDT3VxERNfY091cAETT2Ils0+wgWNPZXCAhQNPZXEAFQUDT3VyIRUDX1NPs0+ogNGTT/MQASRDT/NP4WUQcIUDT9FlA0/BZQNPsWUDT6FlA0+RZQNPhQNPVQKEsBVwB/ZylLAVd/HWdIIQ41ATIGNQJCDIFJgQkMQAGMSYEKDEAA1UghGDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/1cgARc1/iELWzX9IQVbNfwhBls1+yEHWzX6IQhbNflXSTM1+Fd8IDX3gATTRHMjsDT3MQASRDT4VxERNfY0+FcAETT2Ils0+wkWNPZXCAhQNPZXEAFQUDT4VyIRUDX1sSKyATT7shIhBLIQNPeyFDT6shGzNP80/hZRBwhQNP0WUDT8FlA0+xZQNPoWUDT5FlA091A09VAoSwFXAH9nKUsBV38dZ0ghFjUBMgY1AkILnkghFTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/yEJWzX+VygBFzX9IQVbNfwhBls1+yEHWzX6IQhbNfkhGls1+FdRMzX3STUFFzX2gARjV1FcNPYWULA0/ogLeLEisgE0/rIII7IQNP+yB7M0/zT9FlEHCFA0/BZQNPsWUDT6FlA0+RZQNPgWUDT3UDEAUChLAVcAf2cpSwFXfx1nSCEYNQEyBjUCQgruSSUMQAD5SCU0ARJENARJIhJMNAISEUQoZEk1A0lKSSEPWzX/IRBbNf4hEVs1/SESWzX8V0gzNfuABBf82y6wNPtXIhE1+jT7VwAiNPoiWzT+CBY0+lcICFA0+lcQAVBQNfk0/jT8iAraNANXACAxABJENPlXERE1+DT5VwARNPgiWzT/CRY0+FcICFA0+FcQAVBQNPlXIhFQSTX3VxERNfY091cAETT2VwAINPYlWzT/CRZQNPZXEAFQUDT3VyIRUEk19VcRETX0sSKyASSyEDT9siGzsSKyASSyEDT8siGzsSKyASKyEiEEshAyCbIVMgqyFDQDIQlbshGzQgnTSCEUNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8hCVs1/iEPWzX9IRBbNfwhEVs1+yESWzX6V0ggNflXaDM1+IAE4huzqbA0+TEAEkQ0+FciETX3NPhXACI09yJbNPwJFjT3VwgIUDT3VxABUFA19rEisgE0/LISIQSyEDT5shQ0+rIRszT/NP4WUDT9FlA0/BZQNPsWUDT6FlA09lAoSwFXAHtnSCU1ATIGNQJCCTlJJAxAA3xJIRMMQAHqSSEKDEABHEghCjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSlcAIDX/IQtbNf4hBVs1/SEGWzX8IQdbNfshCFs1+ldJIDX5V2kzNfiABGG0rAywNP8xABJENANXIAEXQQA2NP80/hZQNP0WUDT8FlA0+xZQNPoWUDT5UDT4UChLAVcAf2cpSwFXfxxnSCEUNQEyBjUCQgiTNPhXERE19zT4VwARNPciWzT9CRY091cICFA091cQAVBQNPhXIhFQSTX2VxERNfU09lcAETT1VwAINPUlWzT9CRZQNPVXEAFQUDT2VyIRUEk19FcRETXzsSKyASSyEDT7siGzsSKyASSyEDT6siGzsSKyASKyEiEEshAyCbIVMgqyFDT+shGzQgftSCETNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/VyABFzX+IQtbNf0hBVs1/CEGWzX7IQdbNfohCFs1+VdJIDX4V2kzNfeABMyZklywNPdXERE19jT3VwARNPYiWzT7CBY09lcICFA09lcQAVBQNPdXIhFQNfU0+zT6iAfaNP8xABJENP80/hZRBwhQNP0WUDT8FlA0+xZQNPoWUDT5FlA0+FA09VAoSwFXAH9nKUsBV38dZ0ghCjUBMgY1AkIHQkkhBAxAANVIIQQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf9XIAEXNf4hC1s1/SEFWzX8IQZbNfshB1s1+iEIWzX5V0kzNfhXfCA194AEkSc087A09zEAEkQ0+FcRETX2NPhXABE09iJbNPsJFjT2VwgIUDT2VxABUFA0+FciEVA19bEisgE0+7ISIQSyEDT3shQ0+rIRszT/NP4WUQcIUDT9FlA0/BZQNPsWUDT6FlA0+RZQNPdQNPVQKEsBVwB/ZylLAVd/HWdIIRM1ATIGNQJCBmZIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/yEJWzX+VygBFzX9IQVbNfwhBls1+yEHWzX6IQhbNfkhGls1+FdRMzX3STUFFzX2gATUDGzWNPYWULA0/ogGQbEisgE0/rIII7IQNP+yB7M0/zT9FlEHCFA0/BZQNPsWUDT6FlA0+RZQNPgWUDT3UDEAUChLAVcAf2cpSwFXfx1nSCEENQEyBjUCQgW3SSMMQAVGSSENDEACS0ghDTQBEkQ0BEkiEkw0AhIRRChkKWRQK2RQSTUDSUpKSkpKIQlbNf9XKCA1/oFIWzX9V1ABFzX8gVFbNftXWSA1+ld5CDX5V4FgNfhX4SA194GBAls19oGJAls19YGRAoEzWDX0gARBsUBNsDT/iAV2NP4xABJEsSKyATT/sggjshA0A1cAILIHszT1NPYORDT1IRsORCEMiAVMsSKyASSyEDT2siIhCrIjNPmyJTT6siY0+LInNPeyKDIKsimztDw184AIAAAAAAAAAoA08xZQsDTzSTXyNPsWIlsTRDT0VxERNfE09FcAETT2FjTxVwgIUDTxVxABUFA09FciEVBJNfBXERE17zTwVwARNO9XAAg09hZQNO9XEAFQUDTwVyIRUEk17lcRETXtNO5XABE07VcACDTtVwgIUChQUDTuVyIRUDXsIQyIBJyxIrIBJLIQNPayIiEKsiM0+bIlNPqyJjT4sic097IoMgqyKbO0PDXrgAgAAAAAAAACnjTrFlCwNOs16iI16SI16DT7FjTyFlAlNOgLJVgXNec06jTnEjTpSU016TToIwhJNeghDQxA/9g06RRENOxXIhE16DTsVwAiNPYWNOhXCAhQNOhXEAFQUEk151ciETXmNOdXACI05lcACDT2FlA05lcQAVBQSTXlVyIRNeQ05VcAIjTkVwAINORXCAhQKFBQNeM0/jT9FlA0/BZRBwhQNPsWUDT2FlA09RZQNPIWUDTqFlA041AoSwFXAH9nKUsBV38FZ0gkNQEyBjUCQgNfSCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAzNf9XMyA1/oFTWzX9STUFSUpKSkpKIls1/CVbNfshF1s1+lcYARc1+VcZARc1+IEaWzX3VyIgNfZXQgg19VdKYDX0V6ogNfOBygFbNfKB0gFbNfGABIt8Z/g0/BZQNPsWUDT6FlA0+RZRBwhQNPgWUQcIUDT3FlA09lA09VA09FA081A08hZQNPEWULA0/1cAETXwJa808FcICFA08FcQAVA0/1cRIlA17yEMiALTsSKyASKyEiEEshAyCrIUNPeyEbM0+EEAUDT+NP0WUDEAUDT8FlA0+RZRBwhQNPcWUDT2UDT1UDT0UDTzUDTyFlA08RZQNO9QKEsBVwB/ZylLAVd/f2crSwFX/kZnSCENNQEyBjUCQgItNPE08g5ENPEhGw5EIQyIAlmxIrIBJLIQNPKyIiEKsiM09bIlNPayJjT0sic087IoMgqyKbO0PDXugAgAAAAAAAADtzTuFlCwNO5JNe009xYiWxNENO9XERE17DTvVwARNPIWNOxXCAhQNOxXEAFQUDTvVyIRUEk161cRETXqNOtXABE06lcACDTyFlA06lcQAVBQNOtXIhFQSTXpVxERNeg06VcAETToVwAINOhXCAhQKFBQNOlXIhFQNechDIgBqbEisgEkshA08rIiIQqyIzT1siU09rImNPSyJzTzsigyCrIps7Q8NeaACAAAAAAAAAPVNOYWULA05jXlIjXkIjXjNPcWNO0WUCU04wslWBc14jTlNOISNORJTTXkNOMjCEk14yENDED/2DTkFEQ051ciETXjNOdXACI08hY041cICFA041cQAVBQSTXiVyIRNeE04lcAIjThVwAINPIWUDThVxABUFBJNeBXIhE13zTgVwAiNN9XAAg031cICFAoUFA13jEANPwWUDT5FlEHCFA09xZQNPIWUDTxFlA07RZQNOUWUDTeUChLAVcAf2cpSwFXfwVnSCEVNQEyBjUCQgBrSCEMiACiIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwgRGvSTX+SVA0/lA1/TT9MQBQNP8WUChLAVcAW2dIIzUBMgY1AkIAHDEZIRMSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhBBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 3,
  stateSize: 324,
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
                "name": "v581",
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
                "name": "v581",
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
                "internalType": "uint256",
                "name": "v605",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v606",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v607",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v608",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v609",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v610",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T5",
                "name": "v611",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T6",
                "name": "v612",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T7",
                "name": "v613",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T5",
                "name": "v614",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v615",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v616",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "internalType": "uint256",
                "name": "v703",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
                "internalType": "uint256",
                "name": "v1014",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v640",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v670",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v951",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v981",
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
                "internalType": "uint256",
                "name": "v605",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v606",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v607",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v608",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v609",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v610",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T5",
                "name": "v611",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T6",
                "name": "v612",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T7",
                "name": "v613",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T5",
                "name": "v614",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v615",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v616",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
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
        "internalType": "struct T16",
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
                "name": "v703",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
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
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
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
                "internalType": "uint256",
                "name": "v1014",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162005f9538038062005f958339810160408190526200002691620002ab565b60008055436003556200003862000160565b604080513381528351602080830191909152840151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1805160009081905281516020908101829052825160400191909152815181830180519190915282518151909201919091528151905160026020020152620000c83415600762000136565b620000d262000189565b602080830151825233828201528381015151604080840191909152600160008190554390555162000106918391016200034d565b604051602081830303815290604052600290805190602001906200012c929190620001b2565b50505050620003f9565b816200015c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60405180604001604052806200017562000241565b81526020016200018462000264565b905290565b60405180606001604052806200019e62000264565b815260006020820181905260409091015290565b828054620001c090620003bc565b90600052602060002090601f016020900481019282620001e457600085556200022f565b82601f10620001ff57805160ff19168380011785556200022f565b828001600101855582156200022f579182015b828111156200022f57825182559160200191906001019062000212565b506200023d92915062000294565b5090565b604051806060016040528060008152602001600081526020016000151581525090565b60405180606001604052806003905b6200027d62000241565b815260200190600190039081620002735790505090565b5b808211156200023d576000815560010162000295565b6000818303604080821215620002c057600080fd5b80518082016001600160401b038082118383101715620002f057634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200030a57600080fd5b8351945060208501915084821081831117156200033757634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b81516101608201908260005b60038110156200039557825180518352602080820151818501526040918201511515918401919091529092019160609091019060010162000359565b50505060208301516001600160a01b03166101208301526040909201516101409091015290565b600181811c90821680620003d157607f821691505b60208210811415620003f357634e487b7160e01b600052602260045260246000fd5b50919050565b615b8c80620004096000396000f3fe608060405260043610620000e15760003560e01c806309687c8814620000eb57806311faee8c14620001025780631e93b0f11462000119578063276c1d20146200013e5780635471c5a814620001555780637eea518c146200016c5780638323075714620001835780638b9fadc8146200019a5780638e31476914620001b1578063a035b2e014620001c8578063a7661d5414620001df578063ab53f2c614620001f6578063bf2c5b24146200021e578063c79800371462000235578063e00acef1146200024c578063e533a29d1462000263578063f4cedab0146200027a57005b36620000e957005b005b620000e9620000fc36600462003aa3565b62000291565b620000e96200011336600462003aa3565b620004c2565b3480156200012657600080fd5b506003545b6040519081526020015b60405180910390f35b620000e96200014f36600462003ac2565b62000846565b620000e96200016636600462003aa3565b62001135565b620000e96200017d36600462003aa3565b62001373565b3480156200019057600080fd5b506001546200012b565b620000e9620001ab36600462003aa3565b62001b11565b620000e9620001c236600462003aa3565b62001d6d565b620000e9620001d936600462003aa3565b62001fc9565b620000e9620001f036600462003aa3565b620022e1565b3480156200020357600080fd5b506200020e62002538565b6040516200013592919062003b33565b620000e96200022f36600462003aa3565b620025dd565b620000e96200024636600462003aa3565b6200281b565b620000e96200025d36600462003aa3565b62002a02565b620000e96200027436600462003aa3565b62002c59565b620000e96200028b36600462003aa3565b62002e25565b620002a3600b6000541460316200302a565b620002c081351580620002b857506001548235145b60326200302a565b600080805560028054620002d49062003b4e565b80601f0160208091040260200160405190810160405280929190818152602001828054620003029062003b4e565b8015620003535780601f10620003275761010080835404028352916020019162000353565b820191906000526020600020905b8154815290600101906020018083116200033557829003601f168201915b50505050508060200190518101906200036d919062003dc2565b90507fff3d454f6571b2b8fde3c8158eaa68ae1f803294ce0837fed155169daa443f8b3383604051620003a292919062003def565b60405180910390a1620003bd8160200151341460306200302a565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015620003fb573d6000803e3d6000fd5b5062000406620034c0565b81516001600160a01b03908116825260408084015115156020808501919091526060808601518416838601526080808701519186019190915260a0808701519186019190915260c08087015185169186019190915260e0808701519094169085015261010080860151938501939093523392840192909252600c6000554360015551620004969183910162003eef565b60405160208183030381529060405260029080519060200190620004bc92919062003515565b50505050565b620004d4600e60005414603e6200302a565b620004f181351580620004e957506001548235145b603f6200302a565b600080805560028054620005059062003b4e565b80601f0160208091040260200160405190810160405280929190818152602001828054620005339062003b4e565b8015620005845780601f10620005585761010080835404028352916020019162000584565b820191906000526020600020905b8154815290600101906020018083116200056657829003601f168201915b50505050508060200190518101906200059e919062003f8e565b9050620005aa620035a4565b7f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf3384604051620005dd92919062003fbb565b60405180910390a1620005f33415603c6200302a565b81516200060d906001600160a01b03163314603d6200302a565b816020015115620006d65762000622620035fa565b82516001600160a01b0390811682526040808501518216602080850191909152606080870151838601526080808801519186019190915260a08088015185169186019190915260c08088015185169186019190915260e0808801519094169085015261010086015192840192909252600f6000554360015551620006a9918391016200405b565b60405160208183030381529060405260029080519060200190620006cf92919062003515565b5050505050565b60608201516101008301516020015151620006f2919062004098565b8151526101008201805160209081015181015183518201528151015160409081015183519015159101525181516200072e919060019062003055565b6020828101828152918101515160408401515260608401519151810151015162000759919062004098565b6040828101805160209081019390935282840180519093015182015181519015159201919091529051905162000793919060019062003055565b8160600181905250620007af8260a001518360600151620030d8565b620007be8260a00151620030ee565b606081018051602090810151516080840180519190915282518201518201518151909201919091528051600160409190910181905260c0850151925191516200081a93926200080f92909162003055565b6040015151620030d8565b620008298260c00151620030ee565b60008080556001819055620008419060029062003642565b505050565b62000858600160005414600d6200302a565b62000875813515806200086d57506001548235145b600e6200302a565b600080805560028054620008899062003b4e565b80601f0160208091040260200160405190810160405280929190818152602001828054620008b79062003b4e565b8015620009085780601f10620008dc5761010080835404028352916020019162000908565b820191906000526020600020905b815481529060010190602001808311620008ea57829003601f168201915b5050505050806020019051810190620009229190620040b2565b90506200092e62003681565b7f737b0f514f2532233020bbed2c559a89465282f89acb2635810fd6fe422fd81c33846040516200096192919062004148565b60405180910390a18051600090819052825151602090810151835190910152825151604090810151835190151591015282518251620009a1929062003055565b6020820152620009b4341560086200302a565b620009c660c0840160a0850162004247565b1562000ade57620009d6620037a9565b6020808401516001600160a01b03168252604080850151838301523390830152840135606082015262000a1060a085016080860162004247565b1515608082015262000a2960e0850160c0860162004267565b6001600160a01b031660a082015262000a4b36859003850160e0860162004287565b60c082015262000a653685900385016101008601620042ae565b60e082015262000a7f3685900385016101208601620042e1565b61010082015262000a9a368590038501610180860162004287565b6101208201526101a08401356101408201526101c0840135610160820152602082810151610180830152600260005543600155604051620006a99183910162004320565b62000af86101a08401356101c0850135111560096200302a565b62000b066001600a6200302a565b6040805160e085013560208201520160408051601f1981840301815291905262000b39610120850161010086016200442c565b60405160200162000b4b91906200444c565b60408051601f19818403018152908290529062000b809061012087013590610140880135906101608901359060200162004461565b60408051808303601f1901815282825261018088013560208401529101604051602081830303815290604052866020016101800135601260405162000bc59062003845565b62000bd69695949392919062004477565b604051809103906000f08015801562000bf3573d6000803e3d6000fd5b506001600160a01b0316604080830182905260608301829052517ff346ed4ca6aaaf798d5a52f7926a7323d6b7b13b0148b96074545ffdc362d1949162000c3a91620044e2565b60405180910390a162000c5460e0840160c0850162004267565b6080820180516001600160a01b0392831690525151606083015162000c919290811691161462000c8657600162000c89565b60005b600b6200302a565b60a0810180516101a08501359052602080830180518201518201518351830152805190910151604090810151835190151591015251905162000cd7919060019062003055565b60c082018181526020918201515160e0840180519190915280516101a087013590840152815190920151604090810151835190151591015251905162000d21919060019062003055565b610100820181815260209182015151610120840180519190915281518301518301518151909301929092528151600060409091015251905162000d68919060019062003055565b6101408201526040805160e085013560208201520160408051601f1981840301815291905262000da1610120850161010086016200442c565b60405160200162000db391906200444c565b60408051601f19818403018152908290529062000de89061012087013590610140880135906101608901359060200162004461565b60408051808303601f1901815282825261018088013560208401529101604051602081830303815290604052866020016101800135601260405162000e2d9062003845565b62000e3e9695949392919062004477565b604051809103906000f08015801562000e5b573d6000803e3d6000fd5b506001600160a01b0316610160820181905261018082018190526040517fc7e699dead3591a61e4676419ae0a036782f49abe2d2573a1af150d3e354131b9162000ea591620044e2565b60405180910390a162000ebf60e0840160c0850162004267565b6101a0820180516001600160a01b03928316905260608301519051911660209091015260006101e082018190525b600281101562000f7957816101a00151816002811062000f115762000f116200406c565b60200201516001600160a01b03166102008301526101e082015162000f55578161020001516001600160a01b03168261018001516001600160a01b03161462000f5c565b816101e001515b15156101e08301528062000f7081620044f6565b91505062000eed565b506101e081015115156101c0820181905262000fa79062000f9c57600162000f9f565b60005b600c6200302a565b610220810180516101a08501359052610140820180516040908101516020908101518451909101528151810151810151835190151591015251905162000ff1919060029062003055565b610240820181815260409182015151610260840180519190915280516101a0870135602090910152815183015183015181519015159301929092525190516200103e919060029062003055565b6102808201818152604091820151516102a0840180519190915281518301516020908101518251909101528051600093019290925251905162001085919060029062003055565b6102c08201526200109562003853565b33815260208085013590820152620010b460a085016080860162004247565b15156040820152620010cd60e0850160c0860162004267565b6001600160a01b039081166060808401919091526101a086013560808401526101c086013560a0840152830151811660c08301526101808301511660e08201526102c0820151610100820152600b60005543600155604051620006a99082906020016200459e565b62001147600f6000541460426200302a565b62001164813515806200115c57506001548235145b60436200302a565b600080805560028054620011789062003b4e565b80601f0160208091040260200160405190810160405280929190818152602001828054620011a69062003b4e565b8015620011f75780601f10620011cb57610100808354040283529160200191620011f7565b820191906000526020600020905b815481529060010190602001808311620011d957829003601f168201915b50505050508060200190518101906200121191906200467b565b90506200121d620038c7565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f790076429833846040516200125092919062003fbb565b60405180910390a162001266341560406200302a565b60c082015162001283906001600160a01b0316331460416200302a565b606082015160e083015160400151516200129e919062004098565b81515260e08201805160409081015160209081015184519091015281518101518101518351901515910152518151620012db919060029062003055565b8160200181905250620012fc8260a001518360c00151846060015162003106565b62001306620038dc565b82516001600160a01b039081168252602080850151821681840152604080860151818501526060808701519085015260808087015184169085015260a080870151909316928401929092528381015160c08401526010600055436001559051620006a991839101620046f5565b6200138560026000541460156200302a565b620013a2813515806200139a57506001548235145b60166200302a565b600080805560028054620013b69062003b4e565b80601f0160208091040260200160405190810160405280929190818152602001828054620013e49062003b4e565b8015620014355780601f10620014095761010080835404028352916020019162001435565b820191906000526020600020905b8154815290600101906020018083116200141757829003601f168201915b50505050508060200190518101906200144f91906200479e565b90506200145b6200393f565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033846040516200148e92919062003fbb565b60405180910390a1620014a982602001513414600f6200302a565b6040820151620014c6906001600160a01b0316331460106200302a565b815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562001504573d6000803e3d6000fd5b506200151f826101400151836101600151111560116200302a565b6200152d600160126200302a565b60c082015151604080516020808201939093528151808203909301835280820190915260e08401515162001564916060016200444c565b60408051601f1981840301815282825261010086015180516020828101519290940151929462001598949193910162004461565b60408051601f1981840301815282825261012087015151602084015291016040516020818303038152906040528561014001516012604051620015db9062003845565b620015ec9695949392919062004477565b604051809103906000f08015801562001609573d6000803e3d6000fd5b506001600160a01b0316808252602082018190526040517fa7853060fba85b322a16d71c120b2eb669084eb7060476c17f738fd9806f17d9916200164d91620044e2565b60405180910390a160a08201516040820180516001600160a01b0392831690525151602083015162001697929081169116146200168c5760016200168f565b60005b60136200302a565b61014082015160608201805191909152610180830180516020908101518101518351820152815101516040908101518351901515910152519051620016e0919060019062003055565b608082018181526020918201515160a084018051919091526101408501518151840152815190920151604090810151835190151591015251905162001729919060019062003055565b60c082018181526020918201515160e084018051919091528151830151830151815190930192909252815160006040909101525190516200176e919060019062003055565b61010082015260c082015151604080516020808201939093528151808203909301835280820190915260e084015151620017ab916060016200444c565b60408051601f19818403018152828252610100860151805160208281015192909401519294620017df949193910162004461565b60408051601f1981840301815282825261012087015151602084015291016040516020818303038152906040528561014001516012604051620018229062003845565b620018339695949392919062004477565b604051809103906000f08015801562001850573d6000803e3d6000fd5b506001600160a01b0316610120820181905261014082018190526040517f5703fcae7f184083d398a3806c22ecd57c8096992f1509f535cbfcd6ce830762916200189a91620044e2565b60405180910390a160a0820151610160820180516001600160a01b03928316905260208084015191519190921691015260006101a082018190525b600281101562001961578161016001518160028110620018f957620018f96200406c565b60200201516001600160a01b03166101c08301526101a08201516200193d57816101c001516001600160a01b03168261014001516001600160a01b03161462001944565b816101a001515b15156101a0830152806200195881620044f6565b915050620018d5565b506101a0810151151561018082018190526200198f906200198457600162001987565b60005b60146200302a565b6101408201516101e082018051919091526101008201805160409081015160209081015184519091015281518101518101518351901515910152519051620019db919060029062003055565b61020082018181526040918201515161022084018051919091526101408501518151602001528151830151830151815190151593019290925251905162001a26919060029062003055565b610240820181815260409182015151610260840180519190915281518301516020908101518251909101528051600093019290925251905162001a6d919060029062003055565b61028082015262001a7d62003853565b6040808401516001600160a01b03908116835260608086015160208086019190915260808088015115158686015260a08089015185169387019390935261014080890151918701919091526101608801519286019290925285810151831660c08601529085015190911660e08401526102808401516101008401526003600055436001559051620006a9918391016200459e565b62001b23600d60005414603a6200302a565b62001b408135158062001b3857506001548235145b603b6200302a565b60008080556002805462001b549062003b4e565b80601f016020809104026020016040519081016040528092919081815260200182805462001b829062003b4e565b801562001bd35780601f1062001ba75761010080835404028352916020019162001bd3565b820191906000526020600020905b81548152906001019060200180831162001bb557829003601f168201915b505050505080602001905181019062001bed919062003f8e565b905062001bf9620038c7565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a550338460405162001c2c92919062003fbb565b60405180910390a162001c42341560376200302a565b6080820151610100830151602001515162001c5e91906200489d565b81515261010082018051602090810151810151835182015281510151604090810151835190151591015251815162001c9a919060019062003055565b816020018190525062001cc362001cbb338460a0015185608001516200311d565b60386200302a565b815162001cdd906001600160a01b0316331460396200302a565b62001ce762003961565b82516001600160a01b039081168252602080850151151581840152604080860151831681850152606080870151908501526080808701519085015260a08087015184169085015260c08087015184169085015260e0808701519093169284019290925283810151610100840152600e600055436001559051620006a99183910162004924565b62001d7f60056000541460216200302a565b62001d9c8135158062001d9457506001548235145b60226200302a565b60008080556002805462001db09062003b4e565b80601f016020809104026020016040519081016040528092919081815260200182805462001dde9062003b4e565b801562001e2f5780601f1062001e035761010080835404028352916020019162001e2f565b820191906000526020600020905b81548152906001019060200180831162001e1157829003601f168201915b505050505080602001905181019062001e49919062003f8e565b905062001e55620038c7565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338460405162001e8892919062003fbb565b60405180910390a162001e9e3415601e6200302a565b6080820151610100830151602001515162001eba91906200489d565b81515261010082018051602090810151810151835182015281510151604090810151835190151591015251815162001ef6919060019062003055565b816020018190525062001f1f62001f17338460a0015185608001516200311d565b601f6200302a565b815162001f39906001600160a01b0316331460206200302a565b62001f4362003961565b82516001600160a01b039081168252602080850151151581840152604080860151831681850152606080870151908501526080808701519085015260a08087015184169085015260c08087015184169085015260e08087015190931692840192909252838101516101008401526006600055436001559051620006a99183910162004924565b62001fdb60106000541460476200302a565b62001ff88135158062001ff057506001548235145b60486200302a565b6000808055600280546200200c9062003b4e565b80601f01602080910402602001604051908101604052809291908181526020018280546200203a9062003b4e565b80156200208b5780601f106200205f576101008083540402835291602001916200208b565b820191906000526020600020905b8154815290600101906020018083116200206d57829003601f168201915b5050505050806020019051810190620020a59190620049f3565b9050620020b1620039b1565b7fbceae83a94d4d1f9424beafb2b187ba867236f6cf452b6b01322429f647490043384604051620020e492919062003fbb565b60405180910390a1620020fa341560446200302a565b606082015160c083015160400151516200211591906200489d565b81515260c0820180516040908101516020908101518451909101528151810151810151835190151591015251815162002152919060029062003055565b81602001819052506200217b62002173338460a0015185606001516200311d565b60456200302a565b815162002195906001600160a01b0316331460466200302a565b6040820151602082810151015151620021af919062004098565b60408281018051929092526020808401805182015182015184518301528051909101518201518351901515920191909152519051620021f2919060019062003055565b6060820181815260209182015151608084015152604084015190518201519091015162002220919062004098565b608082018051602090810192909252606083018051909201516040908101518251901515910152905190516200225a919060019062003055565b60a082015260808201516040830151620022759190620030d8565b620022848260800151620030ee565b60a081810180516020908101515160c0850180519190915282518201518201518151909201919091528051600160409091018190529285015191519051620022d2936200080f929162003055565b620008298260a00151620030ee565b620022f3600460005414601c6200302a565b62002310813515806200230857506001548235145b601d6200302a565b600080805560028054620023249062003b4e565b80601f0160208091040260200160405190810160405280929190818152602001828054620023529062003b4e565b8015620023a35780601f106200237757610100808354040283529160200191620023a3565b820191906000526020600020905b8154815290600101906020018083116200238557829003601f168201915b5050505050806020019051810190620023bd919062004acf565b9050620023c9620038c7565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223384604051620023fc92919062003fbb565b60405180910390a1620024123415601a6200302a565b61010082015162002430906001600160a01b03163314601b6200302a565b608082015160e083015160200151516200244b919062004098565b81515260e082018051602090810151810151835182015281510151604090810151835190151591015251815162002486919060019062003055565b8160200181905250620024a88260a00151836101000151846080015162003106565b620024b262003961565b82516001600160a01b039081168252602080850151151581840152604080860151831681850152606080870151908501526080808701519085015260a08087015184169085015260c0808701518416908501526101008087015190931660e085015284820151928401929092526005600055436001559051620006a99183910162004924565b6000606060005460028080546200254f9062003b4e565b80601f01602080910402602001604051908101604052809291908181526020018280546200257d9062003b4e565b8015620025ce5780601f10620025a257610100808354040283529160200191620025ce565b820191906000526020600020905b815481529060010190602001808311620025b057829003601f168201915b50505050509050915091509091565b620025ef60076000541460296200302a565b6200260c813515806200260457506001548235145b602a6200302a565b600080805560028054620026209062003b4e565b80601f01602080910402602001604051908101604052809291908181526020018280546200264e9062003b4e565b80156200269f5780601f1062002673576101008083540402835291602001916200269f565b820191906000526020600020905b8154815290600101906020018083116200268157829003601f168201915b5050505050806020019051810190620026b991906200467b565b9050620026c5620038c7565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3384604051620026f892919062003fbb565b60405180910390a16200270e341560276200302a565b60c08201516200272b906001600160a01b0316331460286200302a565b606082015160e0830151604001515162002746919062004098565b81515260e0820180516040908101516020908101518451909101528151810151810151835190151591015251815162002783919060029062003055565b8160200181905250620027a48260a001518360c00151846060015162003106565b620027ae620038dc565b82516001600160a01b039081168252602080850151821681840152604080860151818501526060808701519085015260808087015184169085015260a080870151909316928401929092528381015160c08401526008600055436001559051620006a991839101620046f5565b6200282d60066000541460256200302a565b6200284a813515806200284257506001548235145b60266200302a565b6000808055600280546200285e9062003b4e565b80601f01602080910402602001604051908101604052809291908181526020018280546200288c9062003b4e565b8015620028dd5780601f10620028b157610100808354040283529160200191620028dd565b820191906000526020600020905b815481529060010190602001808311620028bf57829003601f168201915b5050505050806020019051810190620028f7919062003f8e565b905062002903620035a4565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae33846040516200293692919062003fbb565b60405180910390a16200294c341560236200302a565b815162002966906001600160a01b0316331460246200302a565b816020015115620006d6576200297b620035fa565b82516001600160a01b0390811682526040808501518216602080850191909152606080870151838601526080808801519186019190915260a08088015185169186019190915260c08088015185169186019190915260e080880151909416908501526101008601519284019290925260076000554360015551620006a9918391016200405b565b62002a14600c6000541460356200302a565b62002a318135158062002a2957506001548235145b60366200302a565b60008080556002805462002a459062003b4e565b80601f016020809104026020016040519081016040528092919081815260200182805462002a739062003b4e565b801562002ac45780601f1062002a985761010080835404028352916020019162002ac4565b820191906000526020600020905b81548152906001019060200180831162002aa657829003601f168201915b505050505080602001905181019062002ade919062004acf565b905062002aea620038c7565b7f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a338460405162002b1d92919062003fbb565b60405180910390a162002b33341560336200302a565b61010082015162002b51906001600160a01b0316331460346200302a565b608082015160e0830151602001515162002b6c919062004098565b81515260e082018051602090810151810151835182015281510151604090810151835190151591015251815162002ba7919060019062003055565b816020018190525062002bc98260a00151836101000151846080015162003106565b62002bd362003961565b82516001600160a01b039081168252602080850151151581840152604080860151831681850152606080870151908501526080808701519085015260a08087015184169085015260c0808701518416908501526101008087015190931660e08501528482015192840192909252600d600055436001559051620006a99183910162004924565b62002c6b600860005414602e6200302a565b62002c888135158062002c8057506001548235145b602f6200302a565b60008080556002805462002c9c9062003b4e565b80601f016020809104026020016040519081016040528092919081815260200182805462002cca9062003b4e565b801562002d1b5780601f1062002cef5761010080835404028352916020019162002d1b565b820191906000526020600020905b81548152906001019060200180831162002cfd57829003601f168201915b505050505080602001905181019062002d359190620049f3565b905062002d41620039b1565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb60776338460405162002d7492919062003fbb565b60405180910390a162002d8a3415602b6200302a565b606082015160c0830151604001515162002da591906200489d565b81515260c0820180516040908101516020908101518451909101528151810151810151835190151591015251815162002de2919060029062003055565b816020018190525062002e0b62002e03338460a0015185606001516200311d565b602c6200302a565b815162002195906001600160a01b03163314602d6200302a565b62002e3760036000541460186200302a565b62002e548135158062002e4c57506001548235145b60196200302a565b60008080556002805462002e689062003b4e565b80601f016020809104026020016040519081016040528092919081815260200182805462002e969062003b4e565b801562002ee75780601f1062002ebb5761010080835404028352916020019162002ee7565b820191906000526020600020905b81548152906001019060200180831162002ec957829003601f168201915b505050505080602001905181019062002f01919062003dc2565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1338360405162002f3692919062003def565b60405180910390a162002f518160200151341460176200302a565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562002f8f573d6000803e3d6000fd5b5062002f9a620034c0565b81516001600160a01b03908116825260408084015115156020808501919091526060808601518416838601526080808701519186019190915260a0808701519186019190915260c08087015185169186019190915260e080870151909416908501526101008086015193850193909352339284019290925260046000554360015551620004969183910162003eef565b81620030515760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6200305f620039e4565b60005b6003811015620030b5578481600381106200308157620030816200406c565b60200201518282600381106200309b576200309b6200406c565b602002015280620030ac81620044f6565b91505062003062565b5081818460038110620030cc57620030cc6200406c565b60200201529392505050565b620030e4828262003137565b6200305157600080fd5b620030f9816200321b565b6200310357600080fd5b50565b62003113838383620032c6565b6200084157600080fd5b60006200312d838530856200339f565b90505b9392505050565b6000806000846001600160a01b031660006342966c6860e01b866040516024016200316491815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051620031a4919062004aef565b60006040518083038185875af1925050503d8060008114620031e3576040519150601f19603f3d011682016040523d82523d6000602084013e620031e8565b606091505b5091509150620031fb8282600362003481565b508080602001905181019062003212919062004b0d565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b038616918391620032649162004aef565b60006040518083038185875af1925050503d8060008114620032a3576040519150601f19603f3d011682016040523d82523d6000602084013e620032a8565b606091505b5091509150620032bb8282600462003481565b506001949350505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391620033279162004aef565b60006040518083038185875af1925050503d806000811462003366576040519150601f19603f3d011682016040523d82523d6000602084013e6200336b565b606091505b50915091506200337e8282600262003481565b508080602001905181019062003395919062004b0d565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391620034089162004aef565b60006040518083038185875af1925050503d806000811462003447576040519150601f19603f3d011682016040523d82523d6000602084013e6200344c565b606091505b50915091506200345f8282600162003481565b508080602001905181019062003476919062004b0d565b979650505050505050565b606083156200349257508162003130565b825115620034a35782518084602001fd5b60405163100960cb60e01b81526004810183905260240162003048565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915260e0810162003508620039e4565b8152600060209091015290565b828054620035239062003b4e565b90600052602060002090601f01602090048101928262003547576000855562003592565b82601f106200356257805160ff191683800117855562003592565b8280016001018555821562003592579182015b828111156200359257825182559160200191906001019062003575565b50620035a092915062003a14565b5090565b6040518060a00160405280620035b962003a2b565b8152602001620035c8620039e4565b8152602001620035d762003a2b565b8152602001620035e6620039e4565b8152602001620035f562003a2b565b905290565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915260e08101620035f5620039e4565b508054620036509062003b4e565b6000825580601f1062003661575050565b601f01602090049060005260206000209081019062003103919062003a14565b604051806102e001604052806200369762003a2b565b8152602001620036a6620039e4565b81526000602082018190526040820152606001620036c362003a4e565b8152602001620036d262003a2b565b8152602001620036e1620039e4565b8152602001620036f062003a2b565b8152602001620036ff620039e4565b81526020016200370e62003a2b565b81526020016200371d620039e4565b815260006020820181905260408201526060016200373a62003a6c565b81526000602082018190526040820181905260608201526080016200375e62003a2b565b81526020016200376d620039e4565b81526020016200377c62003a2b565b81526020016200378b620039e4565b81526020016200379a62003a2b565b8152602001620035f5620039e4565b604080516101a0810182526000808252602080830182905282840182905260608084018390526080840183905260a084018390528451808301865283815260c08501528451808301865283815260e085015284519081018552828152808201839052808501839052610100840152835190810190935282529061012082019081526020016000815260200160008152602001620035f5620039e4565b6110298062004b2e83390190565b60405180610120016040528060006001600160a01b031681526020016000815260200160001515815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001620035f5620039e4565b60405180604001604052806200379a62003a2b565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001620035f5620039e4565b604080516102a08101825260008082526020820152908101620036c362003a4e565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091526101008101620035f5620039e4565b6040518060e00160405280620039c662003a2b565b8152602001620039d5620039e4565b8152602001620035b962003a2b565b60405180606001604052806003905b620039fd62003a2b565b815260200190600190039081620039f35790505090565b5b80821115620035a0576000815560010162003a15565b604051806060016040528060008152602001600081526020016000151581525090565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b60006040828403121562003a9d57600080fd5b50919050565b60006040828403121562003ab657600080fd5b62003130838362003a8a565b60006101e0828403121562003a9d57600080fd5b60005b8381101562003af357818101518382015260200162003ad9565b83811115620004bc5750506000910152565b6000815180845262003b1f81602086016020860162003ad6565b601f01601f19169290920160200192915050565b8281526040602082015260006200312d604083018462003b05565b600181811c9082168062003b6357607f821691505b6020821081141562003a9d57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b038111828210171562003bc05762003bc062003b85565b60405290565b60405161012081016001600160401b038111828210171562003bc05762003bc062003b85565b604051602081016001600160401b038111828210171562003bc05762003bc062003b85565b6040516101a081016001600160401b038111828210171562003bc05762003bc062003b85565b6001600160a01b03811681146200310357600080fd5b805162003c5a8162003c37565b919050565b80151581146200310357600080fd5b805162003c5a8162003c5f565b600082601f83011262003c8d57600080fd5b62003c9762003b9b565b8061012084018581111562003cab57600080fd5b845b8181101562003d05576060818803121562003cc85760008081fd5b62003cd262003b9b565b815181526020808301518183015260408084015162003cf18162003c5f565b908301529085529093019260600162003cad565b509095945050505050565b6000610220828403121562003d2457600080fd5b62003d2e62003bc6565b905062003d3b8262003c4d565b81526020820151602082015262003d556040830162003c6e565b604082015262003d686060830162003c4d565b60608201526080820151608082015260a082015160a082015262003d8f60c0830162003c4d565b60c082015262003da260e0830162003c4d565b60e082015261010062003db88482850162003c7b565b9082015292915050565b6000610220828403121562003dd657600080fd5b62003130838362003d10565b6001600160a01b03169052565b6001600160a01b03831681526060810162003130602083018480358252602090810135910152565b8060005b6003811015620004bc57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162003e1b565b80516001600160a01b031682526020808201511515908301526040808201519062003e859084018262003de2565b50606081015160608301526080810151608083015260a081015162003eae60a084018262003de2565b5060c081015162003ec360c084018262003de2565b5060e081015162003ed860e084018262003e17565b506101008101516200084161020084018262003de2565b610220810162003f00828462003e57565b92915050565b6000610220828403121562003f1a57600080fd5b62003f2462003bc6565b905062003f318262003c4d565b815262003f416020830162003c6e565b602082015262003f546040830162003c4d565b6040820152606082015160608201526080820151608082015262003f7b60a0830162003c4d565b60a082015262003d8f60c0830162003c4d565b6000610220828403121562003fa257600080fd5b62003130838362003f06565b803562003c5a8162003c5f565b6001600160a01b03831681528135602080830191909152606082019083013562003fe58162003c5f565b8015156040840152509392505050565b60018060a01b0380825116835280602083015116602084015260408201516040840152606082015160608401528060808301511660808401528060a08301511660a08401528060c08301511660c08401525060e08101516200084160e084018262003e17565b610200810162003f00828462003ff5565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082821015620040ad57620040ad62004082565b500390565b60006101608284031215620040c657600080fd5b620040d062003b9b565b620040dc848462003c7b565b8152610120830151620040ef8162003c37565b60208201526101409290920151604083015250919050565b803562003c5a8162003c37565b6001600160c01b0319811681146200310357600080fd5b8035620041388162004114565b6001600160c01b03191690915250565b60006102008201905060018060a01b0384168252823560208301526020830135604083015260408301356060830152606083013560808301526200418f6080840162003fae565b80151560a084015250620041a660a0840162003fae565b80151560c084015250620041bd60c0840162004107565b620041cc60e084018262003de2565b50610100620041e081840160e08601359052565b610120620041f38185018387016200412b565b848101803561014086015260208101356101608601526040013561018085015250506101a0620042298184016101808601359052565b6101c08185013581850152808501356101e085015250509392505050565b6000602082840312156200425a57600080fd5b8135620031308162003c5f565b6000602082840312156200427a57600080fd5b8135620031308162003c37565b6000602082840312156200429a57600080fd5b620042a462003bec565b9135825250919050565b600060208284031215620042c157600080fd5b620042cb62003bec565b8235620042d88162004114565b81529392505050565b600060608284031215620042f457600080fd5b620042fe62003b9b565b8235815260208301356020820152604083013560408201528091505092915050565b60006102e0820190506200433682845162003de2565b60208301516020830152604083015162004354604084018262003de2565b5060608301516060830152608083015162004373608084018215159052565b5060a08301516200438860a084018262003de2565b5060c08301516200439c60c0840182519052565b5060e0830151620043ba60e0840182516001600160c01b0319169052565b5061010083810151805184830152602081015161012085015260408101516101408501525050610120830151610160620043f681850183519052565b61014085015161018085810191909152908501516101a08501528401519050620044256101c084018262003e17565b5092915050565b6000602082840312156200443f57600080fd5b8135620031308162004114565b6001600160c01b031991909116815260080190565b9283526020830191909152604082015260600190565b60c0815260006200448c60c083018962003b05565b8281036020840152620044a0818962003b05565b90508281036040840152620044b6818862003b05565b90508281036060840152620044cc818762003b05565b6080840195909552505060a00152949350505050565b6001600160a01b0391909116815260200190565b60006000198214156200450d576200450d62004082565b5060010190565b60018060a01b0381511682526020810151602083015260408101511515604083015260608101516200454a606084018262003de2565b506080810151608083015260a081015160a083015260c08101516200457360c084018262003de2565b5060e08101516200458860e084018262003de2565b5061010080820151620004bc8285018262003e17565b610220810162003f00828462004514565b60006102008284031215620045c357600080fd5b60405161010081016001600160401b0381118282101715620045e957620045e962003b85565b80604052508091508251620045fe8162003c37565b81526200460e6020840162003c4d565b60208201526040830151604082015260608301516060820152620046356080840162003c4d565b60808201526200464860a0840162003c4d565b60a08201526200465b60c0840162003c4d565b60c08201526200466f8460e0850162003c7b565b60e08201525092915050565b600061020082840312156200468f57600080fd5b620031308383620045af565b60018060a01b0380825116835280602083015116602084015260408201516040840152606082015160608401528060808301511660808401528060a08301511660a08401525060c08101516200084160c084018262003e17565b6101e0810162003f0082846200469b565b6000602082840312156200471957600080fd5b6200472362003bec565b9151825250919050565b6000602082840312156200474057600080fd5b6200474a62003bec565b90508151620047598162004114565b815292915050565b6000606082840312156200477457600080fd5b6200477e62003b9b565b905081518152602082015160208201526040820151604082015292915050565b60006102e08284031215620047b257600080fd5b620047bc62003c11565b620047c78362003c4d565b815260208301516020820152620047e16040840162003c4d565b604082015260608301516060820152620047fe6080840162003c6e565b60808201526200481160a0840162003c4d565b60a0820152620048258460c0850162004706565b60c0820152620048398460e085016200472d565b60e08201526101006200484f8582860162004761565b90820152610160620048648585830162004706565b610120830152610180808501516101408401526101a08501518284015262004891866101c0870162003c7b565b90830152509392505050565b60008219821115620048b357620048b362004082565b500190565b80516001600160a01b0316825260208082015115159083015260408082015190620048e69084018262003de2565b50606081015160608301526080810151608083015260a08101516200490f60a084018262003de2565b5060c08101516200457360c084018262003de2565b610220810162003f008284620048b8565b60006101e082840312156200494957600080fd5b60405160e081016001600160401b03811182821017156200496e576200496e62003b85565b80604052508091508251620049838162003c37565b81526020830151620049958162003c37565b8060208301525060408301516040820152606083015160608201526080830151620049c08162003c37565b6080820152620049d360a0840162003c4d565b60a0820152620049e78460c0850162003c7b565b60c08201525092915050565b60006101e0828403121562004a0757600080fd5b62003130838362004935565b6000610220828403121562004a2757600080fd5b62004a3162003bc6565b905062004a3e8262003c4d565b815262004a4e6020830162003c6e565b602082015262004a616040830162003c4d565b6040820152606082015160608201526080820151608082015262004a8860a0830162003c4d565b60a082015262004a9b60c0830162003c4d565b60c082015262004aaf8360e0840162003c7b565b60e082015262004ac3610200830162003c4d565b61010082015292915050565b6000610220828403121562004ae357600080fd5b62003130838362004a13565b6000825162004b0381846020870162003ad6565b9190910192915050565b60006020828403121562004b2057600080fd5b8151620031308162003c5f56fe60806040523480156200001157600080fd5b506040516200102938038062001029833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610ba980620004806000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063392f37e914610145578063395093511461014d57806342966c68146101605780635600f04f1461017357806370a082311461017b57806383197ef0146101a457806395d89b41146101ae578063a457c2d7146101b6578063a9059cbb146101c9578063dd62ed3e146101dc575b600080fd5b6100d26101ef565b6040516100df9190610965565b60405180910390f35b6100fb6100f63660046109d6565b610281565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b366004610a00565b610299565b60085460405160ff90911681526020016100df565b6100d26102bd565b6100fb61015b3660046109d6565b6102cc565b6100fb61016e366004610a3c565b61030b565b6100d2610368565b61010f610189366004610a55565b6001600160a01b031660009081526020819052604090205490565b6101ac610377565b005b6100d26103fc565b6100fb6101c43660046109d6565b61040b565b6100fb6101d73660046109d6565b61049d565b61010f6101ea366004610a77565b6104ab565b6060600380546101fe90610aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461022a90610aaa565b80156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b5050505050905090565b60003361028f8185856104d6565b5060019392505050565b6000336102a78582856105fb565b6102b2858585610675565b506001949350505050565b6060600780546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028f9082908690610306908790610afb565b6104d6565b6005546000906001600160a01b0316336001600160a01b03161461034a5760405162461bcd60e51b815260040161034190610b13565b60405180910390fd5b600554610360906001600160a01b031683610831565b506001919050565b6060600680546101fe90610aaa565b6005546001600160a01b0316336001600160a01b0316146103aa5760405162461bcd60e51b815260040161034190610b13565b600254156103ee5760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b6044820152606401610341565b6005546001600160a01b0316ff5b6060600480546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104905760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610341565b6102b282868684036104d6565b60003361028f818585610675565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105385760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166105995760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061060784846104ab565b9050600019811461066f57818110156106625760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b61066f84848484036104d6565b50505050565b6001600160a01b0383166106d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b038316600090815260208190526040902054818110156107b35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ea908490610afb565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b548339815191528460405161082491815260200190565b60405180910390a361066f565b6001600160a01b0382166108915760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610341565b6001600160a01b038216600090815260208190526040902054818110156109055760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610341565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610934908490610b3c565b90915550506040518281526000906001600160a01b03851690600080516020610b54833981519152906020016105ee565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b60008060408385031215610a8a57600080fd5b610a93836109ba565b9150610aa1602084016109ba565b90509250929050565b600181811c90821680610abe57607f821691505b60208210811415610adf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b0e57610b0e610ae5565b500190565b6020808252600f908201526e36bab9ba1031329031b932b0ba37b960891b604082015260600190565b600082821015610b4e57610b4e610ae5565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122075fbbc74cc74057280c4f4257ef73ac9cdaeb4c4bf898d9bcaa60254cc0997b064736f6c634300080c0033a26469706673582212207418dff1d5fc00d3527b68710b68a974e923c5133af09d1d90ece8f88e7928da64736f6c634300080c0033`,
  BytecodeLen: 24469,
  Which: `o1`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:68:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:88:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:99:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:107:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:110:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:115:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:118:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:125:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:125:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:88:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:99:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:107:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:110:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:115:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:118:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:125:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: './index.rsh:125:11:after expr stmt semicolon',
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
  "Platform": Platform,
  "RSVPier": RSVPier
  };
export const _APIs = {
  };
