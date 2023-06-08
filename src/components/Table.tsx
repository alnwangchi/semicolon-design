import { Table as AntdTable, DatePicker } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: React.Key;
  date: string;
  customer: string;
  content: string;
  price: number;
  manufacturingCost: number;
  otherCost: number;
  invoiceCost: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: '日期',
    dataIndex: 'date',
    width: '15%',
    sorter: {
      compare: (a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      },
    },
  },
  {
    title: '客戶',
    dataIndex: 'customer',
    width: '15%',
  },
  {
    title: '訂單內容',
    dataIndex: 'content',
    width: '30%',
  },
  {
    title: '售價',
    dataIndex: 'price',
    width: '16%',
    sorter: {
      compare: (a, b) => a.price - b.price,
    },
  },
  {
    title: '製作成本',
    dataIndex: 'manufacturingCost',
    width: '8%',
    sorter: {
      compare: (a, b) => a.manufacturingCost - b.manufacturingCost,
    },
  },
  {
    title: '其他成本',
    dataIndex: 'otherCost',
    width: '8%',
    sorter: {
      compare: (a, b) => a.otherCost - b.otherCost,
    },
  },
  {
    title: '發票成本',
    dataIndex: 'invoiceCost',
    width: '8%',
    sorter: {
      compare: (a, b) => a.invoiceCost - b.invoiceCost,
    },
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

interface Props {
  data: DataType[];
  loading?: boolean;
  className?: string;
}

const Table: React.FC<Props> = ({ data, loading = true, className }) => {
  console.log(data);
  return (
    <div className={`${className}`}>
      {<AntdTable columns={columns} dataSource={data} onChange={onChange} loading={loading} />}
    </div>
  );
};

export default Table;
