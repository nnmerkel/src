import { Fruit } from './fruit';

export const FRUITS: Fruit[] = [
  {
      id: 1,
      name: 'Apple',
      cssID: 'apple',
      info: {
          calories: '85',
          richIn: 'Vitamin C, fiber',
          funFact: 'there are more than 7,500 types of apples grown worldwide?'
      },
      votes: 0
  },
  {
      id: 2,
      name: 'Banana',
      cssID: 'banana',
      info: {
          calories: '105',
          richIn: 'Vitamin C, potassium',
          funFact: 'the average American eats 11.4 pounds of bananas every year?'
      },
      votes: 0
  },
  {
      id: 3,
      name: 'Orange',
      cssID: 'orange',
      info: {
          calories: '62',
          richIn: 'Vitamin C & B1',
          funFact: 'other than vanilla and chocolate, orange is the world\'s favorite flavor?'
      },
      votes: 0
  },
  {
      id: 4,
      name: 'Pineapple',
      cssID: 'pineapple',
      info: {
          calories: '83',
          richIn: 'Vitamin C, manganese',
          funFact: 'pineapples regenerate? You can plant pineapple leaves to grow a whole new plant!'
      },
      votes: 0
  }
];