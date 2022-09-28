import Link from 'next/link';

function Custom404() {
  return (
    <main id='Error404'>
      <p className='deco404' aria-hidden='true'>
        404
      </p>
      <h1>
        Error <span>404</span>
      </h1>
      <h2>Page Not Found</h2>
      <Link href='/'>Return to create page</Link>
    </main>
  );
}

export default Custom404;
