import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <Link to="/"><h1>교권 존중 캠페인</h1></Link>

        <div className='navbar'>
          <Link to="/case">교권 침해 사례</Link>
          <Link to="/protect">교권 보호 방법</Link>
          <Link to="/poster">교권 포스터</Link>
        </div>
    </header>
  );
}

export default Header;