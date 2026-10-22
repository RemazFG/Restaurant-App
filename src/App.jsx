import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {
  return(
    <div className="app">
      {/* 1- Header suction */}
        <Header />
        
      {/* 2- Main suctions */}
        {/* 2.1- Hero suction */}
          <Hero />
    </div>
  ) ;

}

export default App
