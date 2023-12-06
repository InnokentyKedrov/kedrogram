export type PostsType = {
  title: string;
  data: string;
  category: string[];
  photos: string[];
  text: string;
};

export const posts = [
  {
    title: 'Макарий',
    data: '2023 год',
    category: ['all', 'nizh'],
    photos: ['/nizh/makaryi/fone.jpg'],
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
