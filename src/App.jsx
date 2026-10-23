import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";


function App() {
  return(
    <div className="app">
      {/* 1- Header suction */}
        <Header />
        
      {/* 2- Main suctions */}
      
        {/* 2.1- Hero suction */}
          <Hero />
        {/* 2.2- Menu section */}
        <Menu />
    </div>
  ) ;

}

export default App
