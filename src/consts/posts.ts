export type PostsType = {
  title: string;
  data: string;
  category: string[];
  photos: string[];
  text: string;
};

export const posts = [
  {
    title: 'Новый год 2024',
    data: '2023 год',
    category: ['all', 'nizh'],
    photos: [
      '/nizh/ny2024/0.jpg',
      '/nizh/ny2024/1.jpg',
      '/nizh/ny2024/2.jpg',
      '/nizh/ny2024/3.jpg',
      '/nizh/ny2024/4.jpg',
      '/nizh/ny2024/5.jpg',
      '/nizh/ny2024/6.jpg',
      '/nizh/ny2024/7.jpg',
      '/nizh/ny2024/8.jpg',
      '/nizh/ny2024/9.jpg',
      '/nizh/ny2024/10.jpg',
      '/nizh/ny2024/11.jpg',
      '/nizh/ny2024/12.jpg',
      '/nizh/ny2024/13.jpg',
      '/nizh/ny2024/14.jpg',
      '/nizh/ny2024/15.jpg',
    ],
    text: 'Текст про Новый год',
  },
  {
    title: 'Макарий',
    data: '2023 год',
    category: ['all', 'nizh'],
    photos: [
      '/nizh/makaryi/0.jpg',
      '/nizh/makaryi/1.jpg',
      '/nizh/makaryi/2.jpg',
      '/nizh/makaryi/3.jpg',
      '/nizh/makaryi/4.jpg',
      '/nizh/makaryi/5.jpg',
      '/nizh/makaryi/6.jpg',
      '/nizh/makaryi/7.jpg',
      '/nizh/makaryi/8.jpg',
      '/nizh/makaryi/9.jpg',
      '/nizh/makaryi/10.jpg',
      '/nizh/makaryi/11.jpg',
      '/nizh/makaryi/12.jpg',
      '/nizh/makaryi/13.jpg',
      '/nizh/makaryi/14.jpg',
      '/nizh/makaryi/15.jpg',
      '/nizh/makaryi/16.jpg',
      '/nizh/makaryi/17.jpg',
    ],
    text: 'Текст про Макарий',
  },
  {
    title: 'Муром',
    data: '2023 год',
    category: ['all'],
    photos: ['/other/murom/fone.jpg'],
    text: 'Текст про Муром',
  },
  {
    title: 'Храмы Владимирской Руси',
    data: '2023 год',
    category: ['all'],
    photos: ['/other/vladimir/fone.jpg'],
    text: 'Текст про Храмы Владимирской Руси',
  },
  {
    title: 'Ергаки',
    data: '2011 год',
    category: ['all', 'big'],
    photos: [
      '/camp/ergaki/fone.jpg',
      '/camp/ergaki/puteshest_50b.jpg',
      '/camp/ergaki/puteshest_52b.jpg',
      '/camp/ergaki/puteshest_53b.jpg',
      '/camp/ergaki/puteshest_54b.jpg',
      '/camp/ergaki/puteshest_55b.jpg',
      '/camp/ergaki/puteshest_56b.jpg',
    ],
    text: 'Текст про Ергаки',
  },
];
