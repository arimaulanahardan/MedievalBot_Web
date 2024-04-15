import { ConfigProvider, Table} from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  time: string;
  amountETH: number;
  minAmountForge: number;
  status: string;
  transactionHash: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Time',
    dataIndex: 'time',
  },
  {
    title: 'Amount $ETH',
    dataIndex: 'amountETH',
  },
  {
    title: 'Min Amount $Forge',
    dataIndex: 'minAmountForge',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Transaction Hash',
    dataIndex: 'transactionHash',
    className: 'text-secondary',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    time: `2021-10-01 12:0${i}`,
    amountETH: 1000,
    minAmountForge: 1000,
    status: 'Completed',
    transactionHash: '0x123sxx0x00013496193091u212jbfjsdbf',
  });
}

const TableBasic: React.FC = () => {

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
          columns={columns}
          dataSource={data}
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