# Graziella - Итальянские сыры 🧀

Премиальный веб-сайт для компании Graziella, специализирующейся на производстве артизанальных итальянских сыров.

## 🎨 О проекте

Graziella - это семейная компания, работающая с 2014 года и создающая исключительные артизанальные сыры по традиционным итальянским рецептам.

## ✨ Особенности

- **🎯 Современный UI**: shadcn/ui + Оливковая цветовая палитра
- **⚡ Оптимизация**: Code Splitting, Lazy Loading, Zustand
- **🎪 Анимации**: Framer Motion + Tailwind Animate
- **📱 Адаптивность**: Mobile-first подход
- **♿ Accessibility**: Radix UI компоненты с ARIA
- **🔔 Уведомления**: Sonner toast notifications
- **🎨 Темная тема**: Встроенная поддержка Dark Mode
- **🚀 SEO**: React Helmet, sitemap, robots.txt
- **📱 PWA**: Progressive Web App манифест

## 🛠 Технологический стек

### Core
- **React 19** - Новейшая версия
- **Vite 7** - Максимально быстрая сборка
- **React Router 7** - Роутинг

### UI & Styling
- **Tailwind CSS 3** - Utility-first CSS
- **shadcn/ui** - Готовые компоненты
- **Radix UI** - Headless компоненты
- **Framer Motion** - Продвинутые анимации
- **Lucide React** - Современные иконки

### State Management
- **Zustand** - Легковесный state manager
- **LocalStorage** - Персистентность корзины

### Forms & Validation
- **React Hook Form** - Управление формами
- **Zod** - Валидация схем

### UX
- **Sonner** - Toast уведомления
- **React Helmet Async** - SEO meta tags

## 📁 Структура проекта

```
src/
├── components/          # Переиспользуемые компоненты
│   ├── Cart.jsx        # Компонент корзины
│   ├── CheeseCard.jsx  # Карточка сыра
│   ├── CheckoutForm.jsx # Форма оформления заказа
│   ├── Footer.jsx      # Подвал сайта
│   └── Header.jsx      # Шапка сайта
├── context/            # React Context
│   └── CartContext.jsx # Контекст корзины
├── data/               # Данные приложения
│   ├── cheeses.json    # Каталог сыров
│   └── production.json # Фото производства
├── pages/              # Страницы приложения
│   ├── AboutPage.jsx   # О компании
│   ├── CartPage.jsx    # Страница корзины
│   ├── CatalogPage.jsx # Каталог сыров
│   ├── CheckoutPage.jsx # Оформление заказа
│   ├── ContactPage.jsx # Контакты
│   └── HomePage.jsx    # Главная страница
├── App.jsx             # Главный компонент
├── index.css           # Глобальные стили
└── main.jsx            # Точка входа
```

## 🚀 Установка и запуск

1. **Перейдите в папку проекта:**
   ```bash
   cd front
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```
   
   Если возникают проблемы:
   ```bash
   # Windows PowerShell
   Remove-Item -Recurse -Force node_modules, package-lock.json
   npm install
   
   # Linux/Mac
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Запустите проект в режиме разработки:**
   ```bash
   npm run dev
   ```

4. **Откройте браузер:**
   Перейдите по адресу `http://localhost:5173`

## 📦 Команды

```bash
# Разработка
npm run dev          # Запуск dev сервера

# Продакшен
npm run build        # Сборка для продакшена
npm run preview      # Предпросмотр сборки

# Качество кода
npm run lint         # Проверка ESLint
```

Собранные файлы находятся в `dist/`.

## 🎨 Дизайн-система

### Цветовая палитра (HSL)
- **Primary**: hsl(75 30% 45%) - Оливковый
- **Secondary**: hsl(120 25% 55%) - Зелёный
- **Background**: hsl(45 40% 98%) - Кремовый
- **Foreground**: hsl(75 25% 20%) - Тёмный
- **Accent**: hsl(120 35% 50%) - Акцентный зелёный
- **Muted**: hsl(45 30% 92%) - Приглушённый

### Шрифты
- **Заголовки**: Playfair Display (serif)
- **Основной текст**: Outfit (sans-serif)
- **Fallback**: Inter, системные шрифты

### Компоненты
- **shadcn/ui** - Button, Card, Input, Dialog и др.
- **Radix UI** - Доступные headless компоненты
- **Framer Motion** - Анимированные элементы

## 📱 Функциональность

### Главная страница
- Hero секция с призывом к действию
- Статистика компании
- Особенности продукции
- Галерея процесса производства

### Каталог
- Поиск по названию и описанию
- Фильтрация по типам сыра
- Сортировка по цене и рейтингу
- Карточки товаров с изображениями

### Корзина
- Добавление/удаление товаров
- Изменение количества
- Расчет общей стоимости
- Переход к оформлению заказа

### Контакты
- Форма обратной связи с валидацией
- Контактная информация
- FAQ секция
- Социальные сети

## 🌐 Развертывание

Проект готов для развертывания на любых статических хостингах:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📄 Лицензия

Этот проект создан для демонстрационных целей.

## 👥 Команда

- **Frontend Development**: React, Vite, Tailwind CSS
- **UI/UX Design**: Итальянская эстетика, адаптивный дизайн
- **Animations**: Framer Motion

---

**Graziella's Cheese** - Качественные итальянские сыры с 2014 года 🧀