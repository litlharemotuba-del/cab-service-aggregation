import { useTranslation } from 'react-i18next';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="badge">{t('heroBadge')}</span>
        <h1>{t('heroTitle')}</h1>
        <p>{t('heroSubtitle')}</p>

        <div className="hero-actions">
          <button className="primary-btn">{t('bookNow')}</button>
          <button className="secondary-btn">{t('searchRide')}</button>
        </div>
      </div>

      <div className="booking-panel">
        <h2>Book a Ride</h2>

        <div className="form-group">
          <label>{t('pickup')}</label>
          <input type="text" placeholder="Maseru" />
        </div>

        <div className="form-group">
          <label>{t('destination')}</label>
          <input type="text" placeholder="Roma" />
        </div>

        <div className="form-group">
          <label>{t('time')}</label>
          <input type="datetime-local" />
        </div>

        <button className="search-btn">{t('searchRide')}</button>
      </div>
    </section>
  );
}

export default HeroSection;
