import CardCount from '../common/components/CardCount';
import { useTranslation } from 'react-i18next';
import { stats } from '../constants';

const CountStat = () => {
    const { t } = useTranslation();
    return (
        <section className='w-full justify-center items-center sm:px-24 px-8 '>

            <div className='sm:flex grid grid-cols-1 sm:gap-6 gap-4 my-6'>
                {stats(t).map((stat, i) => (
                    <CardCount
                        key={i}
                        id={stat.id}
                        title={stat.tittle}
                        // value={stat.count} 
                        value="-- "
                    />
                ))}
            </div>
        </section>
    )
}

export default CountStat;