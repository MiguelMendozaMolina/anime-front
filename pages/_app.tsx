import type { AppProps } from 'next/app'; // Importa AppProps
import '../app/globals.css'; // Asegúrate de que la ruta sea correcta para tus estilos globales
import { Header } from '@/components/Header';

function MyApp({ Component, pageProps }: AppProps) { // Usa AppProps aquí
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;