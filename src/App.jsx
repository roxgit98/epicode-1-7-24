import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import Horror from "./data/horror.json";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <BookList books={Horror} />
      <MyFooter />
    </div>
  );
}

export default App;
