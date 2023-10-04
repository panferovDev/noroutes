import React from 'react';
import Card from '../UI/Card';

export default function HomePage({ cards }) {
  return (
    <div className="mt-4 flex flex-wrap flex-row gap-2 w-12/12">
      {cards?.map((card) => <Card key={card.id} card={card} />)}
    </div>
  );
}
