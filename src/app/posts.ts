export interface Post {
  post_id: number;
  post_name: string;
  post_shortcut: string;
}

export const posts = [
  {
    post_id: 1,
    post_name: 'Westmalle',
    post_shortcut: 'WE',
  },
  {
    post_id: 2,
    post_name: 'Oostmalle',
    post_shortcut: 'OO',
  },
];
