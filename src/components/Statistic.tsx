import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic as AntdStatistic } from 'antd';

interface Props {
  storedBalance: number;
  totalPrice: number;
  totalBenefit: number;
}

const Statistic: React.FC<Props> = ({ storedBalance, totalPrice, totalBenefit }) => (
  <Row gutter={16} className='mb-4'>
    <Col span={8}>
      <Card bordered={false} size='small'>
        <AntdStatistic title='儲值餘額' value={storedBalance} valueStyle={{ color: '#3f8600' }} />
      </Card>
    </Col>
    <Col span={8}>
      <Card bordered={false} size='small'>
        <AntdStatistic title='總計' value={totalPrice} valueStyle={{ color: '#cf1322' }} />
      </Card>
    </Col>
    <Col span={8}>
      <Card bordered={false} size='small'>
        <AntdStatistic title='獲利' value={totalBenefit} valueStyle={{ color: '#cf1322' }} />
      </Card>
    </Col>
  </Row>
);

export default Statistic;
