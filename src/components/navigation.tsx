"use client";

import { Link, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './language-switcher';
import { NavigationBrand } from './navigation-brand';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RouteHref = any;

export function Navigation() {
  const pathname = usePathname();
  const t = useTranslations('nav');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const navItems: { name: string; href: RouteHref }[] = [
    { name: t('home'), href: "/" },
    { name: t('projects'), href: "/projects" },
    { name: t('business'), href: "/business" },
    { name: t('skills'), href: "/skills" },
    { name: t('blog'), href: "/blog" },
    { name: t('contact'), href: "/contact" },
  ];

  const aboutSubpages: { name: string; href: RouteHref; description: string }[] = [
    { name: t('aboutOverview'), href: "/about", description: t('aboutOverviewDesc') },
    { name: t('fitnessJourney'), href: "/about/fitness", description: t('fitnessJourneyDesc') },
    { name: t('creativeWorks'), href: "/about/creative", description: t('creativeWorksDesc') },
    { name: t('personalGrowth'), href: "/about/growth", description: t('personalGrowthDesc') },
    { name: t('techJourney'), href: "/about/journey", description: t('techJourneyDesc') },
    { name: t('tradingJourney'), href: "/about/trading", description: t('tradingJourneyDesc') },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavigationBrand />

          <NavigationMenu className="hidden md:flex" viewport={false}>
            <NavigationMenuList className="flex space-x-4">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      prefetch={true}
                      className={cn(
                        "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                        pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {/* About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors hover:text-primary bg-transparent",
                    pathname.startsWith('/about')
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {t('about')}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-0">
                  <div className="w-[400px] p-4">
                    <div className="grid gap-3">
                      {aboutSubpages.map((subpage) => (
                        <NavigationMenuLink asChild key={subpage.href}>
                          <Link
                            href={subpage.href}
                            prefetch={true}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              pathname === subpage.href && "bg-accent"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{subpage.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {subpage.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t('closeMobileMenu') || 'Close menu' : t('openMobileMenu') || 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="md:hidden border-t dark:border-gray-700 bg-background dark:bg-background">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* About Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                  {t('about')}
                </div>
                {aboutSubpages.map((subpage) => (
                  <Link
                    key={subpage.href}
                    href={subpage.href}
                    prefetch={true}
                    className={cn(
                      "block px-6 py-2 text-sm transition-colors hover:text-primary rounded-md",
                      pathname === subpage.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {subpage.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
