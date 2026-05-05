import RequestCard from './RequestCard';
import TheInfoCard from './TheInfoCard';

function CardList({ mode = 'request', cardListInfo = [], onApprove, onReject, type }) {
    return (
        <div className='grid gap-8 
        grid-cols-[repeat(auto-fill,minmax(250px,1fr))]
        sm:grid-cols-[repeat(auto-fill,minmax(450px,1fr))]'>
            {cardListInfo.map((value) =>
                mode === 'request' ? (
                    <RequestCard
                        key={value.dashboardUserId}
                        requestInfoList={value}
                        type={type}
                        onApprove={() => onApprove(value.dashboardUserId)}
                        onReject={() => onReject(value.dashboardUserId)} />
                ) : (
                    <TheInfoCard
                        key={value.dashboardUserId}
                        infoItem={value}
                        type={type}
                        onHide={() => onApprove(value.dashboardUserId)}
                        onDelete={() => onReject(value.dashboardUserId)} />
                )
            )}
        </div>
    );
}

export default CardList;