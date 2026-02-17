import { demoProducts } from '../data/demoProducts';
import type { backendInterface } from '../backend';

const SEEDED_FLAG_KEY = 'procommerce_demo_seeded';

export function isDemoSeeded(): boolean {
  return localStorage.getItem(SEEDED_FLAG_KEY) === 'true';
}

export function markDemoSeeded(): void {
  localStorage.setItem(SEEDED_FLAG_KEY, 'true');
}

export async function seedDemoProducts(actor: backendInterface): Promise<void> {
  if (isDemoSeeded()) {
    return;
  }

  // Add all demo products
  for (const product of demoProducts) {
    await actor.addProduct(
      product.id,
      product.title,
      product.price,
      product.category,
      Math.random() > 0.3 ? Math.floor(Math.random() * 2 + 3.5 * 10) / 10 : null, // Random rating 3.5-5.0 or null
      product.description,
      product.imageUrl
    );
  }

  markDemoSeeded();
}
