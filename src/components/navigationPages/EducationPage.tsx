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

            <Divider variant="middle" sx={transcriptDividerTheme} children="Custom Transcript Browser" />

            {/* Main grades table */}
            <SemesterSliderTable />
        </Paper>
    )
}

function SemesterSliderTable() {
    const SLIDER_TOOLTIP_TEXT: string = "Use slider to select semester";
    const SEMESTER_SELECTOR_SLIDER_MARKS = [
        { value: 1, label: '2018', },
        { value: 4, label: '2020', },
        { value: 7, label: '2021', },
        { value: 10, label: '2022', },
        { value: 13, label: '2023', },
    ];

    const [semesterNumber, setSemesterNumber] = React.useState(1);

    const handleSliderChange = (event: Event, value: number | Array<number>, activeThumb: number) => {
        // Should never be an array but required to avoid error. I suspect it's for the multislider option from MUI
        setSemesterNumber(value instanceof Array<number> ? value[0] : value);
    }

    return (
        <Paper elevation={24} sx={semesterSliderPaperTheme}>
            <Box sx={sliderBoxTheme}>
                <Slider
                    defaultValue={1} step={1} max={13} min={1}
                    marks={SEMESTER_SELECTOR_SLIDER_MARKS}
                    onChange={handleSliderChange}
                    sx={sliderTheme}
                />

                <Tooltip title={SLIDER_TOOLTIP_TEXT} children={<InfoOutlinedIcon sx={sliderInfoIconTheme} />} />
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
            {value === index && (<Box sx={tabPanelInnerBoxTheme} children={children} />)}
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

                                {/* Course code */}
                                <TableCell sx={primaryDarkTextTheme} >
                                    {course.courseCode}
                                </TableCell>

                                {/* Course Name with description and experience popovers */}
                                <CourseNameTableCell {...course} />

                                {/* Course grade */}
                                <TableCell sx={tableGradeCellTheme} align="right">
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

type CourseNameTableCellProps = {
    courseCode: string,
    courseName: string,
    description: string,
    personalNotes: string,
}

function CourseNameTableCell({ courseCode, courseName, description, personalNotes }: CourseNameTableCellProps) {
    // Popover positioning props. Reused in both popovers
    type AnchorOrigin = { vertical: 'bottom' | 'top', horizontal: 'center' };
    const POPOVER_ANCHOR_ORIGIN_POSITION: AnchorOrigin = { vertical: 'bottom', horizontal: 'center', };
    const POPOVER_TRANSFORM_ORIGIN_POSITION: AnchorOrigin = { vertical: 'top', horizontal: 'center', };

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
        <TableCell sx={primaryDarkTextTheme}>
            {/* Course description button and popover */}
            <Tooltip title={COURSE_DESCRIPTION_TEXT}>
                <Button onClick={handleClick_description} sx={courseInfoIconButtonTheme} children={<InfoOutlinedIcon />} />
            </Tooltip>
            <Popover
                open={open_description} onClose={handleClose_description}
                anchorEl={anchorEl_description}
                anchorOrigin={POPOVER_ANCHOR_ORIGIN_POSITION}
                transformOrigin={POPOVER_TRANSFORM_ORIGIN_POSITION}
            >
                <FormattedPopoverChild header={COURSE_DESCRIPTION_TEXT} bodyText={description} />
            </Popover>

            {/* Personal notes button and popover */}
            <Tooltip title={PERSONAL_EXPEREIENCE_TEXT}>
                <Button onClick={handleClick_comments} sx={courseNotesIconButtonTheme} children={<CommentOutlinedIcon />} />
            </Tooltip>
            <Popover
                open={open_comments} onClose={handleClose}
                anchorEl={anchorEl_comments}
                anchorOrigin={POPOVER_ANCHOR_ORIGIN_POSITION}
                transformOrigin={POPOVER_TRANSFORM_ORIGIN_POSITION}
            >
                <FormattedPopoverChild header={PERSONAL_EXPEREIENCE_TEXT} bodyText={personalNotes} />
            </Popover>

            {/* Course name text */}
            {courseName}

        </TableCell>
    );

}

function CourseTableHeader() {
    return (
        <TableHead>
            <TableRow sx={tableRowHeaderTheme}>
                <TableCell width={100}>
                    <Typography children={"Course Code"} sx={primaryDarkTextTheme} />
                </TableCell>
                <TableCell>
                    <Typography children={"Course Name"} sx={primaryDarkTextTheme} />
                </TableCell>
                <TableCell align="right">
                    <Typography children={"Grade"} sx={primaryDarkTextTheme} />
                </TableCell>
            </TableRow>
        </TableHead>
    )
}

type HeaderDescriptionTooltipProps = {
    header: string,
    bodyText: string
}

function FormattedPopoverChild({ header, bodyText }: HeaderDescriptionTooltipProps) {
    return (
        <Box sx={popoverContentsBoxTheme}>
            <Typography align="center" variant="h5">{header}</Typography>
            <Typography maxWidth={350}>{bodyText}</Typography>
        </Box>
    )
}

/******************************
 * THEMES
 *****************************/

const educationOuterPaperTheme = {
    width: "70%",
    minWidth: 500,
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
    width: "70%"
};

const primaryDarkTextTheme = {
    color: "primary.dark"
};

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
    width: "60%"
};

const sliderInfoIconTheme = {
    marginLeft: 3,
    color: "primary.dark",
    '&:hover': {
        color: "text.disabled",
    }
};

const tabPanelOuterBoxTheme = {
    width: "100%",
};

const tabPanelInnerBoxTheme = {
    minWidth: 100
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

const tableGradeCellTheme = {
    maxWidth: 90,
    color: "primary.dark",
};

const courseInfoIconButtonTheme = {
    padding: 0,
    minWidth: 0,
    '&:hover': {
        color: "text.disabled",
    }
};

const courseNotesIconButtonTheme = {
    ...courseInfoIconButtonTheme,
    paddingLeft: 1,
    paddingRight: 2,
};

const popoverContentsBoxTheme = {
    p: 2,
    color: "primary.main",
    width: "fit-content",
}


export default EducationPage;