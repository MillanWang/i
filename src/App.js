import './App.css';
import { Route, Switch } from "react-router-dom";
import * as React from 'react';
import HeaderBar from './components/HeaderBar';
import IntroPage from './components/navigationPages/IntroPage';
import ExperiencePage from './components/navigationPages/ExperiencePage';
import ProjectsPage from './components/navigationPages/ProjectsPage';
import EducationPage from './components/navigationPages/EducationPage';
import ExtracurricularsPage from './components/navigationPages/ExtracurricularsPage';
import { Container, createTheme, ThemeProvider } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

const mainAppTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[700],
      light: blueGrey[600],
      dark: blueGrey[800],
      constrastText: '#ffffff',
    },
    text: {
      primary: '#ffffff',
      secondary: blueGrey[100],
      disabled: blueGrey[300]
    }
  },
  typography: {
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

          <HeaderBar sections={navigationSections} />

          <Container
            id="PageContent"
            maxWidth="false"
            sx={{ backgroundColor: "primary.dark", margin: 0, paddingTop: 3, justifyContent: "center", minHeight: "100%" }}
          >
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
          </Container>{/* End PageContent */}
        </ThemeProvider>
      </div>{/* End App */}
    </div>
  );
}

export default App;