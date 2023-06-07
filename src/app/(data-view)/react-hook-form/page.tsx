'use client';
import Table from '@/components/Table';
import { successNotify } from '@/utils/toast';
import { Button } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const defaultValues = {
  date: dayjs().format('YYYY-MM-DD'),
  user: '',
  customer: '',
  content: '',
  price: 0,
  manufacturingCost: 0,
  otherCost: 0,
  invoiceCost: 0,
};

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  console.log(watch('date'));
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // on initialization
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/fetch');
        const data = await res.json();
        setData(data.data);
      } catch (e) {
        console.log('🚀 ~ e:', e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onSubmit = async (data: any) => {
    try {
      const rawResponse = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const content = await rawResponse.json();
      successNotify();
      reset();
    } catch (e) {
      console.log('🚀 ~ e:', e);
    }
  };

  return (
    <>
      <form className='bg-white p-8 rounded-xl max-w-[480px] h-fit'>
        <div className='grid grid-cols-2 gap-4'>
          <div className=''>
            <label htmlFor='date' className='font-semibold'>
              日期
            </label>
            <div className='relative'>
              <input type='date' id='date' {...register('date', { required: true })} />
            </div>
          </div>

          <div className=''>
            <label htmlFor='user' className='font-semibold'>
              使用者
            </label>
            <div className='relative'>
              <input
                type='text'
                id='user'
                className='peer'
                placeholder='user'
                {...register('user')}
              />
              <span className='input-focus-bg peer-focus:w-full' />
            </div>
          </div>
          <div className='col-span-2'>
            <label htmlFor='customer' className='font-semibold'>
              客戶
            </label>
            <div className='relative'>
              <input
                type='text'
                id='customer'
                className='peer'
                placeholder='customer'
                {...register('customer', { required: true })}
              />
              <span className='input-focus-bg peer-focus:w-full' />
            </div>
          </div>

          <div className='col-span-2'>
            <label htmlFor='content' className='font-semibold'>
              訂單內容
            </label>
            <div className='relative'>
              <textarea
                id='content'
                placeholder='content'
                {...register('content', { required: true })}
              />
            </div>
          </div>

          <div className=''>
            <label htmlFor='price' className='font-semibold'>
              售價
            </label>
            <div className='relative'>
              <input
                type='number'
                id='price'
                className='peer'
                placeholder='price'
                {...register('price', { required: true })}
              />
              <span className='input-focus-bg peer-focus:w-full' />
            </div>
          </div>

          <div className=''>
            <label htmlFor='manufacturingCost' className='font-semibold'>
              製作成本
            </label>
            <div className='relative'>
              <input
                type='number'
                id='manufacturingCost'
                className='peer'
                placeholder='manufacturingCost'
                {...register('manufacturingCost', { required: true })}
              />
              <span className='input-focus-bg peer-focus:w-full' />
            </div>
          </div>

          <div className=''>
            <label htmlFor='otherCost' className='font-semibold'>
              其他成本
            </label>
            <div className='relative'>
              <input
                type='number'
                id='otherCost'
                className='peer'
                placeholder='otherCost'
                {...register('otherCost', {})}
              />
              <span className='input-focus-bg peer-focus:w-full' />
            </div>
          </div>

          <div className=''>
            <label htmlFor='invoiceCost' className='font-semibold'>
              發票成本
            </label>
            <div className='relative'>
              <input
                type='number'
                id='invoiceCost'
                className='peer'
                placeholder='invoiceCost'
                {...register('invoiceCost', {})}
              />
              <span className='input-focus-bg peer-focus:w-full' />
            </div>
          </div>

          <Button
            // loading={loading}
            onClick={handleSubmit(onSubmit)}
            className='col-span-2 text-white bg-primary px-3 py-2 rounded-lg'
          >
            送出
          </Button>
        </div>
      </form>
      <Table className='grow bg-white h-fit' data={data} loading={loading} />
    </>
  );
}
