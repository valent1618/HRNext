import Link from 'next/link';
import { useRouter } from 'next/router';

function Navigation() {
  const { pathname } = useRouter();

  return (
    <nav
      id='Navigation'
      className={
        pathname === '/' ? 'right' : pathname === '/list' ? 'left' : 'hide'
      }
    >
      <Link href='/list'>
        <a
          className='list'
          aria-label='List of employees'
          data-testid='list-link'
        >
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
              <path d='M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z' />
            </svg>
          </div>
        </a>
      </Link>
      <Link href='/'>
        <a
          className='create'
          aria-label='Create an employee'
          data-testid='create-link'
        >
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <path d='M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z' />
            </svg>
          </div>
        </a>
      </Link>
    </nav>
  );
}

export default Navigation;
