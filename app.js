// pages/_app.js
import '../styles/globals.css';
import Sidebar from '/component/Sidebar';

export default function App({ Component, pageProps }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 w-full">
        <Component {...pageProps} />
      </main>
    </div>
  );
}





