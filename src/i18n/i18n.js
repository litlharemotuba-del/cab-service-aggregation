* {
  box-sizing: border-box;
}

:root {
  font-family: Inter, 'Segoe UI', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #0f172a;
  background: #f8fafc;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}

.app-shell {
  min-height: 100vh;
}

.navbar {
  background: #0f172a;
  color: white;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.18);
}

.navbar-inner {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-links a {
  color: #e2e8f0;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #fbbf24;
}

.language-switcher {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e2e8f0;
}

.language-switcher select {
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 6px 10px;
  color: #0f172a;
}

.page {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: 42px 0 64px;
}

.hero-section {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  align-items: center;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 28px;
  padding: 32px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.badge {
  display: inline-block;
  background: #fef3c7;
  color: #92400e;
  font-size: 0.8rem;
  border-radius: 999px;
  padding: 8px 14px;
  font-weight: 700;
}

.hero-content h1 {
  margin: 18px 0 14px;
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 1.08;
  color: #0f172a;
}

.hero-content p {
  margin: 0;
  font-size: 1.08rem;
  color: #475569;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 26px;
}

.primary-btn,
.secondary-btn {
  border: none;
  border-radius: 999px;
  padding: 14px 22px;
  font-weight: 700;
  cursor: pointer;
}

.primary-btn {
  background: #f59e0b;
  color: #111827;
}

.secondary-btn {
  background: transparent;
  border: 1px solid #cbd5e1;
  color: #0f172a;
}

.booking-panel {
  background: #0f172a;
  border-radius: 24px;
  padding: 24px;
  color: white;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.2);
}

.booking-panel h2 {
  margin: 0 0 18px;
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #cbd5e1;
}

.form-group input {
  width: 100%;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 12px 14px;
  background: #1e293b;
  color: white;
}

.form-group input::placeholder {
  color: #94a3b8;
}

.search-btn {
  width: 100%;
  margin-top: 8px;
  border: none;
  border-radius: 12px;
  padding: 14px 18px;
  font-weight: 800;
  background: #fbbf24;
  color: #111827;
  cursor: pointer;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 28px;
}

.info-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 20px;
  padding: 22px;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.04);
}

.info-card h3 {
  margin: 0 0 10px;
  color: #0f172a;
}

.info-card p {
  margin: 0;
  color: #475569;
}

.page-placeholder {
  width: min(1200px, calc(100% - 32px));
  margin: 40px auto;
  text-align: center;
  font-size: 1.7rem;
  font-weight: 700;
  color: #334155;
}

@media (max-width: 768px) {
  .navbar-inner {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-section,
  .info-grid {
    grid-template-columns: 1fr;
  }
}
