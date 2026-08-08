export interface CategorySeed {
  id: number;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface ProductSeed {
  id: number;
  name: string;
  slug: string;
  price: number;
  sale_price: number | null;
  thumbnail_url: string;
  category: { id: number; name: string };
  stock: number;
  reviews_avg_rating: number;
  reviews_count: number;
  description: string;
  created_at: string;
}

/**
 * Catalog Domain Database Seeder
 * Initializes and seeds categories and products tailored for Miral Store (متجر ميرال).
 * Focuses on Evening Dresses, Casual Dresses, Abayas, Fine Jewelry, and Luxury Gifts.
 */

export const initialCategoriesSeed: CategorySeed[] = [
  {
    id: 1,
    name: 'فساتين سهرة',
    icon: '👗',
    color: 'from-rose-100 to-rose-50',
    description: 'تشكيلة فاخرة من فساتين السهرة والمناسبات المصممة بأرقى الأقمشة والتطريزات.'
  },
  {
    id: 2,
    name: 'فساتين ناعمة ويومية',
    icon: '🌸',
    color: 'from-pink-100 to-pink-50',
    description: 'تصاميم انسيابية مريحة وناعمة تناسب الإطلالات اليومية والزيارات الراقية.'
  },
  {
    id: 3,
    name: 'عبايات وأزياء',
    icon: '🧕',
    color: 'from-purple-100 to-purple-50',
    description: 'عبايات خليجية فاخرة وأزياء معاصرة مطرزة بعناية فائقة.'
  },
  {
    id: 4,
    name: 'السلاسل والمجوهرات',
    icon: '📿',
    color: 'from-amber-100 to-amber-50',
    description: 'سلاسل ومجوهرات مذهبة وأحجار كريمة تضيف لمسة من الفخامة والجمال.'
  },
  {
    id: 5,
    name: 'الأساور والزينة',
    icon: '💫',
    color: 'from-emerald-100 to-emerald-50',
    description: 'أساور لؤلؤ وزينة فاخرة مصنوعة بأعلى درجات الدقة والجمال.'
  },
  {
    id: 6,
    name: 'بوكسات هدايا',
    icon: '🎁',
    color: 'from-blue-100 to-blue-50',
    description: 'صناديق هدايا فاخرة متكاملة مجهزة بالتغليف المبتكر للإهداء المباشر.'
  },
  {
    id: 7,
    name: 'الساعات والملحقات',
    icon: '⌚',
    color: 'from-slate-100 to-slate-50',
    description: 'ساعات ملكية وملحقات أنيقة مصممة لتناسب مختلف الأذواق.'
  },
  {
    id: 8,
    name: 'السبح الفاخرة',
    icon: '📿',
    color: 'from-amber-100 to-orange-50',
    description: 'سبح أحجار كريمة وعقيق يماني أصيل محفورة بإتقان عالي.'
  }
];

export const initialProductsSeed: ProductSeed[] = [
  {
    id: 1,
    name: 'فستان سهرة مخمل أسود راقي',
    slug: 'black-velvet-dress-1',
    price: 650,
    sale_price: 520,
    thumbnail_url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
    category: { id: 1, name: 'فساتين سهرة' },
    stock: 14,
    reviews_avg_rating: 4.9,
    reviews_count: 24,
    description: 'فستان سهرة أنيق مصمّم من المخمل الأسود الفاخر بقصة انسيابية ومناسبة للسهرات والمناسبات السعيدة.',
    created_at: '2026-02-05'
  },
  {
    id: 2,
    name: 'فستان دانتيل مطرز للمناسبات',
    slug: 'embroidered-lace-dress-2',
    price: 780,
    sale_price: 650,
    thumbnail_url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80',
    category: { id: 1, name: 'فساتين سهرة' },
    stock: 8,
    reviews_avg_rating: 5.0,
    reviews_count: 31,
    description: 'فستان فاخر مطرز بالدانتيل مع حزام خصر رقيق وخامات عالية الجودة تضمن إطلالة استثنائية.',
    created_at: '2026-02-07'
  },
  {
    id: 3,
    name: 'فستان ساتان حريري عنابي ملوكي',
    slug: 'burgundy-satin-dress-3',
    price: 720,
    sale_price: 590,
    thumbnail_url: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80',
    category: { id: 1, name: 'فساتين سهرة' },
    stock: 12,
    reviews_avg_rating: 4.9,
    reviews_count: 19,
    description: 'فستان سهرة حريري باللون العنابي الملوكي مصمّم بقَصّة شيفون ساتان جذابة ومناسبة للمحافل الرسمية.',
    created_at: '2026-02-08'
  },
  {
    id: 4,
    name: 'فستان حرير ناعم بكسرات أوف وايت',
    slug: 'offwhite-silk-dress-4',
    price: 580,
    sale_price: 490,
    thumbnail_url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80',
    category: { id: 2, name: 'فساتين ناعمة ويومية' },
    stock: 20,
    reviews_avg_rating: 4.8,
    reviews_count: 18,
    description: 'فستان ناعم مصمّم من أقمشة الحرير الطبيعي بكسرات جذابة ولون أوف وايت لطلّة متميزة ومريحة.',
    created_at: '2026-02-06'
  },
  {
    id: 5,
    name: 'فستان كاجوال مشجر بألوان الربيع',
    slug: 'floral-casual-dress-5',
    price: 420,
    sale_price: 350,
    thumbnail_url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80',
    category: { id: 2, name: 'فساتين ناعمة ويومية' },
    stock: 25,
    reviews_avg_rating: 4.7,
    reviews_count: 22,
    description: 'فستان كاجوال صيفي ناعم بنقوش ورد رقيقة وقماش خفيف ومريح للغاية للإطلالات اليومية.',
    created_at: '2026-02-04'
  },
  {
    id: 6,
    name: 'عباية كريب أسود مطرزة بالخرز اليدوي',
    slug: 'black-crepe-abaya-6',
    price: 550,
    sale_price: 480,
    thumbnail_url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
    category: { id: 3, name: 'عبايات وأزياء' },
    stock: 16,
    reviews_avg_rating: 4.9,
    reviews_count: 27,
    description: 'عباية كريب فاخرة مع تطريز خرز يدوي ناعم على الأكمام، تأتي مع طرحة مطابقة مجاناً.',
    created_at: '2026-02-02'
  },
  {
    id: 7,
    name: 'عباية لينن صيفية راقية بلون بيج',
    slug: 'beige-linen-abaya-7',
    price: 490,
    sale_price: 399,
    thumbnail_url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
    category: { id: 3, name: 'عبايات وأزياء' },
    stock: 18,
    reviews_avg_rating: 4.8,
    reviews_count: 15,
    description: 'عباية لينن صيفية خفيفة وباردة باللون البيج العصري مصممة بقصة واسعة ومريحة.',
    created_at: '2026-02-03'
  },
  {
    id: 8,
    name: 'سلسلة ذهبية فاخرة',
    slug: 'golden-necklace-8',
    price: 450,
    sale_price: 349,
    thumbnail_url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    category: { id: 4, name: 'السلاسل والمجوهرات' },
    stock: 25,
    reviews_avg_rating: 4.8,
    reviews_count: 32,
    description: 'سلسلة ذهبية فاخرة مصنوعة من أجود أنواع الذهب عيار 21 مع تصميم عصري يناسب كافة المناسبات.',
    created_at: '2026-01-15'
  },
  {
    id: 9,
    name: 'سوار لؤلؤ طبيعي',
    slug: 'pearl-bracelet-9',
    price: 310,
    sale_price: null,
    thumbnail_url: 'https://images.unsplash.com/photo-1611591475178-5e263d91361c?auto=format&fit=crop&w=600&q=80',
    category: { id: 5, name: 'الأساور والزينة' },
    stock: 15,
    reviews_avg_rating: 4.6,
    reviews_count: 14,
    description: 'سوار أنيق مصمّم من اللؤلؤ الطبيعي المزروع بجودة عالية وشكل جذاب.',
    created_at: '2026-01-25'
  },
  {
    id: 10,
    name: 'بوكس هدايا الملكي',
    slug: 'royal-gift-box-10',
    price: 380,
    sale_price: 299,
    thumbnail_url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    category: { id: 6, name: 'بوكسات هدايا' },
    stock: 18,
    reviews_avg_rating: 5.0,
    reviews_count: 28,
    description: 'صندوق هدايا فاخر يحتوي على قلم راقي، سبحة عقيق، وعطر عود خاص.',
    created_at: '2026-01-20'
  },
  {
    id: 11,
    name: 'ساعة ملكية فاخرة',
    slug: 'royal-watch-11',
    price: 850,
    sale_price: 699,
    thumbnail_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    category: { id: 7, name: 'الساعات والملحقات' },
    stock: 12,
    reviews_avg_rating: 4.9,
    reviews_count: 45,
    description: 'ساعة رجالية ونسائية فاخرة بمكينة يابانية دقيقة وحزام ستانلس ستيل غير قابل للصدأ.',
    created_at: '2026-01-18'
  },
  {
    id: 12,
    name: 'سبحة عقيق يماني أصيل',
    slug: 'agate-rosary-12',
    price: 220,
    sale_price: 180,
    thumbnail_url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    category: { id: 8, name: 'السبح الفاخرة' },
    stock: 40,
    reviews_avg_rating: 4.7,
    reviews_count: 19,
    description: 'سبحة مصنوعة من حجر العقيق اليماني الفاخر بـ 33 حبة متناسقة.',
    created_at: '2026-01-22'
  }
];

export function runCatalogSeeder() {
  console.log('🌱 Catalog Domain Database Seeder running...');
  console.log(`✅ Seeded ${initialCategoriesSeed.length} Categories (Evening Dresses, Casual Dresses, Abayas, Fine Jewelry & Gifts)`);
  console.log(`✅ Seeded ${initialProductsSeed.length} Catalog Products`);

  return {
    categories: JSON.parse(JSON.stringify(initialCategoriesSeed)),
    products: JSON.parse(JSON.stringify(initialProductsSeed))
  };
}
