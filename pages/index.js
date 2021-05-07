import Head from 'next/head';
import Link from 'next/link';
import {getPostsData} from 'lib/posts';
import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>The data below is static</h2>
        <p>Hello, I'm Nhan Hoang, a developer</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog (fetching data from api)</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = await getPostsData();
  return {
    props: {
      allPostsData
    }
  }
}
