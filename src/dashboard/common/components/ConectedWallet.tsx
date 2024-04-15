import  { useState, useEffect } from 'react';
import Button from './Button';
import { FaSignInAlt } from "react-icons/fa";
import { initWeb3Onboard } from '../../../onboard';
import { useConnectWallet } from '@web3-onboard/react'
// import type { Account } from './types'

initWeb3Onboard()

const ConnectedWallet = () => {
    const [{ wallet }] = useConnectWallet()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        if (storedLoginStatus) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleTestSign = async () => {
        console.log(`TODO: test sign`)
        if (!wallet) {
            console.error(`ethersProvider is undefined`)
            return
        }

        try {
            const result = await wallet.provider.request({ method: 'personal_sign', params: ['Please sign this message to confirm your identity.', wallet.accounts?.[0].address] })
            console.log(`result: `, result);
            setIsLoggedIn(true); 
            localStorage.setItem('isLoggedIn', 'true');
        } catch (error) {
            console.error(`error: `, error)
        }
    }

    return (
        <div className='flex p-4 rounded-sm w-[350px]'
            style={{
                background: 'rgba(255, 255, 255, 0.10)',
            }}
        >
            <div className='flex-col space-y-4'>
                <h1 className='text-[20px] font-semibold font-Poppins'>
                    Connect Wallet
                </h1>
                <p
                    className='text-[15px] font-Poppins text-dimWhite'
                > Current Connected Walet</p>

                {isLoggedIn && (
                    <p className='text-[12px] font-Poppins text-secondary'>
                        {wallet?.accounts?.[0]?.address}
                    </p>
                )}

                {wallet && !isLoggedIn && (
                    <Button
                        className='m-0 font-Poppins px-4 py-2'
                        onClick={() => { handleTestSign() }}
                        title='SignIn with this wallet'
                        icon={<FaSignInAlt size={20} />}
                    />
                )}
            </div>
        </div>
    );
}

export default ConnectedWallet;
