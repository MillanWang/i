import './App.css';
import { Route, Switch } from "react-router-dom";
import * as React from 'react';
import HeaderBar from './components/HeaderBar';
import IntroPage from './components/navigationPages/IntroPage';
import ExperiencePage from './components/navigationPages/ExperiencePage';
import ProjectsPage from './components/navigationPages/ProjectsPage';
import EducationPage from './components/navigationPages/EducationPage';
import ExtracurricularsPage from './components/navigationPages/ExtracurricularsPage';
import { createTheme, ThemeProvider } from '@mui/material';

const mainAppTheme = createTheme({
  palette: {
    primary: {
      main: '#111111',
    },
    secondary: {
      main: '#111111',
    },
  },
  typography: {
    // fontFamily: ["math"]
  }
});

const introductionNavSection = { title: "Introduction", url: "/" };
const workExperienceNavSection = { title: "Experience", url: "/experience" };
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
    <div className="Background">
      <div className="App">
        <ThemeProvider theme={mainAppTheme}>
          <div id="Header">
            <HeaderBar sections={navigationSections} />
          </div>

          <div id="PageContent">
            <Switch>
              <Route exact path={introductionNavSection.url}>
                <IntroPage />
              </Route>
              <Route path={workExperienceNavSection.url}>
                <ExperiencePage />
              </Route>
              <Route exact path={projectsNavSection.url}>
                <ProjectsPage />
              </Route>
              <Route exact path={educationNavSection.url}>
                <EducationPage />
              </Route>
              <Route exact path={extracurricularsNavSection.url}>
                <ExtracurricularsPage />
              </Route>
            </Switch>
          </div>{/* End PageContent */}
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;