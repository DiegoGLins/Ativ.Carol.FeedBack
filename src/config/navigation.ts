import { cardsArray } from "../components/Card/cardsArray";

interface NavigationType {
    url: string;
    label: string;
    key: number;
}


export const navigation: NavigationType[] = [
    { url: '/igor', label: 'IGOR', key: cardsArray.length + 1 },
    { url: '/alexandre', label: 'ALEXANDRE', key: cardsArray.length + 1 },
    { url: '/diego', label: 'DIEGO', key: cardsArray.length + 1 },
    { url: '/jefferson', label: 'JEFFERSON', key: cardsArray.length + 1 },
    { url: '/misael', label: 'MISAEL', key: cardsArray.length + 1 },
    { url: '/patrick', label: 'PATRICK', key: cardsArray.length + 1 },
]