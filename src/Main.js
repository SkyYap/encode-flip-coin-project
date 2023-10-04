import React, { useCallback, useState, useEffect } from 'react'
import './App.css';
import { Button, Flex, Text, Image, Box } from '@chakra-ui/react';
import panel_sol_amount from "resources/panel/ui_panel_sol.png";
import main_logo_apes from "resources/logo/ui_icon_coinfliplogo.png";
import CoinFlipGameplay from 'component/coinflipscreen/CoinFlipGameplay';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Connection, PublicKey, LAMPORTS_PER_SOL, TransactionSignature } from '@solana/web3.js';

const Main = () => {
    const { connected, wallet, publicKey } = useWallet();
    const { setVisible } = useWalletModal();

    const { disconnect } = useWallet();
    const onClickLogout = useCallback(async () => {
        disconnect()
    })

    const onRequestConnectWallet = () => {
        setVisible(true);
    };

    const { connection } = useConnection();
    const [balance, setBalance] = useState(0);

    const getUserSOLBalance = async (publicKey: PublicKey, connection: Connection) => {
        let balance = await connection.getBalance(publicKey);
        setBalance(balance / LAMPORTS_PER_SOL)
    }

    useEffect(() => {
        if (publicKey) {
            getUserSOLBalance(wallet.publicKey, connection)
        }
    }, [publicKey, connection, getUserSOLBalance])


    return (
        <div className="App">
            <header className="App-header">
                <Flex width={'100%'} mt={10} mr={10} justifyContent={'flex-end'} alignItems={"flex-end"}>

                    <Flex width={'225px'} height={'62px'} bgImage={panel_sol_amount} mr={10} justifyContent={'flex-end'} alignItems={"flex-end"} >
                        <Text as={'b'} color={'black'} mr={'30px'} mb={'5px'} fontSize={25}>SOL 0.0000</Text>
                    </Flex>
                    <Button
                        backgroundColor={'#555da8'}
                        height={'50px'}
                        borderColor={'white'}
                        borderWidth={1}
                        borderRadius={0}
                        onClick={connected ? disconnect : onRequestConnectWallet}>
                        {connected ? "LOGOUT" : "SELECT WALLET"}
                    </Button>
                </Flex>

                {connected ?
                    <CoinFlipGameplay /> :
                    <Flex flexDir={'column'}>
                        <Image src={main_logo_apes} alt='Dan Abramov' />

                        <Flex height={'90px'} width={'100%'}
                            backgroundColor={'#555da8'}
                            mt={10}
                            borderColor={'white'}
                            borderWidth={1}
                            borderRadius={20}
                            fontSize={30}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            CONNECT TO YOUR WALLET TO BEGIN
                        </Flex>
                    </Flex>
                }
            </header>
        </div>
    )
}

export default Main
