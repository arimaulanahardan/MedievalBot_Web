import CardCount from '../common/CardCount';
import { stats } from '../constants';

const CountStat = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center mb-10'>

            <div className='flex gap-10 '>
                {stats.map((stat, i) => (
                    <CardCount
                        key={stat.id}
                        id={stat.id}
                        title={stat.title}
                        value={stat.value}
                    />
                ))}
            </div>
        </section>
    )
}

export default CountStat;