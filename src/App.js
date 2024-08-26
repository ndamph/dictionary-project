import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <header>Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This app was coded by Nadine Damphousse, and is open-sourced on{" "}
          <a
            href="https://github.com/ndamph/dictionary-project"
            target="blank_"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
