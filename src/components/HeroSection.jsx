import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          {t('appName')}
        </Link>

        <div className="nav-links">
          <Link to="/">{t('navHome')}</Link>
          <Link to="/booking">{t('navBooking')}</Link>
          <Link to="/drivers">{t('navDrivers')}</Link>
          <Link to="/login">{t('navLogin')}</Link>
        </div>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
