export const questions = [
  { id: 'age', title: 'How old are you?', options: ['Under 18', '18–22', '23–27', '28–35', 'Above 35'] },
  { id: 'profile', title: 'What best describes you?', options: ['Student', 'Working Professional', 'Business Owner', 'Freelancer', 'Other'] },
  { id: 'boughtThrift', title: 'Have you ever bought second-hand (thrift) fashion?', options: ['Yes', 'No'] },
  { id: 'thriftSources', title: 'If yes, where have you bought thrift products from?', multiple: true, show: answers => answers.boughtThrift === 'Yes', options: ['Instagram', 'Friends', 'Local Thrift Stores', 'Facebook Marketplace', 'OLX', 'Other'] },
  { id: 'noThriftReason', title: 'If you have never bought thrift fashion, what is the biggest reason?', multiple: true, show: answers => answers.boughtThrift === 'No', options: ['Hygiene concerns', 'Fake products', 'Poor quality', 'No trusted platform', 'Difficult to find good items', 'Never considered it', 'Other'] },
  { id: 'soldOldItems', title: 'Have you ever sold your old clothes, shoes, or accessories?', options: ['Yes', 'No'] },
  { id: 'noSellReason', title: "If you haven't sold them, why not?", multiple: true, show: answers => answers.soldOldItems === 'No', options: ['Too much effort', "Didn't know where to sell", 'Low resale value', 'Never thought about it', 'Other'] },
  { id: 'onlineThriftBarriers', title: 'What would stop you from buying thrift items online?', multiple: true, options: ['Fake products', 'Poor condition', 'Wrong size', 'No returns', 'Payment scams', 'Bad seller', 'Delivery issues', 'Hygiene concerns', 'Other'] },
  { id: 'inspectionPriorities', title: 'Which type of inspection matters the most to you?', multiple: true, options: ['Originality / Authenticity', 'Product Condition', 'Cleanliness', 'Functional Check', 'Photos Match Reality'] },
  { id: 'jordanDecision', title: 'Imagine this scenario...', detail: 'A brand-new pair of Air Jordans costs ₹11,000.\n\nA professionally inspected thrift pair in excellent condition is available for ₹7,000.\n\nWould you buy it?', options: ['Definitely Yes', 'Probably Yes', 'Maybe', 'Probably Not', 'Definitely Not'] },
  { id: 'productInterests', title: 'What kinds of products would you be interested in buying or selling?', multiple: true, options: ['Sneakers', 'Hoodies', 'T-Shirts', 'Jackets', 'Jeans', 'Watches', 'Bags', 'Accessories'] },
  { id: 'priceNegotiation', title: 'Would you like the ability to negotiate prices with sellers through the app?', options: ['Yes', 'No'] },
  {
    id: 'launchIntent',
    title: 'If this app launched tomorrow, would you download it?',
    detail: 'A trusted marketplace for buying and selling second-hand fashion with verified sellers, inspected products, secure payments, and buyer protection.',
    options: ['Yes, I would download it', 'Probably', 'Maybe, I would check it out', 'Probably not', 'No']
  },
  {
    id: 'finalThoughts',
    title: 'What would make you actually choose this app over buying from a normal store or existing second-hand platforms?',
    text: true
  },
  {
    id: 'appFrequency',
    title: 'If you liked the products and prices, how often would you expect to use the app?',
    options: ['Multiple times a month', 'About once a month', 'Every 2–3 months', 'A few times a year', 'Only when I need something specific']
  },
  {
    id: 'appSwitch',
    title: 'Would you consider using this platform instead of Instagram, OLX, Facebook Marketplace, or other places where you currently find second-hand items?',
    options: ['Definitely', 'Probably', 'Maybe', 'Probably Not', 'Definitely Not']
  }
];
