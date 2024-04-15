import React from 'react';
import Button from '../../../../common/components/Button'
import { useFetchClaimRewards } from '../hooks/useFetchClaimRewards';
import { Skeleton, NotificationArgsProps, notification } from 'antd';

interface TokenHoldingsProps {
    balance: number;
    className?: string;
}

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';


const TokenHoldings: React.FC<TokenHoldingsProps> = ({ balance, className }) => {

    const { claimRewards, loading } = useFetchClaimRewards();
    const [api, contextHolder] = notification.useNotification();
    if (loading) {
        return (
            <div className="p-2 pt-4 pb-2 bg-white rounded-lg relative top-1">
                <Skeleton active />
                <div className="pt-2 pb-2">
                    <Skeleton active />
                </div>
            </div>
        );
    }

    const openNotification = (placement: NotificationPlacement, type: NotificationType) => {
        api[type]({
            message: claimRewards?.success ? "Success" : "Failed, Please Connect Your Wallet",
            description: claimRewards?.message,
            placement,
        });
    };
    return (
        <>
            {contextHolder}
            <div className={`p-8 rounded-lg w-full ${className}`}
                style={{
                    background: 'radial-gradient(124.83% 101.4% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(245, 200, 132, 0.12) 58.21%, rgba(255, 234, 202, 0.20) 100%)',
                    border: '1px solid #FF5C00',
                }}
            >

                <div className='flex justify-between items-center'>
                    <h1 className='text-primaryTextColor font-Poppins text-[20px] font-semibold'>Token Holdings</h1>
                    <div
                        className='flex gap-6'
                    >
                        <Button
                            style='m-0 font-Poppins'
                            title='Claim $Forge'
                            onClick={() => openNotification('top', claimRewards?.success ? 'success' : 'error')}
                        />
                        <Button
                            style='m-0 font-Poppins'
                            title='Claim $ETH'
                            onClick={() => openNotification('top', claimRewards?.success ? 'success' : 'error')}
                        />
                    </div>
                </div>
                <div className='bg-primary rounded-lg mt-8 p-4'
                    style={{
                        border: '1px solid #FF5C00',
                    }}
                >
                    <div className='flex justify-between'>
                        <p>
                            Wallet :
                        </p>
                        <p className='text-secondary font-Poppins'>
                            ${balance}
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default TokenHoldings;