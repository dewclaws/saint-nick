import { Wordmark } from '@/app/_components';
import heroBackground from '@/public/hero_bg.png';
import Image from 'next/image';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <>
      <section className="h-screen">
        <Image
          src={heroBackground}
          alt="Intro section background"
          className="absolute inset-0 -z-10 object-cover h-screen"
        />
        <div className="h-screen -mt-20 flex justify-center items-center">
          <div className="text-center text-white w-2/3 md:w-1/2">
            <Wordmark className="w-full" />
            <p className="mt-6 text-lg leading-8">Producer &bull; Engineer</p>
          </div>
        </div>
      </section>
      <section className="h-screen">{/* todo */}</section>
    </>
  );
}
