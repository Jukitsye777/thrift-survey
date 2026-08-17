const quips = [
  'YOUR EX MOVED ON. SO DID THIS JACKET.',
  'PRE-OWNED. UNLIKE YOUR TASTE.',
  'LUXURY IS KNOWING YOU DIDN’T PAY RETAIL.',
  'SECOND-HAND. FIRST-CLASS TASTE.',
  'DRESS LIKE YOU HAVE TASTE. SPEND LIKE YOU HAVE RENT.',
  'RETAIL THERAPY, WITHOUT THE RETAIL PRICES.',
  'A LITTLE WORN. A LOT MORE INTERESTING.',
  'BUY LESS. FIND BETTER. PRETEND YOU PAID MORE.'
];

export function ThriftQuip({ index = 0, compact = false }) {
  return <aside className={`thrift-quip ${compact ? 'compact' : ''}`} aria-label="Second Story thought"><span className="quip-spark">✦</span><span>{quips[index % quips.length]}</span></aside>;
}

export function QuipTicker() {
  const line = 'GOOD CLOTHES DESERVE A SECOND OWNER • NEW DOESN’T AUTOMATICALLY MEAN BETTER • WEAR SOMETHING WITH A PAST • ';
  return <div className="quip-ticker" aria-hidden="true"><div>{line}{line}</div></div>;
}
