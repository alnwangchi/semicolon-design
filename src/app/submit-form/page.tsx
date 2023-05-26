'use client';
import React, { useState } from 'react';
export default function Page() {
  const [price, setPrice] = useState<string>();

  return (
    <section className='bg-primary min-h-screen'>
      <div className='bg-white rounded p-4'>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            let form = {
              price,
            };

            const rawResponse = await fetch('/api/submit', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(form),
            });

            const content = await rawResponse.json();
            console.log('🚀 ~ content:', content);
          }}
        >
          <div className='grid gap-4 grid-cols-2 grid-rows-4'>
            <input type='date' name='date' value={price} />
            <input type='text' name='customer' value={price} />
            <textarea name='content' value={price} className=' resize-none' />
            <input type='number' name='price' value={price} />
            <input type='number' name='manufacturingCost' value={price} />
            <input type='number' name='otherCost' value={price} />
            <input type='number' name='invoiceCost' value={price} />
          </div>
          <button className='p-5 text-white'>OKK</button>
        </form>
      </div>
    </section>
  );
}
