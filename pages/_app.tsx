import '../styles/globals.scss'

import Image from "next/image";
import type { AppProps } from 'next/app';

import Layout from "../components/Layout";

import img from './../public/pool-glacier.jpg';


const App = ({ Component, pageProps }: AppProps) => {
  return (
      <Layout>
          <main>
              <Component {...pageProps} />
          </main>

          <Image src={img} width={1260} height={840} alt="" placeholder="blur"/>
      </Layout>
  );
}

export default App;