import logo from '../../assets/images/dsmeta-logo.svg';
import './styles.css';

export default function Header() {
  return (
    <header>
        <div className="dsmeta-logo-container">
            <img src={ logo } alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Developed by
              <a href="https://www.linkedin.com/in/vinicius-gomes-nunes-0599/"> Vinicius Gomes</a>
            </p>
        </div>
    </header>
  )
}
