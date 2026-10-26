import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/provider";
import QueryProvider from "@/store/queryProvider";
import SmoothScroll from "@/widgets/smooth-scroll/ui/SmoothScroll";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: 'Работа и вакансии — поиск работы на [Бренд]',
    template: '%s | [Бренд]',
  },
  description: 'Свежие вакансии от прямых работодателей: IT, удалёнка, финансы. Фильтры по городу, зарплате и опыту. Отклик в один клик.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: '[Бренд]',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <ReduxProvider>
            <SmoothScroll />
            {children}
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
