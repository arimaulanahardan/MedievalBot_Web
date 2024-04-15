// endpoint http://138.197.116.196:3006/rewards/claim with method POST
import {useCallback, useEffect, useState} from "react";
import {IClaimRewards} from "../interfaces/Rewards";
import ClaimRewards from "../hooks/mocks/ClaimRewards.json";
import {initWeb3Onboard} from '../../../../onboard';
import {useConnectWallet} from '@web3-onboard/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

initWeb3Onboard();

const mock = new MockAdapter(axios);
mock.onPost('http://138.197.116.196:3006/rewards/claim').reply(200, ClaimRewards);

export function useFetchClaimRewards ()  {
    const [{ wallet }] = useConnectWallet();
    const [claimRewards, setClaimRewards] = useState<IClaimRewards>();
    const [loading, setLoading] = useState<boolean>(false);
    const [walletAddress, setWalletAddress] = useState<string | undefined>(undefined);
    
    const fetchClaimRewards = useCallback(async () => {
        try {
            setLoading(true);
            if (walletAddress) {
                const response = await axios.post('http://138.197.116.196:3006/rewards/claim', { walletAddress });
                if (!response.status) {
                    throw new Error("Failed to fetch claim rewards");
                }
                const data = response.data;
                setClaimRewards(data);
            }
        } catch (error) {
            console.error("Error fetching claim rewards:", error);
        }
        finally {
            setLoading(false);
        }
    }
    ,[walletAddress]);

    useEffect(() => {
        if (wallet) {
            setWalletAddress(wallet.accounts[0]?.address);
        }
    }, [wallet]);

    useEffect(() => {
        fetchClaimRewards();
    }, [fetchClaimRewards]);

    useEffect(() => {
        if (walletAddress) {
            fetchClaimRewards();
        }
    }, [walletAddress]);

    return { claimRewards, loading, walletAddress, setWalletAddress };
}
