import Image from 'next/image';

function Header() {
  return (
    <header id='Header'>
      <Image
        src={'/assets/logo.png'}
        layout='fill'
        objectFit='contain'
        alt=''
        className='logo'
      />
      <h1>
        <span>HR</span>Next
      </h1>
    </header>
  );
}

export default Header;
