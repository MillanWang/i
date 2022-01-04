import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HtmlTooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

import carletonLogoImage from "../../images/CarletonLogo.jpg";

const carletonInfoStrings = [
    "Bachelor of Engineering, Software Engineering",
    "Expected Graduation Date: April 2023",
    "4th Year Standing, Co-Op Status",
    "Cumulative Grade Point Average: 11.55/12.00 (A)",
    "Number of Academic (4 Month) Terms Completed: 6",
    "Co-op (4 Month) Work Terms Completed: 3",
    "Courses Remaining Before Graduation: 4(In progress) + 2(Engineering Project) + 6"
];

const fall2018Courses = [
    createCourse("ECOR 1010", "Introduction to Engineering", "A ", "Technology, society and the environment. Graphical design communication: \nsketching, graphical projections, CAD. \nManaging data: statistical methods, spreadsheets. \nDesign analysis: matrix programming software, symbolic computer algebra systems. \nDesign process: proposals, reports, presentations, reporting software.", "Pretty cool course about engineering"),
    createCourse("PHYS 1003", "Introductory Mechanics and Thermodynamics", "A+", "Mechanics, gravitation, oscillations, and thermodynamics. The application of calculus to solve problems in these areas of physics is introduced. This course is intended for students in the physical sciences and engineering.", "personal notes"),
    createCourse("MATH 1004", "Calculus for Engineering or Physics", "A+", "Limits. Differentiation of the elementary functions. Rules of differentiation. Inverse trigonometric functions. Applications of differentiation: max-min problems, curve sketching, approximations. Definite and indefinite integrals, techniques of integration. Applications to areas and volumes.", "personal notes"),
    createCourse("MATH 1104", "Linear Algebra for Engineering or Science", "A+", "Systems of linear equations. Matrix algebra. Determinants. Invertible matrix theorem. Cramer’s rule. Vector space R^n; subspaces, bases. Eigenvalues, diagonalization. Linear transformations, kernel, range. Complex numbers (including De Moivre’s theorem). Inner product spaces and orthogonality. Applications.", "personal notes"),
    createCourse("SYSC 1005", "Introduction to Software Development", "A+", "Software development as an engineering discipline, using a modern programming language, Language syntax. Algorithm design. Tracing and visualizing program execution. Testing and debugging. Program style, documentation, reliability. Lab projects are drawn from a variety of application domains: digital image manipulation, computer games, robotics.", "This was my first time ever programming. I quite liked it and also TA'd the new equivalent of this course"),
];
const winter2019Courses = [
    createCourse("CHEM 1101", "Chemistry for Engineering Students", "A+", "Topics include stoichiometry, atomic and molecular structure, thermodynamics and chemical equilibrium, acid-base chemistry, carbon dioxide in water, alkalinity, precipitation, electrochemistry, kinetics and basic organic chemistry. Laboratory component emphasizes techniques and methods of basic experimental chemistry.", "personal notes"),
    createCourse("ECOR 1101", "Mechanics I", "A+", "Introduction to mechanics. Scalars and vectors. Concurrent forces: resultant and components. Statics of particles. Moments and couples. Force system resultants. Rigid body equilibrium. Frames and machines. Internal forces. Kinematics and kinetics of particles. Conservation theorems: work-energy; impulse-momentum. Centroids and centres of gravity.", "personal notes"),
    createCourse("PHYS 1004", "Introductory Electromagnetism and Wave Motion", "A+", "This calculus-based course introduces potential energy, work, electricity, magnetism, oscillations and waves.", "personal notes"),
    createCourse("MATH 1005", "Differential Equations and Infinite Series for Engineering", "A+", "First-order differential equations. Second-order linear equations with constant coefficients, undetermined coefficients, variation of parameters. Sequences and series, convergence tests, estimation of sums. Power series, Taylor series, remainders. Fourier series.", "personal notes"),
    createCourse("SYSC 2006", "Foundations of Imperative Programming", "A+", "The imperative programming paradigm: assignment and state, types and variables, static and dynamic typing. Memory management and object lifetimes: static allocation, automatic allocation in activation frames, dynamic allocation. Function argument passing. Recursion. Data structures: dynamic arrays, linked lists. Encapsulation and information hiding.", "personal notes"),
];
const fall2019Courses = [
    createCourse("CCDP 2100", "Communication for Engineers", "A+", "Development of competence in written and oral communication in engineering. Focus on professional written documents (proposals, technical explanations, research reports, summaries); written responses to engineering communications; related oral work. Attendance and participation are compulsory.", "personal notes"),
    createCourse("ELEC 2501", "Circuits and Signals", "A+", "Properties of signals. Basic circuit elements: voltage and current sources. Kirchhoff's laws, linearity, superposition. Thevenin and Norton's theorems. Circuit simplification. AC steady-state analysis: impedance, admittance, phasors, frequency response. Transient response of RL and RC circuits: form of response, initial and final conditions. RLC circuits: resonance.", "personal notes"),
    createCourse("MATH 2004", "Multivariable Calculus for Engineering or Physics", "A-", "Curves and surfaces. Polar, cylindrical and spherical coordinates. Partial derivatives, gradients, extrema and Lagrange multipliers. Exact differentials. Multiple integrals over rectangular and general regions. Integrals over surfaces. Line integrals. Vector differential operators. Green’s Theorem, Stokes’ theorem, Divergence Theorem. Applications.", "personal notes"),
    createCourse("SYSC 2004", "Object Oriented Software Development", "A+", "Designing and implementing small-scale programs as communities of collaborating objects, using a dynamically-typed or statically-typed programming language. Fundamental concepts: classes, objects, encapsulation, information hiding, inheritance, polymorphism. Iterative, incremental development and test-driven development.", "personal notes"),
    createCourse("SYSC 2310", "Introduction to Digital Systems", "A+", "Number systems: binary, decimal, hexadecimal. Digital representation of information. Computer arithmetic: integer, floating point, fixed point. Boolean logic, realization as basic digital circuits. Applications: simple memory circuits, synchronous sequential circuits for computer systems. Finite state machines, state graphs, counters, adders. Asynchronous sequential circuits. Races.", "personal notes"),
];
const winter2020Courses = [
    createCourse("COMP 1805", "Discrete Structures I", "A+", "Introduction to discrete mathematics and discrete structures. Topics include: propositional logic, predicate calculus, set theory, complexity of algorithms, mathematical reasoning and proof techniques, recurrences, induction, finite automata and graph theory. Material is illustrated through examples from computing.", "personal notes"),
    createCourse("MUSI 1002", "Issues in Popular Music", "A+", "History of world popular music from the 19th century until the present. Topics may include the growth of the music industry, the impact of technology, stardom, world music, the role of the press, copyright, censorship, and sexuality.", "personal notes"),
    createCourse("PHIL 1301", "Mind, World, and Knowledge", "A ", "Introduction to a variety of philosophical works, including contemporary, on such topics as: the nature of being, the mental, the external, consciousness, perception, experience, meaning, truth, the nature of knowledge, scientific understanding, and how language and thought represent the world.", "personal notes"),
    createCourse("SYSC 2100", "Algorithms and Data Structures", "A+", "Thorough coverage of fundamental abstract collections: stacks, queues, lists, priority queues, dictionaries, sets, graphs. Data structures: review of arrays and linked lists; trees, heaps, hash tables. Specification, design, implementation of collections, complexity analysis of operations. Sorting algorithms.", "personal notes"),
    createCourse("SYSC 2320", "Introduction to Computer Organization and Architecture", "A+", "Computer organization: processor, memory, input/output, system bus. Microarchitecture. Instruction set architecture. Assembly language programming: addressing modes, instruction encoding, execution. Assembler. Simple digital I/O, programmable timer. Input/output methods: polling, hardware interrupts.", "personal notes"),
    createCourse("SYSC 3101", "Programming Languages", "A ", "Principles underlying different kinds of programming languages (procedural, functional, logic programming) and their semantics. Overview of machinery needed for language support (compilers, interpreters and run-time systems).", "personal notes"),
];
const summer2020Courses = [
    createCourse("SYSC 3999", "Co-op Work Term (Cancelled)", "N/A", "Co-op offer for software development position cancelled by pandemic", "Sometimes that's just how life goes. Life's tough, get tougher"),
    createCourse("ECOR 2050", "Design and Analysis of Engineering Experiments", "A ", "Statistics and the design of engineering experiments. Basic exploratory data analysis. Central limit theorem. Hypothesis testing: t-test, chi-square test, type-I and type-II errors, multiple-comparison problem. Statistical bias. Design of experiments: randomization, blocking and replication, randomized blocking designs, factorial design. Statistical software packages.", "personal notes"),
    createCourse("ECOR 3800", "Engineering Economics", "A+", "Introduction to engineering economics; cash flow calculations; methods of comparison of alternatives; structural analysis; replacement analysis; public projects; depreciation and income tax; effects of inflation; sensitivity analysis; break-even analysis; decision making under risk and uncertainty.", "personal notes"),
    createCourse("ELEC 2507", "Electronics I", "A+", "Qualitative semiconductor physics, leading to the diode equation. Diode applications. Operational amplifiers and their application in feedback configurations including active filters. Introduction to bipolar transistors and MOSFETs, analysis of biasing circuits. Transistor applications including small signal amplifiers.", "personal notes"),
    createCourse("SYSC 3310", "Introduction to Real-Time Systems", "A+", "Principles of event-driven systems. Microcontroller organization. Development of embedded applications. Programming external interfaces, programmable timer. Input/output methods: polling, interrupts. Real-time issues: concurrency, mutual exclusion, buffering. Introduction to concurrent processes.", "personal notes"),
    createCourse("SYSC 3320", "Computer Systems Design", "A+", "System on Chip (SoC)-based computer system design. SoC internal organization. Cache memory. Interfacing: external memory, hardware subsystems. Direct memory access. Floating point units. Introduction to field programmable gate arrays.", "personal notes"),
];
const fall2020Courses = [
    createCourse("COMP 3005", "Database Management Systems", "B+ / SAT", "Introduces students to concepts of database management systems, database design and file structures. Topics include: entity-relationship modeling and object oriented database design, data models (relational, network and object oriented), the relational algebra, SQL, normalization theory, physical data organization, object oriented databases and OQL.", "personal notes"),
    createCourse("SYSC 3110", "Software Development Project", "A+", "Development of expertise in designing, implementing and testing maintainable, reusable software through team projects. Applying modern programming languages, design patterns, frameworks, UML and modern development processes (detection of olfactible source code defects, refactoring, iterative and incremental development, version control techniques) to medium-scale projects.", "personal notes"),
    createCourse("SYSC 3600", "Systems and Simulation", "B-", "Properties of linear systems. Linear dynamic models of engineering systems. Applications of the Laplace transform. Transfer functions. Block diagrams. Frequency and time response. System simulation with digital computers.", "personal notes"),
    createCourse("SYSC 4602", "Computer Communication", "A ", "Layered network architectures, TCP/IP suite, circuit switching, packet switching. Physical media, data transmission, multiplexing. Data link controls, MAC protocols, random access, polling, IEEE 802 standards. Bridges, switched Ethernet, VLANs. Routing algorithms, Internet routing protocols, datagram networks, virtual circuit networks. Transport protocols.", "personal notes"),
];
const winter2021Courses = [
    createCourse("SYSC 3999", "Co-op Work Term - JSI", "SAT", "description", "personal notes"),
    createCourse("SYSC 3120", "Software Requirements Engineering", "B+ / SAT", "Current techniques, notations, methods, processes and tools used in Requirements Engineering. Requirements elicitation, negotiation, modeling requirements, management, validation. Skills needed for Requirements Engineering and the many disciplines on which it draws. Requirements analysis: domain modeling, modeling object interactions; UML modeling. Introduction to software development processes.", "personal notes"),
];
const summer2021Courses = [
    createCourse("SYSC 3999", "Co-op Work Term - JSI", "SAT", "description", "personal notes"),
];
const fall2021Courses = [
    createCourse("SYSC 3999", "Co-op Work Term - Kinaxis", "SAT", "description", "personal notes"),
];
const winter2022Courses = [
    createCourse("SYSC 3303", "Real-Time Concurrent Systems", "In Progress: Jan.10-Apr.28", "Principles and practice of a systems engineering approach to the development of software for real-time, concurrent, distributed systems. Designing to achieve concurrency, performance, and robustness, using visual notations. Converting designs into programs. Introduction to hard real-time systems. Team project.", "personal notes"),
    createCourse("SYSC 4001", "Operating Systems", "In Progress: Jan.10-Apr.28", "Introduction to operating system principles. Processes and threads. CPU scheduling. Managing concurrency: mutual exclusion and synchronization, deadlock and starvation. Managing memory and input/output. Concurrent programming, including interprocess communication in distributed systems.", "personal notes"),
    createCourse("SYSC 4005", "Discrete Simulation/Modelling", "In Progress: Jan.10-Apr.28", "Simulation as a problem solving tool. Random variable generation, general discrete simulation procedure: event table and statistical gathering. Analyses of simulation data: point and interval estimation. Confidence intervals. Overview of modeling, simulation, and problem solving using SIMSCRIPT, MODSIM, and other languages.", "personal notes"),
    createCourse("SYSC 4106", "The Software Economy and Project Management", "In Progress: Jan.10-Apr.28", "Introduction to software project management and economics; Return on software investments; Software life cycle; Work breakdown structure, scheduling and planning; Risk analysis and management; Product size and cost estimation; Earn value management; Statistical process control; Managing project team and process improvement; Bidding and contract types.", "personal notes"),
];

const semesters = [
    createSemester("Fall 2018", fall2018Courses),
    createSemester("Winter 2019", winter2019Courses),
    createSemester("Fall 2019", fall2019Courses),
    createSemester("Winter 2020", winter2020Courses),
    createSemester("Summer 2020", summer2020Courses),
    createSemester("Fall 2020", fall2020Courses),
    createSemester("Winter 2021", winter2021Courses),
    createSemester("Summer 2021", summer2021Courses),
    createSemester("Fall 2021", fall2021Courses),
    createSemester("Winter 2022", winter2022Courses),
];



function createCourse(courseCode, courseName, grade, description, personalNotes) {
    return { courseCode, courseName, grade, description, personalNotes }
}

function createSemester(semesterName, courses) {
    return { semesterName, courses }
}



function EducationPage() {
    return (
        <div style={{ "justify-content": "center", "text-align": "-webkit-center" }}>
            <Paper
                sx={{ width: "70%" }}
            >
                <img src={carletonLogoImage} alt="Carleton University" />

                <div style={{ textAlign: "left", width: "70%" }}>
                    {carletonInfoStrings.map((s) => (
                        <Typography>{s}</Typography>
                    ))}
                </div>
                <Divider variant="middle" big >Transcript</Divider>
                <SemesterTabs />

            </Paper>
        </div >
    )
}

function SemesterTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                // bgcolor: 'background.paper',
                display: 'flex',
                "justify-content": "center",
                "margin-top": 21,

            }}
        >


            <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
                sx={{
                    borderRight: 1,
                    borderColor: 'divider',

                }}
            >
                {semesters.map((semester, i) => {
                    return <Tab sx={{ bgcolor: 'primary', }} label={semester.semesterName} {...a11yProps(i++)} />
                })}
            </Tabs>

            {/* Tab content */}
            {semesters.map((currentSemester, i) => {
                return (
                    <TabPanel value={value} index={i++}>
                        <GradeTable semester={currentSemester} />
                    </TabPanel>)
            })}
        </Box>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return { id: `simple-tab-${index}` };
}

function GradeTable(props) {
    const { semesterName, courses } = props.semester;
    return (
        <TableContainer component={Paper} >
            <Typography variant="caption">
                Hover course codes for course info and grades for my personal notes
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell width={100}>
                            <Typography>Course Code</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>
                                Course Name
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>
                                Grade
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courses.map((course) => (

                        <TableRow
                            key={semesterName}
                            hover
                        >
                            <HtmlTooltip
                                followCursor
                                title={
                                    <DescriptionTooltip description={course.description} />
                                }
                            >
                                <TableCell >
                                    {course.courseCode}
                                </TableCell>
                            </HtmlTooltip>

                            <TableCell>
                                {course.courseName}
                            </TableCell>

                            <HtmlTooltip
                                followCursor
                                title={
                                    <PersonalNotesTooltip personalNotes={course.personalNotes} />
                                }
                            >
                                <TableCell
                                    sx={{ maxWidth: 90 }}
                                    align="right"
                                >
                                    {course.grade}
                                </TableCell>
                            </HtmlTooltip>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function DescriptionTooltip(props) {
    return (
        <Box >
            <Typography align="center" variant="h6"> Course Description</Typography>
            <Typography>
                {props.description}
            </Typography>
        </Box>
    )
}

function PersonalNotesTooltip(props) {
    return (
        <Box >
            <Typography align="center" variant="h6"> Personal Course Experience</Typography>
            <Typography>
                {props.personalNotes}
            </Typography>
        </Box>
    )
}

export default EducationPage;