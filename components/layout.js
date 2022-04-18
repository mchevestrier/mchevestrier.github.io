import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, pageProps }) {
    return (
        <>
            <div id="page" className="bg-[#0f1624] min-h-screen text-gray-50">
                <Header pageProps={ pageProps } />
                <main className="min-h-[calc(100vh-220px)]">{ children }</main>
                <Footer/>
            </div>
        </>
    );
}
