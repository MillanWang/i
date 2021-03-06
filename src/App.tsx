import './App.css';
import { Route, Switch } from "react-router-dom";
import * as React from 'react';
import HeaderBar, { createTitleUrlPair } from './components/HeaderBar';
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
      // constrastText: '#ffffff',
    },
    text: {
      primary: '#ffffff',
      secondary: blueGrey[100],
      disabled: blueGrey[300]
    }
  },
  typography: {
    //TODO : Consider using a more personalized font. Perhaps implement my own handwriting 
  },
  breakpoints: { //TODO : Revise these and also design the cards around the diff levels. Constant min width ain't gonna work and there should be quantized steps for steppy instead of stretchy cards  
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
});

const introductionNavSection = createTitleUrlPair("Introduction", "/");
const workExperienceNavSection = createTitleUrlPair("Experience", "/experience");
const projectsNavSection = createTitleUrlPair("Projects", "/projects");
const educationNavSection = createTitleUrlPair("Education", "/education");
const extracurricularsNavSection = createTitleUrlPair("Extracurriculars", "/extracurriculars");

const navigationSections = [
  introductionNavSection,
  workExperienceNavSection,
  projectsNavSection,
  educationNavSection,
  extracurricularsNavSection
];

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainAppTheme}>
        <HeaderBar sections={navigationSections} />

        <Container id="PageContent" maxWidth={false} sx={pageContentTheme}>

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
    </div>
  );
}

/******************************
 * THEMES
 *****************************/

const pageContentTheme = {
  backgroundColor: "primary.dark",
  margin: 0,
  paddingTop: 3,
  paddingBottom: 5,
  paddingLeft: 0,
  paddingRight: 0,
  justifyContent: "center",
  minHeight: "100%",
};

export default App;