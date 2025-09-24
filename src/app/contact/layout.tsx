import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata(
  'Contact - Furbom ງົວງົນ',
  'Get in touch with Furbom (ງົວງົນ) for web development projects, collaborations, or professional inquiries. Available for freelance and full-time opportunities.',
  '/cow-1.png'
);

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}