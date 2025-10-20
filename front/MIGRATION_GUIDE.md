# 🚀 Руководство по миграции Graziella

## ✅ Что было сделано:

### 1. **Обновлен стек технологий**
- ✅ Добавлен **Zustand** - современный state management
- ✅ Добавлен **Sonner** - профессиональные toast уведомления
- ✅ Добавлен **shadcn/ui** - библиотека готовых компонентов
- ✅ Добавлен **Lucide React** - современные иконки
- ✅ Добавлены **Radix UI** компоненты - accessibility из коробки

### 2. **Обновлена цветовая палитра**
- Новая **оливковая палитра** из чернового макета
- HSL цвета для лучшей гибкости
- Поддержка **темной темы**
- CSS переменные для легкой настройки

### 3. **Улучшена архитектура**
- **Zustand** вместо Context API (проще и быстрее)
- **Sonner** вместо кастомного Toast (профессиональнее)
- **Lucide** вместо react-icons (легче и современнее)
- **shadcn/ui** компоненты (Button, Card, Input и др.)

### 4. **Оптимизации**
- Code Splitting с React.lazy
- Lazy Loading всех страниц
- Алиасы импортов (@/components)
- Улучшенная производительность

---

## 📦 Установка зависимостей

**Откройте терминал в папке `front` и выполните:**

```bash
npm install
```

Если возникают проблемы:

```bash
# Удалите старые зависимости
rm -rf node_modules package-lock.json

# Или в PowerShell:
Remove-Item -Recurse -Force node_modules, package-lock.json

# Переустановите
npm install
```

---

## 🎯 Запуск проекта

```bash
# Режим разработки
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр сборки
npm run preview

# Проверка линтера
npm run lint
```

---

## 🔄 Изменения в компонентах

### Старый способ (Context API):
```jsx
import { useCart } from '../context/CartContext';

const Component = () => {
  const { cartItems, addToCart } = useCart();
  // ...
}
```

### Новый способ (Zustand):
```jsx
import useCartStore from '../store/cartStore';

const Component = () => {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  // ...
}
```

### Старый способ (Toast):
```jsx
import { useToast } from './Toast';

const { showSuccess } = useToast();
showSuccess('Сообщение');
```

### Новый способ (Sonner):
```jsx
import { toast } from 'sonner';

toast.success('Сообщение', {
  description: 'Дополнительная информация'
});
```

### Старые иконки (react-icons):
```jsx
import { FiShoppingCart, FiX } from 'react-icons/fi';
<FiShoppingCart />
```

### Новые иконки (Lucide):
```jsx
import { ShoppingCart, X } from 'lucide-react';
<ShoppingCart className="h-5 w-5" />
```

---

## 🎨 Цветовая система

### HSL переменные (новые):
- `--background` - фон страницы
- `--foreground` - основной текст
- `--primary` - основной цвет (оливковый)
- `--secondary` - вторичный цвет (зелёный)
- `--muted` - приглушённые элементы
- `--accent` - акцентный цвет
- `--border` - границы

### Старые CSS переменные (для совместимости):
- `--color-primary` - #6B7C32
- `--color-secondary` - #8B7355
- `--color-cream` - #FAF8F3

Оба способа работают, но новые HSL переменные предпочтительнее!

---

## 📚 Новые компоненты shadcn/ui

Доступны в `src/components/ui/`:
- `Button` - кнопки с вариантами стилей
- `Card` - карточки контента
- `Input` - инпуты форм

**Пример использования:**

```jsx
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

<Button variant="default">Кнопка</Button>
<Button variant="outline">Outline</Button>

<Card>
  <CardHeader>
    <CardTitle>Заголовок</CardTitle>
  </CardHeader>
  <CardContent>
    Контент карточки
  </CardContent>
</Card>
```

---

## 🔥 Что улучшено:

1. **Производительность** ⚡
   - Zustand быстрее Context API
   - Меньший bundle size с Lucide
   - Code splitting работает

2. **DX (Developer Experience)** 👨‍💻
   - Алиасы импортов (@/components)
   - Типы из JSDoc
   - Лучшая структура проекта

3. **UX** 🎨
   - Красивые toast уведомления
   - Профессиональные компоненты
   - Оливковая палитра

4. **Accessibility** ♿
   - Radix UI компоненты
   - ARIA attributes
   - Keyboard navigation

---

## 🐛 Возможные проблемы

### Проблема: Не работают алиасы @/
**Решение:** Убедитесь что установлен `jsconfig.json` и перезапустите dev сервер

### Проблема: Ошибки импорта Zustand
**Решение:**
```bash
npm install zustand
```

### Проблема: Стили не применяются
**Решение:** Проверьте что Tailwind CSS установлен:
```bash
npm install -D tailwindcss postcss autoprefixer
```

---

## 📌 Следующие шаги

1. Запустите `npm install` для установки всех зависимостей
2. Запустите `npm run dev` для проверки
3. Протестируйте все функции
4. При необходимости добавьте больше shadcn компонентов

---

## 💡 Рекомендации

- Используйте новые HSL цвета вместо старых CSS переменных
- Применяйте shadcn/ui компоненты для единообразия
- Используйте Sonner для всех уведомлений
- Используйте Zustand для state management

**Проект готов к работе!** 🎉


