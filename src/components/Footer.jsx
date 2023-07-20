import React from 'react';
import "./styles.css"
import { Link } from 'react-router-dom';

const date = new Date().getFullYear();

export default function Footer() {

  return (
    <footer className='footer text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <div className='w-100 pt-0'>
        <section className='mb-4'>
          <Link to='https://www.instagram.com/a1ishco'><button className='text-dark m-1' >
            <icon fab className='fab fa-facebook-f' />
          </button></Link>

          <Link to='https://www.instagram.com/a1ishco'><button className='text-dark m-1' >
            <icon fab className='fab fa-instagram' />
          </button></Link>

          <Link to='https://www.linkedin.com/in/ali-bashirov-59bb7b165/'><button className='text-dark m-1' >
            <icon fab className='fab fa-linkedin' />
          </button></Link>

          <Link to='https://github.com/a1ishco'><button className='text-dark m-1' >
            <icon fab className='fab fa-github' />
          </button></Link>
        </section>
      </div>

      <div className='text-center text-dark p-3 justify-align-between' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {date} Copyright : <Link className='text-dark' to='/'>
          a1ishco
        </Link>
      </div>
    </footer>
  );
}