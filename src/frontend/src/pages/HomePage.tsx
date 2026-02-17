import { HeroSection } from '../components/home/HeroSection';
import { FeaturedCategories } from '../components/home/FeaturedCategories';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { useProducts } from '../hooks/useQueries';
import { useEffect } from 'react';
import { seedDemoProducts, isDemoSeeded } from '../services/demoSeeder';
import { useActor } from '../hooks/useActor';

export function HomePage() {
  const { data: products = [], isLoading } = useProducts();
  const { actor } = useActor();

  useEffect(() => {
    if (actor && !isDemoSeeded() && products.length === 0) {
      seedDemoProducts(actor).catch(console.error);
    }
  }, [actor, products.length]);

  return (
    <div>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts products={products} isLoading={isLoading} />
    </div>
  );
}
