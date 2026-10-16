# Job Portal

Веб-приложение для поиска вакансий: удалённые фронтенд-позиции из Jobicy с клиентской фильтрацией, анимациями и адаптивной вёрсткой.

## Стек

- **Next.js 16** (App Router, TypeScript)
- **React 19**
- **Redux Toolkit** — состояние фильтров и авторизации
- **TanStack React Query** — запросы к API, кеш и `select` для фильтрации
- **Tailwind CSS 4** — стили
- **Lenis** — плавный скролл

## Запуск

```bash
npm install
npm run dev
```

Сайт: http://localhost:3000

Скрипты: `npm run dev` (разработка), `npm run build` (сборка), `npm run lint` (проверка).

## Структура

```
app/
  page.tsx            — главная (Hero, Recent Jobs, категории)
  jobs/page.tsx       — страница вакансий с боковой панелью фильтров
  api/jobs/route.ts   — прокси к Jobicy API
entities/
  job/
    api/getJobs.ts    — запросы, опции для react-query, логика фильтрации
    api/mapAdzuna.ts  — маппинг ответа Jobicy в тип Job
    model/types.ts    — тип Job
features/
  search-jobs/
    model/filtersSlice.tsx — Redux-слайс фильтров
    ui/FilterSidebar.tsx   — боковая панель фильтров
  auth/                    — форма авторизации (модалка)
widgets/
  hero/               — главный экран с параллаксом и тайпером
  vacancy/            — список вакансий
  header/, footer/    — шапка и подвал
  tilt/, scroll-reveal/, smooth-scroll/ — анимации
store/                — Redux store и провайдеры (Redux, React Query)
```

## Как работает фильтрация

1. Панель `FilterSidebar` dispatch'ит изменения в Redux (`filtersSlice`): запрос, локация, категории, тип работы, опыт, дата публикации, зарплата.
2. `Vacancy` читает фильтры через `useSelector` и передаёт их в `jobsQueryOptions(filters)`.
3. В `getJobs.ts` данные из кеша проходят через `filterJobs` — клиентскую фильтрацию на каждый активный фильтр (пустой фильтр = пропускать всех).

API перезапрашивается только при первом запросе (кеш 5 минут), фильтрация — мгновенная на клиенте.

Опыт и дата публикации вычисляются вручную: опыт — по ключевым словам в названии (junior/middle/senior), дата — от `pubDate`.

## API

`GET /api/jobs?count=40&tag=frontend` — проксирует запрос к [Jobicy](https://jobicy.com/api/v2/remote-jobs), возвращает массив вакансий. Прокси нужен, чтобы не светить запросы из браузера напрямую и обрабатывать ошибки.

## Деплой

Залито на Vercel: https://job-portal-five-lemon.vercel.app

Vercel подхватывает `npm run build` автоматически. Переменные окружения не требуются.
