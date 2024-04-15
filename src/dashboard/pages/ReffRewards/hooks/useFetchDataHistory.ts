import { useCallback, useEffect, useState } from "react";
import { IRewardHistory } from "../interfaces/ReffRewards";
import { initWeb3Onboard } from '../../../../onboard';
import { useConnectWallet } from '@web3-onboard/react';

initWeb3Onboard();

export function useFetchDataHistory ()  {
    const [{ wallet }] = useConnectWallet();
    const [rewardHistory, setRewardHistory] = useState<IRewardHistory[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [walletAddress, setWalletAddress] = useState<string | undefined>(undefined);
   
    const fetchRewardHistory = useCallback(async () => {
        try {
            setLoading(true);
            if (walletAddress) {
                const queryParams = new URLSearchParams({ walletAddress });
                const response = await fetch(`http://138.197.116.196:3006/rewards/history?${queryParams}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch reward history");
                }
                const data = await response.json();
                setRewardHistory(data.claims);
            }
        } catch (error) {
            console.error("Error fetching reward history:", error);
        } finally {
            setLoading(false);
        }
    }, [walletAddress]);

    useEffect(() => {
        if (wallet) {
            setWalletAddress(wallet.accounts[0]?.address);
        }
    }, [wallet]);

    useEffect(() => {
        fetchRewardHistory();
    }, [fetchRewardHistory]);

    useEffect(() => {
        if (walletAddress) {
            fetchRewardHistory();
        }
    }, [walletAddress]);

    return {
        rewardHistory,
        loading,
        fetchRewardHistory
    };
};
