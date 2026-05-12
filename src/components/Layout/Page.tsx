import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const siteUrl = 'https://amymacumc.github.io/amy-digital-resume';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();
  const canonicalPath = pathname === '/' ? '' : pathname;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        <link href={`${siteUrl}${canonicalPath}`} key="canonical" rel="canonical" />

        <link href="./favicon.ico" rel="icon" sizes="any" />
        <link href="./site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`${siteUrl}${canonicalPath}`} property="og:url" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
