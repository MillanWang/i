import * as React from 'react';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
    Box,
    Divider,
    Paper,
    Popover,
    Slider,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Tooltip,
    Typography,
    Button,
} from '@mui/material';

// Data
import EducationData from '../../data/educationData.json';

// Images
import carletonLogoImage from "../../images/CarletonLogo.jpg";


//TODO:  Change whole thing to match color theme. Bright white is brutal on the eyes.
// Extract the white background from the carleton image by making it transparent with rgba-alpha cause that's the only barrier 


const CARLETON_INFO_STRINGS = EducationData.CarletonInfoStrings;

const SEMESTERS: SemesterObject[] = [
    EducationData.Fall2018,
    EducationData.Winter2019,
    EducationData.Fall2019,
    EducationData.Winter2020,
    EducationData.Summer2020,
    EducationData.Fall2020,
    EducationData.Winter2021,
    EducationData.Summer2021,
    EducationData.Fall2021,
    EducationData.Winter2022,
    EducationData.Summer2022,
    EducationData.Fall2022,
    EducationData.Winter2023,
];

type CourseObject = {
    courseCode: string,
    courseName: string,
    grade: string,
    description: string,
    personalNotes: string
};

type SemesterObject = {
    semesterName: string,
    courses: CourseObject[]
}


function EducationPage() {
    return (
        <Paper sx={educationOuterPaperTheme}>
            {/* Carleton logo image */}
            <Box
                component="img"
                src={carletonLogoImage}
                alt="Carleton University"
                sx={carletonLogoTheme}
            />

            {/* Info Strings */}
            {/* TODO : Make this more small screen friendly. Better not to wrap the text */}
            <Box sx={carletonInfoStringsBoxTheme}>
                {CARLETON_INFO_STRINGS.map((infoString: string, i: number) => (
                    <Typography sx={primaryDarkTextTheme} align="left" key={"EducationDescriptionString_" + i++}>
                        {infoString}
                    </Typography>
                ))}
            </Box>

            <Divider variant="middle" sx={transcriptDividerTheme} >
                <Typography variant="subtitle2" >
                    Custom Transcript Slider Browser
                </Typography>
            </Divider>

            {/* Main grades table */}
            <SemesterSliderTable />
        </Paper >
    )
}

function SemesterSliderTable() {
    const SEMESTER_SELECTOR_SLIDER_MARKS = [
        { value: 1, label: '2018', },
        { value: 4, label: '2020', },
        { value: 7, label: '2021', },
        { value: 10, label: '2022', },
        { value: 13, label: '2023', },
    ];

    const DEFAULT_SEMESTER_NUMBER = 12;

    const [semesterNumber, setSemesterNumber] = React.useState(DEFAULT_SEMESTER_NUMBER);

    const handleSliderChange = (event: Event, value: number | Array<number>, activeThumb: number) => {
        // Should never be an array but required to avoid error. I suspect it's for the multislider option from MUI
        setSemesterNumber(value instanceof Array<number> ? value[0] : value);
    }

    return (
        <Paper elevation={24} sx={semesterSliderPaperTheme}>
            <Box sx={sliderBoxTheme}>
                <Slider
                    defaultValue={DEFAULT_SEMESTER_NUMBER}
                    step={1} max={13} min={1}
                    marks={SEMESTER_SELECTOR_SLIDER_MARKS}
                    onChange={handleSliderChange}
                    sx={sliderTheme}
                />
            </Box>

            <Box sx={semesterTabsOuterBoxTheme}>
                {/* Individual semester grade tables */}
                {SEMESTERS.map((currentSemester: SemesterObject, i: number) => {
                    return (
                        <SingleSemesterPanel value={semesterNumber} index={++i} key={"TabContent_" + currentSemester.semesterName} >
                            <GradeTable semester={currentSemester} />
                        </SingleSemesterPanel>
                    )
                })}
            </Box>
        </Paper>
    );
};

type SingleSemesterPanelProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
};

function SingleSemesterPanel({ children, value, index, }: SingleSemesterPanelProps) {
    return (
        <Box hidden={value !== index} sx={tabPanelOuterBoxTheme}>
            {value === index && (<Box children={children} />)}
        </Box>
    );
}

type GradeTableProps = {
    semester: SemesterObject
};

function GradeTable({ semester }: GradeTableProps) {
    const { semesterName, courses } = semester;
    return (
        <TableContainer>
            <Box sx={tableSemesterHeaderTheme}>
                <Typography children={semesterName} sx={primaryDarkTextTheme} variant="h6" />
            </Box>
            <Table>
                <CourseTableHeader />
                <TableBody>
                    {
                        courses.map((course: CourseObject) => (
                            <TableRow key={semesterName + "_Row_" + course.courseCode} hover sx={tableRowCourseTheme}>

                                {/* Course info and comments */}
                                <CourseInfoTableCell {...course} />

                                {/* Course code and name */}
                                <TableCell  >
                                    <Typography sx={primaryDarkTextTheme}>
                                        {course.courseCode}
                                    </Typography>
                                    <Typography sx={italicPrimaryDarkTextTheme}>
                                        {course.courseName}
                                    </Typography>
                                </TableCell>

                                {/* Course grade */}
                                <TableCell sx={primaryDarkTextTheme} align="right">
                                    {course.grade}
                                </TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function CourseTableHeader() {
    return (
        <TableHead>
            <TableRow sx={tableRowHeaderTheme}>
                <TableCell >
                    <Typography children={"Info"} sx={primaryDarkTextTheme} />
                </TableCell>
                <TableCell align="left" width="80%">
                    <Typography children={"Course"} sx={primaryDarkTextTheme} />
                </TableCell>
                <TableCell align="right">
                    <Typography children={"Grade"} sx={primaryDarkTextTheme} />
                </TableCell>
            </TableRow>
        </TableHead>
    )
}

type CourseNameTableCellProps = {
    courseCode: string,
    description: string,
    personalNotes: string,
}

function CourseInfoTableCell({ courseCode, description, personalNotes }: CourseNameTableCellProps) {
    // Popover positioning props. Reused in both popovers
    type AnchorOrigin = { vertical: 'bottom' | 'top' | 'center', horizontal: 'left' | 'center' | 'right' };
    const POPOVER_ANCHOR_ORIGIN_POSITION: AnchorOrigin = { vertical: 'center', horizontal: 'right', };
    const POPOVER_TRANSFORM_ORIGIN_POSITION: AnchorOrigin = { vertical: 'top', horizontal: 'left', };

    // Course information and description popover
    const COURSE_DESCRIPTION_TEXT: string = courseCode + " - Course Description";
    const [anchorEl_description, setAnchorEl_description] = React.useState<HTMLButtonElement | null>(null);
    const handleClick_description = (event: React.MouseEvent<HTMLButtonElement>) => { setAnchorEl_description(event.currentTarget); };
    const handleClose_description = () => { setAnchorEl_description(null); };
    const open_description = Boolean(anchorEl_description);

    // Personal comments popover 
    const PERSONAL_EXPEREIENCE_TEXT: string = courseCode + " - Personal Experience";
    const [anchorEl_comments, setAnchorEl_comments] = React.useState<HTMLButtonElement | null>(null);
    const handleClick_comments = (event: React.MouseEvent<HTMLButtonElement>) => { setAnchorEl_comments(event.currentTarget); };
    const handleClose = () => { setAnchorEl_comments(null); };
    const open_comments = Boolean(anchorEl_comments);

    return (
        <TableCell sx={courseInfoTableCellTheme}>
            {/* Course description button and popover */}
            <Button onClick={handleClick_description} sx={courseInfoIconButtonTheme}  >
                <Tooltip title={COURSE_DESCRIPTION_TEXT} placement="right">
                    <InfoOutlinedIcon sx={infoIconTheme} />
                </Tooltip>
            </Button>
            <Popover
                open={open_description} onClose={handleClose_description}
                anchorEl={anchorEl_description}
                anchorOrigin={POPOVER_ANCHOR_ORIGIN_POSITION}
                transformOrigin={POPOVER_TRANSFORM_ORIGIN_POSITION}
            >
                <FormattedPopoverChild header={courseCode} subtitle="Course Description" bodyText={description} />
            </Popover>

            {/* Personal notes button and popover */}
            <Button onClick={handleClick_comments} sx={courseInfoIconButtonTheme} >
                <Tooltip title={PERSONAL_EXPEREIENCE_TEXT} placement="right">
                    <CommentOutlinedIcon sx={infoIconTheme} />
                </Tooltip>
            </Button>
            <Popover
                open={open_comments} onClose={handleClose}
                anchorEl={anchorEl_comments}
                anchorOrigin={POPOVER_ANCHOR_ORIGIN_POSITION}
                transformOrigin={POPOVER_TRANSFORM_ORIGIN_POSITION}
            >
                <FormattedPopoverChild header={courseCode} subtitle="Personal Experience" bodyText={personalNotes} />
            </Popover>
        </TableCell>
    );

}

type HeaderDescriptionTooltipProps = {
    header: string,
    subtitle: string,
    bodyText: string
}

function FormattedPopoverChild({ header, subtitle, bodyText }: HeaderDescriptionTooltipProps) {
    return (
        <Box sx={popoverContentsBoxTheme}>
            <Typography align="center" variant="h5">{header}</Typography>
            <Typography align="center" variant="subtitle2" fontStyle="italic">{subtitle}</Typography>
            <Typography maxWidth={350}>{bodyText}</Typography>
        </Box>
    )
}

/******************************
 * THEMES
 *****************************/

const educationOuterPaperTheme = {
    width: { xs: "auto", sm: "90%", lg: "70%" },
    paddingTop: 2,
    marginBottom: 12,
    minHeight: 1600,

};

const carletonLogoTheme = {
    flex: 1,
    width: "70%",
    resizeMode: 'contain'
};

const carletonInfoStringsBoxTheme = {
    width: "85%"
};

const primaryDarkTextTheme = {
    color: "primary.dark",
    fontSize: { xs: 11, sm: 16 },
};

const italicPrimaryDarkTextTheme = {
    ...primaryDarkTextTheme,
    fontStyle: "italic"
}

const transcriptDividerTheme = {
    marginTop: 3,
    fontSize: 18,
    color: "primary.dark"
};

const semesterSliderPaperTheme = {
    marginTop: 3,
    width: "85%",
};

const sliderBoxTheme = {
    display: "flex",
    backgroundColor: "#bbbbbb",
    justifyContent: "center",
    alignItems: "center",
};

const sliderTheme = {
    ...primaryDarkTextTheme,
    marginTop: 2,
    width: "80%"
};

const tabPanelOuterBoxTheme = {
    width: "100%",
};

const semesterTabsOuterBoxTheme = {
    flexGrow: 1,
    display: 'flex',
    marginTop: 0,
    padding: 0,
    justifyContent: "left",
};

const tableSemesterHeaderTheme = {
    backgroundColor: "#cccccc"
};

const tableRowHeaderTheme = {
    backgroundColor: "#dddddd"
};

const tableRowCourseTheme = {
    backgroundColor: "#eeeeee"
};

const courseInfoTableCellTheme = {
    ...primaryDarkTextTheme,
    display: "grid",
    width: 16,
    minWidth: 0,
    justifyContent: "center"
};

const courseInfoIconButtonTheme = {
    padding: 0,
    paddingTop: 1,

    '&:hover': {
        color: "text.disabled",
    }
};

const infoIconTheme = {
    fontSize: { xs: "16px", sm: "24px" },
}


const popoverContentsBoxTheme = {
    p: 2,
    color: "primary.main",
    width: "fit-content",
    maxWidth: { xs: 205, md: 400 }, //TODO This should be window size dependant
}


export default EducationPage;