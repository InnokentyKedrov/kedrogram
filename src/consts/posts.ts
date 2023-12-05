export type PostsType = {
  title: string;
  data: string;
  category: string[];
  photos: PhotosType[];
};

export type PhotosType = {
  photo: string;
  text?: string;
};

export const posts = [
  {
    title: 'Макарий',
    data: '2023 год',
    category: ['all', 'nizh'],
    photos: [
      {
        photo: '/nizh/makaryi/fone.jpg',
        text: 'photo-1',
      },
    ],
  },
  {
    title: 'Муром',
    data: '2023 год',
    category: ['all'],
    photos: [
      {
        photo: '/other/murom/fone.jpg',
        text: 'photo-1',
      },
    ],
  },
  {
    title: 'Храмы Владимирской Руси',
    data: '2023 год',
    category: ['all'],
    photos: [
      {
        photo: '/other/vladimir/fone.jpg',
        text: 'photo-1',
      },
    ],
  },
  {
    title: 'Ергаки',
    data: '2011 год',
    category: ['all', 'big'],
    photos: [
      {
        photo: '/camp/ergaki/fone.jpg',
        text: 'photo-1',
      },
      {
        photo: '/camp/ergaki/puteshest_50b.jpg',
        text: 'photo-2',
      },
      {
        photo: '/camp/ergaki/puteshest_52b.jpg',
        text: 'photo-3',
      },
      {
        photo: '/camp/ergaki/puteshest_53b.jpg',
        text: 'photo-4',
      },
      {
        photo: '/camp/ergaki/puteshest_54b.jpg',
        text: 'photo-5',
      },
      {
        photo: '/camp/ergaki/puteshest_55b.jpg',
        text: 'photo-6',
      },
      {
        photo: '/camp/ergaki/puteshest_56b.jpg',
        text: 'photo-7',
      },
    ],
  },
];
