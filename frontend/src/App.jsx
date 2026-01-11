import AppRoutes from "./app/AppRoutes";
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import WhatsAppCTA from "./components/common/WhatsAppCTA"


function App() {
  return (
    <div className="bg-[#f8fafc] text-slate-800">
      <Navbar/>
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer/>
     <WhatsAppCTA/>

    </div>
  );
}

export default App;
