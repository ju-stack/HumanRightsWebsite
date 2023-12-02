import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <h1>교권 존중 캠페인</h1>

        <div className='navbar'>
          <Link to="/case">교권 침해 사례</Link>
          <Link to="/respect">교권 존중 방법</Link>
          <Link to="/quiz">교권 퀴즈</Link>
          <Link to="/poster">교권 포스터</Link>
        </div>
    </header>
  );
}

export default Header;