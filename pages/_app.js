import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/styles.css';

function CustomApp({ Component, pageProps }) {
  const handleItemClicked = () => {
    console.log('test');
  };
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default CustomApp;
