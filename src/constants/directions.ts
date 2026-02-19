import { IMAGES } from "./images";

export const DIRECTIONS = [
  {
    title: "Нейросети",
    description:
      "Обучаем модели, делаем ассистентов, внедряем в процессы, компьютерное зрение и др.",
    image: IMAGES.directionChip,
  },
  {
    title: "Веб-разработка",
    description:
      "Сайты, агрегаторы, админ-панели, pwa и прочее - на коде",
    image: IMAGES.directionKeyboard,
  },
  {
    title: "Аналитика данных",
    description: "Обработка, кластеризация, дэшборды и др.",
    image: IMAGES.directionPieChart,
  },
  {
    title: "Команда дизайнеров",
    description: "Специалисты продуктового и веб-дизайна",
    image: IMAGES.directionTablet,
  },
  {
    title: "Разработка для телеграм",
    description: "Боты, mini apps, интеграции, алертинг",
    image: IMAGES.directionPaper,
  },
] as const;
