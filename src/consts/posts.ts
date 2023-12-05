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
        photo: 'src/assets/nizh/makaryi/fone.jpg',
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
        photo: 'src/assets/other/murom/fone.jpg',
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
        photo: 'src/assets/other/vladimir/fone.jpg',
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
        photo: 'src/assets/camp/ergaki/fone.jpg',
        text: 'photo-1',
      },
      {
        photo: 'src/assets/camp/ergaki/puteshest_50b.jpg',
        text: 'photo-2',
      },
      {
        photo: 'src/assets/camp/ergaki/puteshest_52b.jpg',
        text: 'photo-3',
      },
      {
        photo: 'src/assets/camp/ergaki/puteshest_53b.jpg',
        text: 'photo-4',
      },
      {
        photo: 'src/assets/camp/ergaki/puteshest_54b.jpg',
        text: 'photo-5',
      },
      {
        photo: 'src/assets/camp/ergaki/puteshest_55b.jpg',
        text: 'photo-6',
      },
      {
        photo: 'src/assets/camp/ergaki/puteshest_56b.jpg',
        text: 'photo-7',
      },
    ],
  },
];
