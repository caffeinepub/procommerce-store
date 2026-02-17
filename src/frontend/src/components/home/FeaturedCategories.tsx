import { Link } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    name: 'Electronics',
    image: '/assets/generated/category-electronics.dim_800x800.png',
    description: 'Latest tech and gadgets',
  },
  {
    name: 'Fashion',
    image: '/assets/generated/category-fashion.dim_800x800.png',
    description: 'Style and accessories',
  },
  {
    name: 'Home',
    image: '/assets/generated/category-home.dim_800x800.png',
    description: 'Kitchen and living',
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-3">Shop by Category</h2>
          <p className="text-lg text-muted-foreground">
            Explore our diverse range of premium products
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              to="/catalog"
              search={{ category: category.name }}
            >
              <Card className="group overflow-hidden transition-all hover:shadow-soft-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-1 text-xl font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
