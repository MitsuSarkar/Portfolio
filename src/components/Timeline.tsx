import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#007dca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">C king Digital sales executive</h3>
            <h4 className="vertical-timeline-element-subtitle">London, Uk</h4>
            <p>Communication Skills, Interpersonal Skills, Negotiation Skills, Sales Expertise, Customer Relationship Management (CRM), Product Knowledge, Time Management, Problem-Solving Skills, Presentation Skills, Analytical Skills
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            iconStyle={{ background: '#007dca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Outlier (Currently working)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
            <p> AI Training, Financial Applications, AI Model Development, Accuracy and Relevance Enhancement, Safety in Financial Systems, Financial Analysis, Analytical Skills, Problem-Solving, Data Analysis, AI Advancement
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#007dca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Accenture Data Analytics and Visualization Simulation</h3>
            <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
            <p>Data Analytics, Data Visualization, Data Cleaning, Data Modelling, Data Analysis,Content Trend Analysis, Insights Communication, Stakeholder Presentation, PowerPoint Presentation Skills, Client Advisory, Analytical Thinking
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#007dca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">JPMorgan Chase Investment Banking Job Simulation on Forage</h3>
            <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
            <p>Investment Banking, M&A Target Identification, Strategic Analysis, Financial Analysis, DCF Modelling, Competitor Analysis, Supply Chain Analysis, Client Documentation, Company Profiling, Auction Summary Preparation, Decision-Making Skills
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2019 - 2020"
            iconStyle={{ background: '#007dca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mechanical Engineering Intern, NSPCL </h3>
            <h4 className="vertical-timeline-element-subtitle">Bhilai, India</h4>
            <p>Mechanical Engineering, Six Sigma, Quality Control, Statistical Analysis, SAP, Project Management, Data Analysis, Process Improvement

            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;