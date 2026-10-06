import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';

function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="page">
      <HeroSection />

      <section style={{ marginTop: '32px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{t('serviceTitle')}</h2>
        <div className="info-grid">
          <article className="info-card">
            <h3>{t('service1Title')}</h3>
            <p>{t('service1Text')}</p>
          </article>

          <article className="info-card">
            <h3>{t('service2Title')}</h3>
            <p>{t('service2Text')}</p>
          </article>

          <article className="info-card">
            <h3>{t('service3Title')}</h3>
            <p>{t('service3Text')}</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
