import type { APIRoute, GetStaticPaths } from 'astro';
import { generateOGImage } from '@/lib/og';
import siteConfig from '@/config/site.config';

// Define static pages that need OG images
const STATIC_PAGES = [
  { slug: 'index', title: siteConfig.name, description: siteConfig.description },
  { slug: 'contact', title: 'Contact', description: `Get in touch with ${siteConfig.name}` },
  { slug: 'components', title: 'Component Library', description: 'UI component showcase' },
];

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for static pages
  const staticPaths = STATIC_PAGES.map((page) => ({
    params: { slug: page.slug },
    props: {
      title: page.title,
      description: page.description,
      type: 'website' as const,
    },
  }));

  return staticPaths;
};

export const GET: APIRoute = async ({ props }) => {
  const { title, description, type } = props as {
    title: string;
    description?: string;
    type: 'website' | 'article';
  };

  const png = await generateOGImage({
    title,
    description,
    type,
  });

  // Convert Buffer to Uint8Array for Response compatibility
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
