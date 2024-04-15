import { ConfigProvider, Table} from 'antd';
import { useFetchDataHistory } from '../hooks/useFetchDataHistory';


const TableBasic: React.FC = () => {
  const { rewardHistory, loading } = useFetchDataHistory();
  return (
    <div>
      <ConfigProvider renderEmpty={() => <div>There is no data</div>} theme={{
        components: {
          Table: {
            borderColor: 'white',
            headerBg: 'radial-gradient(124.83% 101.4% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(245, 200, 132, 0.12) 58.21%, rgba(255, 234, 202, 0.20) 100%)',
            headerColor: 'white',
            colorBgContainer: 'none',
            colorText: 'white',
          },
          Pagination: {
            itemActiveBg: '#FF5C00', 
            colorText:"white",
            colorPrimary:"none",
            colorPrimaryBorder:"white",
            colorPrimaryHover:"white",
            colorTextDisabled:"rgba(142, 142, 142, 1)",
          },
        },
      }}
      >
        <Table
        loading={loading}
        dataSource={rewardHistory?.map((history, index) => ({
          key: index,
          ...history
        }))}
        columns={[
          {
            title:"Date",
            dataIndex:"date",
            key:"date",
          },
          {
            title:"Amount",
            dataIndex:"amount",
            key:"amount",
          },
          {
            title:"Reward Method:",
            dataIndex:"rewardMethod",
            key:"rewardMethod:",
          },
        ]}
          pagination={
            {
              defaultCurrent: 5,
              pageSize: 5,
            }
          }
          bordered={true}
        />
      </ConfigProvider>
    </div>
  )
}


export default TableBasic;