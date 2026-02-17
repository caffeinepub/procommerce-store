import { useState, useMemo } from 'react';
import { useSearch } from '@tanstack/react-router';
import { ProductGrid } from '../components/products/ProductGrid';
import { CatalogControls } from '../components/products/CatalogControls';
import { useProducts } from '../hooks/useQueries';
import type { Product } from '../backend';

export function CatalogPage() {
  const searchParams = useSearch({ strict: false }) as { q?: string; category?: string };
  const { data: products = [], isLoading } = useProducts();
  const [category, setCategory] = useState(searchParams.category || 'all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter((p) => p.category === category);
    }

    // Filter by search query
    if (searchParams.q) {
      const query = searchParams.q.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // featured - keep original order
        break;
    }

    return filtered;
  }, [products, category, sortBy, searchParams.q]);

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="mb-2">Shop All Products</h1>
        <p className="text-lg text-muted-foreground">
          {searchParams.q
            ? `Search results for "${searchParams.q}"`
            : 'Browse our complete collection'}
        </p>
      </div>

      <div className="mb-8">
        <CatalogControls
          category={category}
          sortBy={sortBy}
          onCategoryChange={setCategory}
          onSortChange={setSortBy}
        />
      </div>

      <ProductGrid products={filteredAndSortedProducts} isLoading={isLoading} />

      {!isLoading && filteredAndSortedProducts.length > 0 && (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Showing {filteredAndSortedProducts.length} of {products.length} products
        </p>
      )}
    </div>
  );
}
