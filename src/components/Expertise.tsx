import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faTrello, faIntercom } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "SQL",
    "PYTHON",
    "R",
    "Tableau",
    "Microsoft Power BI",
    "EViews",
    "MySQL",
    "Python",
    "PostgreSQL",
];

const labelsSecond = [
    "Bloomberg",
    "Refinitiv Workspace",
    "TT Platform,",
    "EViews,",
    "SQL",
    "Excel",
];

const labelsThird = [
    "Python",
    "SAP",
    "Six Sigma",
    "Statistical Analysis Software",
    "ML Algorithms",]

const labelsForth = [
        "React",
        "Tailwind CSS",
        "Microsoft SQL Server",
        "PowerPoint",
        "Tableau",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faIntercom} size="3x"/>
                    <h3>Data Analytics & Visualization</h3>
                    <p>I have developed expertise in analyzing, modeling, and visualizing datasets to uncover trends and drive strategic decisions. Proficient in creating interactive dashboards and impactful reports for stakeholders.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTrello} size="3x"/>
                    <h3>Financial Data Analysis</h3>
                    <p>Extensive experience in applying financial data analytics to trading, investment strategies, and market analysis. Skilled in econometric modeling and leveraging big data for actionable insights.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & Automation for Finance</h3>
                    <p>Contributed to building AI models that enhance accuracy and safety in financial applications. Proficient in automation tools for workflow optimization.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Development & Data Engineering</h3>
                    <p>Experience in developing web applications and data engineering solutions, integrating analysis tools to streamline business operations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsForth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;