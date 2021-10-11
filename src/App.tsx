import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  images,
  square,
  alert,
  list,
  bandage,
  card,
  checkbox,
  calendar,
  listCircle
} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import GlobalStyles from './theme/variables';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';
import ExampleCard from './pages/ExampleCard';
import ExempleCheckBox from './pages/ExempleCheckBox';
import PageDatePicker from './pages/PageDatePicker';
import MyInfinitScroll from './components/MyInifitScroll';

const App: React.FC = () => (
  <IonApp>
    <GlobalStyles />
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/tab4">
            <Tab4 />
          </Route> */}
          <Route exact path="/tab5">
            <Tab5 />
          </Route>
          <Route exact path="/datetime">
            <PageDatePicker />
          </Route>
          <Route exact path="/examplecard">
            <ExampleCard />
          </Route>
          <Route exact path="/examplecheckbox">
            <ExempleCheckBox />
          </Route>
          <Route exact path="/infinitscroll">
            <MyInfinitScroll />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {/* <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={alert} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={images} />
            <IonLabel>Photos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={list} />
            <IonLabel>Tab 4</IonLabel>
          </IonTabButton> */}
          <IonTabButton tab="tab5" href="/tab5">
            <IonIcon icon={bandage} />
            <IonLabel>Tab 5</IonLabel>
          </IonTabButton>
          <IonTabButton tab="ExampleCard" href="/examplecard">
            <IonIcon icon={card} />
            <IonLabel>Card</IonLabel>
          </IonTabButton>
          <IonTabButton tab="CHeckbox" href="/examplecheckbox">
            <IonIcon icon={checkbox} />
            <IonLabel>CheckBox</IonLabel>
          </IonTabButton>
          <IonTabButton tab="dateTime" href="/datetime">
            <IonIcon icon={calendar} />
            <IonLabel>Date time</IonLabel>
          </IonTabButton>
          <IonTabButton tab="infinitScroll" href="/infinitscroll">
            <IonIcon icon={listCircle} />
            <IonLabel>Date time</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
