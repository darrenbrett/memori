import Menu from "./components/Menu";
import React from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Settings from "./components/Settings/Settings";
import UserHistory from "./components/UserHistory/UserHistory";
import Profile from "./components/Profile/Profile";
import Challenge from "./components/Challenge/Challenge";
import Story from "./components/Challenge/Story/Story";
import Questions from "./components/Challenge/Questions/Questions";
import Score from "./components/Challenge/Score/Score";

// const Home = lazy(() => import("./components/Home/Home"));
// const Auth = lazy(() => import("./components/Auth/Auth"));
// const Settings = lazy(() => import("./components/Settings/Settings"));
// const HistoryComp = lazy(() => import("./components/History/History"));
// const Profile = lazy(() => import("./components/Profile/Profile"));
// const Challenge = lazy(() => import("./components/Challenge/Challenge"));
// const Story = lazy(() => import("./components/Challenge/Story/Story"));
// const Questions = lazy(() =>
//   import("./components/Challenge/Questions/Questions")
// );

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
            <Route path="/home" component={Home} exact={true} />
            <Route path="/auth" component={Auth} exact={true} />
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/history" component={UserHistory} exact={true} />
            <Route path="/settings" component={Settings} exact={true} />
            <Route path="/challenge" component={Challenge} exact={true} />
            <Route path="/story" component={Story} exact={true} />
            <Route path="/questions" component={Questions} exact={true} />
            <Route path="/score" component={Score} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <Menu />
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
