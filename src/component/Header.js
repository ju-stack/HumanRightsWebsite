import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div>교권 존중 캠페인</div>
        <nav>
            <ul>
                <li><Link to="/case">교권 침해 사례</Link></li>
                <li><Link to="/respect">교권 존중 방법</Link></li>
                <li><Link to="/quiz">교권 퀴즈</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;