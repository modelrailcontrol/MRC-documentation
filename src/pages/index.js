import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Öppen hård- och mjukvara</>,
    imageUrl: 'img/icon-opensource.svg',
    description: (
      <>
        Alla program, all dokumentation och all hårdvara släppt under öppna licenser.
        Använd fritt, så länge du delar med dig av ändringar.
      </>
    ),
  },
  {
    title: <>Flexibel standard</>,
    imageUrl: 'img/icon-flexible.svg',
    description: (
      <>
        En väl definierad standard ger var och en stor frihet att bygga egna lösningar
        som fungerar tillsammans med alla andra.
      </>
    ),
  },
  {
    title: <>Väl dokumenterad</>,
    imageUrl: 'img/icon-document.svg',
    description: (
      <>
        En tydlig konvention med bra dokumentation och exempel gör det
        lätt att komma igång och förenklar ditt arbete.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Modern Model Railroad Control">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Kom igång
            </Link>
          </div>
        </div>
      </header>
      <main>
      
        <div className="container"
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '15vh',
                fontSize: '20px',
            }}>
            <p></p>
            <p>Lite förenklat kan man säga att MMRC är ett sätt för alla typer av datorer
            att hämta och lämna meddelanden. Genom att göra detta på ett standardiserat sätt, 
            får man en kommunikation mellan datorerna.</p>
            <p>Denna kommunikation kan man sedan använda till att exempelvis styra allt 
            från växlar till husbelysning på en modelljärnväg eller modulbana. På den här
            webbplatsen kan du läsa mer om hur det går till.</p>
        </div>

        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
