import React, { useState, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const stdlib = loadStdlib('ALGO');
stdlib.setWalletFallback(stdlib.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

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
  const account = useRef()
  const balance = useRef()

  const connectWithMyAlgoWallet  = async () =>{
      try{
          await getAccount()
          await getBalance()
              
      }catch(err){
          console.log(err)
      }
  }

  const getAccount = async () => {
      try{
          account.current = await stdlib.getDefaultAccount()
          setAccountAddress(account.current.networkAccount.addr)
          console.log("Account :" + account.current.networkAccount.addr)
      }catch(err){
          console.log(err)
      }
  }

    const getBalance = async () => {
        try{
              let rawBalance = await stdlib.balanceOf(account.current)
                balance.current = stdlib.formatCurrency(rawBalance, 4)
                setAccountBal(balance.current)
            console.log("Balance :" + balance.current)
        }catch(err){
            console.log(err)
        }
      
    }

  return(
    <div>
       <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered className={css(styles.modal)}>
        <Modal.Header closeButton>
          <Modal.Title className={css(styles.title)}>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button className={css(styles.connectBtn)} onClick={connectWithMyAlgoWallet}>MyAlgo Wallet</Button>
          <Button className={css(styles.connectBtn)} onClick={connectWithMyAlgoWallet}>Pera Wallet </Button>
          <Button className={css(styles.connectBtn)}>MetaMask</Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}