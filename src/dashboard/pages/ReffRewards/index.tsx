import Layout from '../../common/components/Layout';
import ConnectedWallet from '../../common/components/ConectedWallet';
import CardEarned from './components/CardEarned';
import { TotalClaimedRewards } from './constans';
import Button from "../../../common/components/Button";
import TableBasic from "./components/TableHistories";
import GeneralReff from './components/GeneralReff';
import { useFetchClaimReffRewards } from '../ReffRewards/hooks/useFetchClaimReffRewards';
import { Skeleton, NotificationArgsProps, notification } from 'antd';
 

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';


const ReffRewards = () => {
    const { claimReffRewards, loading } = useFetchClaimReffRewards();
    const [api, contextHolder] = notification.useNotification();

    if (loading) {
        return (
            <div className="p-2 pt-4 pb-24 bg-white dark:bg-[#343541] rounded-lg relative top-1">
                <Skeleton active />
                <div className="pt-12 pb-12">
                    <Skeleton active />
                </div>
            </div>
        );
    }

    const openNotification = (placement: NotificationPlacement, type: NotificationType) => {
        api[type]({
            message: claimReffRewards?.success ? "Success" : "Failed, Please Connect Your Wallet",
            description: claimReffRewards?.message,
            placement,
        });
    };

    return (
        <>
            {contextHolder}
            <Layout>
                <section className='text-primaryTextColor font-Poppins flex justify-between gap-8 bg-primary'>
                    <div className='w-full space-y-4'>
                        <h1 className='text-xl font-bold font-Poppins text-primaryTextColor'>Referral Rewards</h1>
                        <p className='text-[18px] font-normal font-Poppins text-dimWhite'>
                            If someone uses your referral link 10% of all their transaction fees will be claimable for you. Referral codes are written into every swap transaction and rewards data is processed directly from the blockchain. You can check your referral rewards by signing in with the same wallet on the dashboard. Rewards data updates every 2 hours. Minimum claim is 0.05 eth.
                        </p>
                        <div className='flex w-full gap-4'>
                            {TotalClaimedRewards.map((reward, i) => (
                                <div key={i}>
                                    <CardEarned
                                        title={reward.title}
                                        amount={reward.amount}
                                        pair={reward.pair}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <Button
                                style='m-0 font-Poppins px-4 py-2'
                                title='Claim Rewards'
                                onClick={() => openNotification('top', claimReffRewards?.success ? 'success' : 'error')}
                            />
                        </div>
                        <div className='w-full pt-4 space-y-4'>
                            <h1 className='text-[18px] font-normal font-Poppins text-primaryTextColor'>
                                Reward History
                            </h1>
                            <div>
                                <TableBasic />
                            </div>
                        </div>
                    </div>
                    <aside className='mt-8'>
                        <div className='flex'>
                            <ConnectedWallet />
                        </div>
                        <div className='mt-8'>
                            <GeneralReff
                                className='w-[350px] px-6'
                                title='Referral Rewards'
                                description='If someone uses your referral link 10% of all their transaction fees will be claimable for you. Referral codes are written into every swap transaction and rewards data is processed directly from the blockchain. You can check your referral rewards by signing in with the same wallet on the dashboard. Rewards data updates every 2 hours. Minimum claim is 0.05 eth.'
                            />
                        </div>
                    </aside>
                </section>
            </Layout>
        </>
    );
}

export default ReffRewards;
