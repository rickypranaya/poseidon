import Head from 'next/head';
import NavBar from './navbar';

function Layout({ title, keywords, description, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <NavBar/>
      <main>{children}</main>
    </div>
  );
}

export default Layout;

Layout.defaultProps = {
  title: 'NFT Compass',
  keywords: 'NFT analytics, NFT rarity score, NFT analysis tool, NFT filter tool',
  description:
    'Real-time project rankings, asset price evolution, advanced market analysis',
};
