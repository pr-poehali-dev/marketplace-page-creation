import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isDiscounted?: boolean;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('Главная');
  const [favorites, setFavorites] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Профессиональный ноутбук MacBook Pro",
      price: 179990,
      originalPrice: 199990,
      image: "/img/33f72cb7-e3b2-4e1d-a6fe-ab8fc501df7e.jpg",
      category: "Электроника",
      rating: 4.8,
      reviews: 1250,
      isNew: true,
      isDiscounted: true
    },
    {
      id: 2,
      name: "Смартфон iPhone 15 Pro Max",
      price: 129990,
      image: "/img/85b0a7af-f0c3-454c-aa3a-fada416d706a.jpg",
      category: "Электроника",
      rating: 4.9,
      reviews: 2100,
      isNew: true
    },
    {
      id: 3,
      name: "Классический деловой костюм",
      price: 45990,
      originalPrice: 59990,
      image: "/img/f4e6864b-e8fd-4838-92f2-f6551e757ea0.jpg",
      category: "Одежда",
      rating: 4.6,
      reviews: 580,
      isDiscounted: true
    },
    {
      id: 4,
      name: "Беспроводные наушники AirPods Pro",
      price: 24990,
      image: "/img/33f72cb7-e3b2-4e1d-a6fe-ab8fc501df7e.jpg",
      category: "Электроника",
      rating: 4.7,
      reviews: 890
    },
    {
      id: 5,
      name: "Игровая клавиатура механическая",
      price: 12990,
      image: "/img/85b0a7af-f0c3-454c-aa3a-fada416d706a.jpg",
      category: "Электроника",
      rating: 4.5,
      reviews: 340
    },
    {
      id: 6,
      name: "Женская деловая блузка",
      price: 8990,
      originalPrice: 12990,
      image: "/img/f4e6864b-e8fd-4838-92f2-f6551e757ea0.jpg",
      category: "Одежда",
      rating: 4.4,
      reviews: 120,
      isDiscounted: true
    },
    {
      id: 7,
      name: "Планшет iPad Air",
      price: 79990,
      image: "/img/33f72cb7-e3b2-4e1d-a6fe-ab8fc501df7e.jpg",
      category: "Электроника",
      rating: 4.8,
      reviews: 750,
      isNew: true
    },
    {
      id: 8,
      name: "Спортивная куртка Nike",
      price: 15990,
      image: "/img/f4e6864b-e8fd-4838-92f2-f6551e757ea0.jpg",
      category: "Одежда",
      rating: 4.3,
      reviews: 210
    },
    {
      id: 9,
      name: "Умные часы Apple Watch",
      price: 39990,
      originalPrice: 49990,
      image: "/img/85b0a7af-f0c3-454c-aa3a-fada416d706a.jpg",
      category: "Электроника",
      rating: 4.9,
      reviews: 1580,
      isDiscounted: true
    },
    {
      id: 10,
      name: "Кожаные туфли Oxford",
      price: 19990,
      image: "/img/f4e6864b-e8fd-4838-92f2-f6551e757ea0.jpg",
      category: "Одежда",
      rating: 4.5,
      reviews: 95
    },
    {
      id: 11,
      name: "Монитор 4K 27 дюймов",
      price: 34990,
      image: "/img/33f72cb7-e3b2-4e1d-a6fe-ab8fc501df7e.jpg",
      category: "Электроника",
      rating: 4.6,
      reviews: 420
    },
    {
      id: 12,
      name: "Зимнее пальто шерстяное",
      price: 29990,
      originalPrice: 39990,
      image: "/img/f4e6864b-e8fd-4838-92f2-f6551e757ea0.jpg",
      category: "Одежда",
      rating: 4.7,
      reviews: 180,
      isDiscounted: true
    },
    {
      id: 13,
      name: "Игровая мышь RGB",
      price: 7990,
      image: "/img/85b0a7af-f0c3-454c-aa3a-fada416d706a.jpg",
      category: "Электроника",
      rating: 4.4,
      reviews: 230
    },
    {
      id: 14,
      name: "Рубашка поло премиум",
      price: 6990,
      image: "/img/f4e6864b-e8fd-4838-92f2-f6551e757ea0.jpg",
      category: "Одежда",
      rating: 4.2,
      reviews: 67
    },
    {
      id: 15,
      name: "Внешний аккумулятор 20000мАч",
      price: 4990,
      image: "/img/85b0a7af-f0c3-454c-aa3a-fada416d706a.jpg",
      category: "Электроника",
      rating: 4.5,
      reviews: 340
    },
    {
      id: 16,
      name: "Джинсы классические синие",
      price: 12990,
      image: "/img/f4e6864b-e8fd-4838-92f2-f6551e757ea0.jpg",
      category: "Одежда",
      rating: 4.3,
      reviews: 156
    },
    {
      id: 17,
      name: "Веб-камера Full HD",
      price: 8990,
      image: "/img/33f72cb7-e3b2-4e1d-a6fe-ab8fc501df7e.jpg",
      category: "Электроника",
      rating: 4.4,
      reviews: 89
    },
    {
      id: 18,
      name: "Летнее платье офисное",
      price: 9990,
      originalPrice: 14990,
      image: "/img/f4e6864b-e8fd-4838-92f2-f6551e757ea0.jpg",
      category: "Одежда",
      rating: 4.6,
      reviews: 78,
      isDiscounted: true
    }
  ];

  const navigationItems = [
    { name: 'Главная', icon: 'Home' },
    { name: 'Каталог', icon: 'Grid3x3' },
    { name: 'Корзина', icon: 'ShoppingCart' },
    { name: 'Профиль', icon: 'User' },
    { name: 'Избранное', icon: 'Heart' },
    { name: 'Поддержка', icon: 'Headphones' },
    { name: 'Доставка', icon: 'Truck' },
    { name: 'Оплата', icon: 'CreditCard' }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-900">MARKETPLACE</h1>
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Поиск товаров..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
              <Button size="sm">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3 overflow-x-auto">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveSection(item.name)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === item.name
                    ? 'bg-primary text-primary-foreground'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Каталог товаров</h2>
            <p className="text-gray-600 mt-2">Широкий выбор качественных товаров для бизнеса и дома</p>
          </div>
          <div className="flex items-center space-x-4">
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Все категории</option>
              <option>Электроника</option>
              <option>Одежда</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>По популярности</option>
              <option>По цене ↑</option>
              <option>По цене ↓</option>
              <option>По рейтингу</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <CardHeader className="p-0 relative">
                <div className="aspect-square overflow-hidden bg-gray-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 hover:bg-green-600">НОВИНКА</Badge>
                    )}
                    {product.isDiscounted && (
                      <Badge variant="destructive">СКИДКА</Badge>
                    )}
                  </div>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Icon
                      name="Heart"
                      size={16}
                      className={favorites.includes(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'}
                    />
                  </button>
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex flex-col gap-2">
                <Button className="w-full" size="sm">
                  <Icon name="ShoppingCart" size={14} className="mr-2" />
                  В корзину
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  Подробнее
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">MARKETPLACE</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Профессиональный маркетплейс для бизнеса. Широкий выбор качественных товаров с быстрой доставкой.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Электроника</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Одежда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дом и сад</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Спорт</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>8 (800) 123-45-67</p>
                <p>info@marketplace.ru</p>
                <p>Работаем 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 MARKETPLACE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;