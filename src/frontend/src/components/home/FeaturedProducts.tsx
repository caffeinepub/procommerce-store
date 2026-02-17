import { ProductCard } from '../products/ProductCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import type { Product } from '../../backend';
import { Skeleton } from '@/components/ui/skeleton';

interface FeaturedProductsProps {
  products: Product[];
  isLoading?: boolean;
}

export function FeaturedProducts({ products, isLoading }: FeaturedProductsProps) {
  const navigate = useNavigate();
  const featured = products.slice(0, 8);

  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="mb-3">Featured Products</h2>
            <p className="text-lg text-muted-foreground">
              Handpicked favorites from our collection
            </p>
          </div>
          <Button variant="outline" onClick={() => navigate({ to: '/catalog' })}>
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
