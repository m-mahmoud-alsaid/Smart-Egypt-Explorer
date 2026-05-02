import RequestCard from './RequestCard';
import TheInfoCard from './TheInfoCard';

function CardList({ mode = 'request', cardListInfo = [] }) {
    return (
        <div className='grid gap-8 
        grid-cols-[repeat(auto-fill,minmax(250px,1fr))]
        sm:grid-cols-[repeat(auto-fill,minmax(450px,1fr))]'>
            {cardListInfo.map((value, index) =>
                mode === 'request' ? (
                    <RequestCard key={index} requestInfoList={value} />
                ) : (
                    <TheInfoCard key={index} requestInfoList={value} />
                )
            )}
        </div>
    );
}

export default CardList;