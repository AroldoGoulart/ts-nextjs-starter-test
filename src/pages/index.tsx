import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [numero1, setNumero1] = React.useState(0);
  const [numero2, setNumero2] = React.useState(0);
  const [resultado, setResultado] = React.useState(0);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <h1 className='mt-4'>Calculadora fantastica!</h1>
            <p className='mt-2 text-sm text-gray-800'>
              Aula Sistemas Distribuidos
            </p>

            <div className='mt-4 flex flex-col items-center justify-center'>
              <div className='flex flex-row items-center justify-center'>
                <input
                  type='number'
                  className='h-10 w-20 rounded-lg border border-gray-300 bg-white px-4 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='0'
                  value={numero1}
                  onChange={(e) => setNumero1(Number(e.target.value))}
                />
                <span className='mx-2 text-2xl font-bold text-gray-800'>+</span>
                <input
                  type='number'
                  className='h-10 w-20 rounded-lg border border-gray-300 bg-white px-4 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                  placeholder='0'
                  value={numero2}
                  onChange={(e) => setNumero2(Number(e.target.value))}
                />
              </div>
              <button
                className='mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
                onClick={() => setResultado(numero1 + numero2)}
              >
                Calcular
              </button>
              <div className='mt-4 mb-12 text-2xl font-bold text-gray-800'>
                {resultado}
              </div>
            </div>

            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/snowlew/ts-nextjs-tailwind-starter'>
                Veja o código no GitHub
              </ArrowLink>
            </p>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://github.com/snowlew'>
                Aroldo Goulart
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
