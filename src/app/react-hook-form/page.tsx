'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    const rawResponse = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const content = await rawResponse.json();
    console.log('🚀 ~ content:', content);
  };
  // console.log(errors);

  return (
    <form className='bg-white p-8 rounded-xl max-w-[480px]' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-2 gap-4'>
        <div className=''>
          <label htmlFor='date' className='font-semibold'>
            日期
          </label>
          <div className='relative'>
            <input type='date' id='date' {...register('date', { required: true })} />
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
      </div>
      <button type='submit'>submit</button>
    </form>
  );
}
