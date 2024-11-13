import { Component, lazy } from "solid-js";
import Header from "./components/Header";
import { Route, Router } from "@solidjs/router";
const Completed = lazy(() => import("./components/Completed.page"));
const Home = lazy(() => import("./components/Home.page"));

const App: Component = () => {
  return (
    <div class="container mx-auto py-10">
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/completed-tasks" component={Completed} />
      </Router>
    </div>
  );
};

export default App;