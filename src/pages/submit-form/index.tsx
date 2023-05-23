import React, { useState } from 'react';

export default function Home() {
  const [price, setPrice] = useState<string>();

  return (
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
      <input name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
      <button>OKK</button>
    </form>
  );
}
3;
