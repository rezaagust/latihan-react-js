import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function Layout({children}) {
  return (
    <div className="Layout">
        {/* Header */}
            <Header />
        {/* Main */}
            <main>
                {children}
            </main>
        {/* Footer */}
            <Footer/>
    </div>
  )
}
