import Image from 'next/image';
import heroBackground from '@/public/hero_bg.png';
import { Wordmark } from '@/components/assets';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main className="relative isolate">
      <section className="h-screen">
        <Image
          src={heroBackground}
          alt="Intro section background"
          className="absolute inset-0 -z-10 object-cover h-screen"
        />
        <div className="h-screen flex justify-center items-center">
          <div className="text-center text-white w-2/3 md:w-1/2">
            <Wordmark className="w-full" />
            <p className="mt-6 text-lg leading-8">Producer &bull; Engineer</p>
          </div>
        </div>
      </section>
      <section className="h-screen">{/* todo */}</section>
    </main>
  );
}
