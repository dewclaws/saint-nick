'use client';

import { Logo } from '@/components/assets';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { clsx } from 'clsx';

const routes = [
  { name: 'Discography', link: '#' },
  { name: 'About', link: '#' },
  { name: 'Contact', link: '#' },
];

export default function Navbar() {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const navbarClasses = clsx(
    'flex items-center justify-between p-6 lg:p-4 lg:px-12',
    'transition-all duration-200 ease-in-out',
    scrollPosition > 0 && 'backdrop-blur shadow-navbar-bottom'
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className={navbarClasses}>
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Saint Nick</span>
            <Logo className="h-10 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => toggleMenuOpen(true)}
          >
            <span className="sr-only">Open navigation menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {routes.map((route) => (
            <a
              key={route.name}
              href={route.link}
              className="font-semibold leading-6"
            >
              {route.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={menuOpen}
        onClose={toggleMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black text-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Saint Nick</span>
              <Logo className="h-10 w-auto" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => toggleMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {routes.map((route) => (
                  <a
                    key={route.name}
                    href={route.link}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                  >
                    {route.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
