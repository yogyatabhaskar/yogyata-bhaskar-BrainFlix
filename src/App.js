import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/videos" exact component={HomePage} />
        <Route path="/videos/:videoId" component={HomePage} />
        <Route path="/videoupload" component={VideoUpload} />
        <Redirect from="/" to="/videos" />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
