import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";
import AdduserForm from "./components/user/AdduserForm";

function App() {
  return (
    <div className="app">
      <Header />
      <AdduserForm />
      <Form />
      <List />
    </div>
  );
}

export default App;
