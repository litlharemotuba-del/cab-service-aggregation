import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="language-switcher">
      <label>{t('langLabel')}</label>
      <select value={i18n.language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="st">Sesotho</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
