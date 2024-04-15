// endpoint http://138.197.116.196:3006/rewards/referralClaim with method POSTand body request is IWalletAddress and response is IClaimReffRewards
import {IClaimReffRewards} from '../interfaces/ReffRewards';
import { useCallback, useEffect, useState } from "react";
import ClaimReffRewards from "../hooks/mocks/ClaimReffRewards.json";
import { initWeb3Onboard } from '../../../../onboard';
import { useConnectWallet } from '@web3-onboard/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

initWeb3Onboard();

const mock = new MockAdapter(axios);
mock.onPost('http://138.197.116.196:3006/rewards/referralClaim').reply(200, ClaimReffRewards);

export function useFetchClaimReffRewards ()  {
    const [{ wallet }] = useConnectWallet();
    const [claimReffRewards, setClaimReffRewards] = useState<IClaimReffRewards>();
    const [loading, setLoading] = useState<boolean>(false);
    const [walletAddress, setWalletAddress] = useState<string | undefined>(undefined);
    
    const fetchClaimReffRewards = useCallback(async () => {
        try {
            setLoading(true);
            if (walletAddress) {     
                const response = await axios.post('http://138.197.116.196:3006/rewards/referralClaim', { walletAddress });
                const data = response.data;
                console.log(data, "data");
                console.log(response, "response");
                setClaimReffRewards(data);
            } 
        } catch (error) {
            console.error("Error fetching claim referral rewards:", error);
        } finally {
            setLoading(false);
        }
    },[walletAddress]);

    useEffect(() => {
        if (wallet) {
            setWalletAddress(wallet.accounts[0]?.address);
        }
    }, [wallet]);

    useEffect(() => {
        fetchClaimReffRewards();
    }, [fetchClaimReffRewards]);

    useEffect(() => {
        if (walletAddress) {
            fetchClaimReffRewards();
        }
    }, [walletAddress]);

    return {
        claimReffRewards,
        loading,
        fetchClaimReffRewards
    };
}
