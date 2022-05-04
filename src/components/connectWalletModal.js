import React, {useState} from 'react'
import {Row,  Col, Modal, Button, Form} from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect, ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
const stdlib = loadStdlib('ALGO');
stdlib.setWalletFallback(stdlib.walletFallback({
  providerEnv: 'TestNet', WalletConnect }));

const styles = StyleSheet.create({
  title: {
    color: '#A32896'
  },
  connectBtn: {
    backgroundColor: 'white',
    width: '90%',
    color: '#A32896',
    padding: '16px',
    fontWeight: 'bold',
    borderColor: '#A32896',
    margin: '10px 20px'
  },
  modal: {
    '@media (max-width: 575px)': {
      width: '90%',
      margin: '10px',
    }
  }
})

export default function ConnectWallet(props) {
  const [show, setShow] = useState(false);
  // const account = useRef()
  // const balance = useRef()


  //   const [accountBal, setAccountBal] = useState(0);
  //   const [accountAddress, setAccountAddress] = useState('');


  //   const connectWallet = async () =>{
  //       try{
  //           await getAccount()
  //           await getBalance()
                
  //       }catch(err){
  //           console.log(err)
  //       }
  //   }

  //   const getAccount = async () => {
  //       try{
  //          account.current = await reach.getDefaultAccount()
  //           setAccountAddress(account.current.networkAccount.addr)
  //           console.log("Account :" + account.current.networkAccount.addr)
  //       }catch(err){
  //           console.log(err)
  //       }
  //   }

  //   const getBalance = async () => {
  //       try{
  //             let rawBalance = await reach.balanceOf(account.current)
  //               balance.current = reach.formatCurrency(rawBalance, 4)
  //               setAccountBal(balance.current)
  //           console.log("Balance :" + balance.current)
  //       }catch(err){
  //           console.log(err)
  //       }
      
  //   }
  
  const connectWithMyAlgo = async () => {
      const acc = await stdlib.getDefaultAccount();
      // try {
      //   const faucet = await stdlib.getFaucet();
      //   stdlib.transfer(faucet, acc, stdlib.parseCurrency(100));
      // } catch (e) {
      //   console.error(e);
      // }
  }

  const walletConnect = async () => {  
      const acc = await stdlib.getDefaultAccount();
  }

  return(
    <div>
       <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered className={css(styles.modal)}>
        <Modal.Header closeButton>
          <Modal.Title className={css(styles.title)}>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button className={css(styles.connectBtn)} onClick={connectWithMyAlgo}>MyAlgo Wallet</Button>
          <Button className={css(styles.connectBtn)} onClick={walletConnect}>Pera Wallet </Button>
          <Button className={css(styles.connectBtn)}>MetaMask</Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}