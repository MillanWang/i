import './App.css';
import { Route, Switch } from "react-router-dom";
import * as React from 'react';
import HeaderBar from './components/HeaderBar';

const introductionNavSection = { title: "Introduction", url: "/" };
const workExperienceNavSection = { title: "Work Experience", url: "/experience" };
const projectsNavSection = { title: "Projects", url: "/projects" };
const educationNavSection = { title: "Education", url: "/education" };
const extracurricularsNavSection = { title: "Extracurriculars", url: "/extracurriculars" };

const navigationSections =
  [introductionNavSection,
    workExperienceNavSection,
    projectsNavSection,
    educationNavSection,
    extracurricularsNavSection
  ];

function App() {
  return (
    <div className="App">
      <div id="Header">
        <HeaderBar sections={navigationSections} />
      </div>

      <div id="PageContent">
        <Switch>
          <Route exact path={introductionNavSection.url}>
            <p>intro</p>
          </Route>
          <Route path={workExperienceNavSection.url}>
            <p>work experience</p>
          </Route>
          <Route exact path={projectsNavSection.url}>
            <p>projects</p>
          </Route>
          <Route exact path={educationNavSection.url}>
            <p>education</p>
          </Route>
          <Route exact path={extracurricularsNavSection.url}>
            <p>extracurrics</p>
          </Route>
        </Switch>
      </div>{/* End PageContent */}
    </div>
  );
}

export default App;