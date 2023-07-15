'use client';

import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu as AntdMenu } from 'antd';
import React, { useState } from 'react';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    label: '首頁',
    key: 'home',
    icon: <HomeOutlined />,
  },

  {
    label: '使用者',
    key: 'user',
    icon: <UserOutlined />,
    children: [
      {
        label: <Link href='/taco-form'>Taco</Link>,
        key: 'taco',
      },
      {
        label: <Link href='/allen-form'>Allen</Link>,
        key: 'allen',
      },
    ],
  },
];

const Menu: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return <AntdMenu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />;
};

export default Menu;
