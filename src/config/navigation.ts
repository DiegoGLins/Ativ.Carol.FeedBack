interface NavigationType {
  url: string;
  label: string;
  key: number;
}

export const navigation: NavigationType[] = [
  { url: '/', label: 'HOME', key: 1 },
  { url: '/igor', label: 'IGOR', key: 2 },
  { url: '/alexandre', label: 'ALEXANDRE', key: 3 },
  { url: '/diego', label: 'DIEGO', key: 4 },
  { url: '/jefferson', label: 'JEFFERSON', key: 5 },
  { url: '/misael', label: 'MISAEL', key: 6 },
  { url: '/patrick', label: 'PATRICK', key: 7 },
];
