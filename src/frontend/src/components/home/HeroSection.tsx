import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/30">
      <div className="container">
        <div className="grid gap-8 py-12 md:grid-cols-2 md:py-20 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-balance">
                Discover Premium Products for Every Lifestyle
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Shop our curated collection of electronics, fashion, and home essentials. Quality products, exceptional service, delivered to your door.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => navigate({ to: '/catalog' })}>
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-soft-lg">
            <img
              src="/assets/generated/hero-banner.dim_1600x600.png"
              alt="Shop Premium Products"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
