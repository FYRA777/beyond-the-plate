import type { Metadata } from 'next';
import '@fontsource/bricolage-grotesque/600.css';
import '@fontsource/bricolage-grotesque/700.css';
import '@fontsource/bricolage-grotesque/800.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/caveat-brush/400.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beyond the Plate · Food, Culture, and Stereotypes',
  description: 'An interactive academic unit for exploring food stories with curiosity, context, and respect.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
