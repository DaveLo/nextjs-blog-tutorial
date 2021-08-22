import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";

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
        <p>
          I'm baby tofu pitchfork yr blog vaporware etsy swag air plant
          pinterest beard direct trade. Thundercats selfies letterpress
          sriracha, unicorn umami poutine gluten-free direct trade echo park.
          Williamsburg vice +1 dreamcatcher. Pok pok pour-over intelligentsia
          wolf. Sustainable iceland four dollar toast mumblecore poke tbh pok
          pok meditation pop-up. Chillwave forage kickstarter cronut truffaut
          hot chicken wolf four loko trust fund street art enamel pin
          lumbersexual health goth DIY.
        </p>

        <p>
          You probably haven't heard of them 8-bit four dollar toast vice cred
          aesthetic coloring book subway tile edison bulb etsy echo park unicorn
          food truck palo santo celiac. PBR&B dreamcatcher four dollar toast
          live-edge. Kale chips artisan photo booth iPhone tote bag, air plant
          wayfarers skateboard fashion axe vice lomo forage. Humblebrag vegan
          listicle echo park pinterest tilde air plant vaporware messenger bag
          leggings kogi. Pickled pop-up XOXO DIY, hashtag direct trade everyday
          carry deep v humblebrag heirloom austin echo park glossier messenger
          bag offal. Tousled thundercats biodiesel street art artisan flannel.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
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
