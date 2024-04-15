import Layout from '../../common/components/Layout';
import TokenHoldings from '../Rewards/components/TokenHoldings';
import ConnectedWallet from '../../common/components/ConectedWallet';
import { FAQ } from "./constans"
import FAQSection from './components/FAQ'
import TableBasic from './components/TableHistories'
import { useFetchCurrentYield } from './hooks/useFetchCurrentYield';
import {Skeleton} from "antd";

const Rewards = () => {
    const { currentYield, loading } = useFetchCurrentYield();

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

    return (
        <Layout>
            <section className='text-primaryTextColor font-Poppins flex justify-between gap-8 bg-primary'>
                <div className='w-full'>
                    <h1
                        className='text-xl font-bold font-Poppins text-primaryTextColor'
                    >Current APY :
                        <span className='text-secondary font-Poppins'>
                            {' '}{currentYield?.rewardRate}%
                        </span>

                    </h1>
                    <TokenHoldings
                        balance={1000}
                        className='mt-4'
                    />
                    <div className='w-full pt-8 space-y-4'>
                        <h1 className='text-[18px] font-normal font-Poppins text-primaryTextColor'>
                            Claimed Reward
                        </h1>
                        <div>
                            <TableBasic />
                        </div>
                    </div>
                </div>

                <aside className='mt-12'>
                    <div className='flex'>
                        <ConnectedWallet />
                    </div>
                    <div className='mt-8'
                        style={{
                            background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
                        }}
                    >
                        {FAQ.map((faq, i) => (
                            <FAQSection
                                key={i}
                                title={faq.title}
                                description={faq.description}
                            />
                        ))}
                    </div>
                </aside>
            </section>
        </Layout>
    );
}

export default Rewards;