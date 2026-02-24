import { IMAGES } from "./images";

export const PROJECTS = [
  {
    headline:
      "Обучили модель оценивать жилую недвижимость за 3 секунды с точностью >92%",
    description:
      "И сэкономили время и деньги крупного контрагента в финансовом секторе",
    image: IMAGES.caseInWork01,
    caseLink: "/cases/real-estate-ai",
  },
  {
    headline:
      "Сайт-агрегатор для продажи модульных домов с админ панелью на 4 роли",
    description:
      "С ответвлениями по 4 направлениям, калькулятором, подбором и статьями",
    image: IMAGES.caseInWork02,
    caseLink: "/cases/modular-homes",
  },
  {
    headline: "Проект 3",
    description: "Описание третьего проекта",
    image: IMAGES.caseInWork03,
    caseLink: "/cases/project-3",
  },
] as const;
