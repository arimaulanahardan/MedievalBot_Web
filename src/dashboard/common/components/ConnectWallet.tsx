import Button from './Button';
import { FaWallet } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { useConnectWallet } from '@web3-onboard/react';
import { initWeb3Onboard } from '../../../onboard';

initWeb3Onboard()

const ConnectWallet = () => {

    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
    return (
        <div className='rounded-xl flex gap-4 p-2 px-4 font-Poppins text-primaryTextColor' style={{ background: "rgba(255, 255, 255, 0.10)" }}>
            <div className='flex gap-4 items-center'>
                <h1 className=''>Dashboard</h1>
                <FaSquareXTwitter size={25} />
                <FaTelegramPlane size={25} />
            </div>

            <Button
                disable={connecting}
                className='p-2 px-4'
                onClick={() => (wallet ? disconnect(wallet) : connect())}
                title={connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect'}
                icon={<FaWallet size={20} />}
            />
           
        </div>
    );
}

export default ConnectWallet;
