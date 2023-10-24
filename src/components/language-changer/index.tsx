import { AiOutlineControl } from 'react-icons/ai';
/* import { skeleton } from '../../helpers/utils';
 */ 
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageChanger = ({
  language,
  setLanguage,
  /* loading, */
  languageConfig,
}) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (e, selectedLanguage) => {
    e.preventDefault();
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage)
  };
  console.log(languageConfig);
  return (
    <div className="card overflow-visible shadow-lg compact bg-base-100">
      <div className="flex-row items-center space-x-4 flex pl-6 pr-2 py-4">
        <div className="flex-1">
          <h5 className="card-title">
            {<span className="text-base-content opacity-70">{t("language")}</span>}
          </h5>
          {
            <span className="text-base-content text-opacity-40 capitalize text-sm">
              {language == languageConfig.defaultLanguage
                ? 'en'
                : language}
            </span>
          }{' '}
        </div>
        <div className="flex-0">
          {
            <div title="Change Language" className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="btn btn-ghost m-1 normal-case opacity-50 text-base-content"
              >
                <AiOutlineControl className="inline-block w-5 h-5 stroke-current md:mr-2" />
                <span className="hidden md:inline">{t("change_language")}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1792 1792"
                  className="inline-block w-4 h-4 ml-1 fill-current"
                >
                  <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
                </svg>
              </div>
              <div
                tabIndex={0}
                className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content max-h-96 w-52 rounded-lg bg-base-200 text-base-content z-10"
              >
                <ul className="p-4 menu compact">
                  {[
                    languageConfig.defaultLanguage,
                    ...languageConfig.languages.filter(
                      (item) => item !== languageConfig.defaultLanguage
                    ),
                  ].map((item, index) => (
                    <li key={index}>
                      {/* eslint-disable-next-line */}
                      <a
                        onClick={(e) => changeLanguage(e, item)}
                        className={`${language === item ? 'active' : ''}`}
                      >
                        <span className="opacity-60 capitalize">
                          {item === languageConfig.defaultLanguage
                            ? 'en'
                            : item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

LanguageChanger.propTypes = {
  language: PropTypes.string,
  setLanguage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  languageConfig: PropTypes.object.isRequired,
};

export default LanguageChanger;
