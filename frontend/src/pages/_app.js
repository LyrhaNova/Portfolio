import '../styles/global.scss'; // Importer les styles globaux
import AppRoutes from './index'; // Si tu as une autre structure, adapte ce chemin

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
