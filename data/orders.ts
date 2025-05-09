export const orders = [
  {
    id: 'ORD12345',
    date: 'Oct 12, 2025',
    status: 'processing',
    total: 43.98,
    products: [
      {
        id: '1',
        name: 'Organic Ashwagandha',
        price: 24.99,
        quantity: 1,
        image: 'https://images.pexels.com/photos/6765828/pexels-photo-6765828.jpeg',
      },
      {
        id: '5',
        name: 'Ginger Root',
        price: 8.99,
        quantity: 2,
        image: 'https://images.pexels.com/photos/7489243/pexels-photo-7489243.jpeg',
      }
    ]
  },
  {
    id: 'ORD12278',
    date: 'Sep 28, 2025',
    status: 'shipped',
    total: 49.99,
    products: [
      {
        id: 'plan1',
        name: 'Sleep Better Bundle',
        price: 49.99,
        quantity: 1,
        image: 'https://images.pexels.com/photos/6580196/pexels-photo-6580196.jpeg',
      }
    ]
  },
  {
    id: 'ORD11985',
    date: 'Sep 05, 2025',
    status: 'delivered',
    total: 34.98,
    products: [
      {
        id: '4',
        name: 'Lavender Bundle',
        price: 12.99,
        quantity: 1,
        image: 'https://images.pexels.com/photos/4210341/pexels-photo-4210341.jpeg',
      },
      {
        id: '7',
        name: 'Chamomile Flowers',
        price: 14.99,
        quantity: 1,
        image: 'https://images.pexels.com/photos/14963946/pexels-photo-14963946.jpeg',
      },
      {
        id: '5',
        name: 'Ginger Root',
        price: 8.99, 
        quantity: 1,
        image: 'https://images.pexels.com/photos/7489243/pexels-photo-7489243.jpeg',
      }
    ]
  }
];