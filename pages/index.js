import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Self Introduction</h2>
        <ul>
          <li>a website developer with 3 years of experience</li>
          <li>develop over 20 requests and projects</li>
          <li>have optimized development process that develop a website to control data from certain datatable in one week alone</li>
          <li>
            <div>learn a new programming language within one mounth during working</div>
            <small className={utilStyles.lightText}>VB.Net, Swift, Vue.js</small>
            <br />
            <div>keep learning during job searching</div>
            <small className={utilStyles.lightText}>React (<a target="_blank" href="https://cottongrass0828.github.io/wallpappers-layout/">link</a>), Next.js</small>
          </li>
          <li>find the core of request and solve the pain points of users</li>
        </ul>

        <h2 className={utilStyles.headingLg}>Progamming Language</h2>
        <ul>
          <li>Vue.js(VueCLI)</li>
          <li>React, Next.js</li>
          <li>HTML, CSS, JavaScript, jQuery</li>
          <li>Git, GitHub, GitLab</li>
          <li>NPM</li>
          <li>Bootstrap, Tailwind</li>
        </ul>

        <h2 className={utilStyles.headingLg}>Responsibilities</h2>
        <ul>
          <li>project planning</li>
          <li>frontend layout coding</li>
          <li>UI/UX discussion with designers</li>
          <li>third-party data integration</li>
          <li>API development</li>
        </ul>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}