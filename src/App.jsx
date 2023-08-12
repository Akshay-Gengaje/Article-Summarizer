import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen max-h-full bg-auto bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 dark:bg-gradient-to-tl dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
