import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://mitsusarkar.github.io/Syncfusion-React.js-dashboard/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://mitsusarkar.github.io/Syncfusion-React.js-dashboard/" target="_blank" rel="noreferrer"><h2>Admin Dashboard</h2></a>
                <p>This is a comprehensive guide to the Admin Dashboard created in ReactJS using Syncfusion. The Admin Dashboard provides an intuitive interface for managing an eCommerce platform. It includes various features and pages to facilitate effective administration and analysis of the platform.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MitsuSarkar/Spotify-Dashboard" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MitsuSarkar/Spotify-Dashboard" target="_blank" rel="noreferrer"><h2>Spotify Dashboard</h2></a>
                <p>This Power BI dashboard allows you to explore and analyze your Spotify listening history. It contains visualizations and insights about your top tracks, artists, albums and how your music tastes have changed over time.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MitsuSarkar/Amazon-dashboard-power-bi" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MitsuSarkar/Amazon-dashboard-power-bi" target="_blank" rel="noreferrer"><h2>Amazon Dashboard - Power BI</h2></a>
                <p>The Amazon Dashboard is a Power BI project that provides an overview of various metrics related to products on the Amazon platform. It allows users to analyze and visualize data regarding total sales, sales status, seller count, categories, shipment information, and dates. The dashboard includes interactive graphs, bar charts, search functionality, and tooltips for a comprehensive and user-friendly experience.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MitsuSarkar/LendingClub-Data-Analysis" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MitsuSarkar/LendingClub-Data-Analysis" target="_blank" rel="noreferrer"><h2>LendingClub-Data-Analysis</h2></a>
                <p>LendingClub is a peer-to-peer lending platform that connects borrowers with investors. The platform has become popular, so it's important to identify borrowers who are likely to default. This report evaluates models to predict default for borrowers on the LendingClub platform. The report analyzes data and identifies variables that impact the likelihood of default. The best model is presented and explained.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MitsuSarkar/Flowbellum-?tab=readme-ov-file" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MitsuSarkar/Flowbellum-?tab=readme-ov-file" target="_blank" rel="noreferrer"><h2>Flowbellum</h2></a>
                <p>This project is inspired by wind turbines, but instead of using wind to power the blades, it uses the weight of fluid in the blades to produce torque. This means that the turbine does not need any external force to rotate, and it can operate in any environment. The planetary gearbox increases the speed of the generator shaft, which is then used to generate electricity. The blades rotate at a constant speed, which makes the turbine more efficient.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MitsuSarkar/The-Relationship-Between-Short-Term-Interest-Rates-and-Stock-Prices-using-EVIEWS" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MitsuSarkar/The-Relationship-Between-Short-Term-Interest-Rates-and-Stock-Prices-using-EVIEWS" target="_blank" rel="noreferrer"><h2>The Relationship Between Short Term Interest Rates and Stock Prices</h2></a>
                <p>The relationship between short-term interest rates and stock prices is important to understand. Changes in the interest rate can have a significant impact on stock prices. In this report, I will use an econometric model to examine this relationship.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MitsuSarkar/Churn-BI-project/tree/main" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MitsuSarkar/Churn-BI-project/tree/main" target="_blank" rel="noreferrer"><h2>CHURN BI Dashboard</h2></a>
                <p>Customer retention measures the percentage of customers who continue doing business with a company over time. It's vital for identifying and addressing customer churn. Power BI, a business intelligence tool, can analyze customer data to improve retention by tracking metrics such as churn rate, customer lifetime value, and customer journey. It helps create dashboards and reports to visualize trends and pinpoint areas for improvement.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MitsuSarkar/Diversity-Inclusion/tree/main" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MitsuSarkar/Diversity-Inclusion/tree/main" target="_blank" rel="noreferrer"><h2>Diversity & Inclusion</h2></a>
                <p>D&I focuses on creating a workplace where individuals from all backgrounds feel valued and respected. It boosts innovation, morale, and reputation. Power BI can analyze D&I metrics like gender, ethnic, and disability diversity to identify trends and areas for improvement. It enables businesses to create dashboards and reports to visualize D&I data and enhance their initiatives.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MitsuSarkar/Call-center-BI-project" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MitsuSarkar/Call-center-BI-project" target="_blank" rel="noreferrer"><h2>Call Center Power Bi projects</h2></a>
                <p>Call Centre Trends Real-time monitoring: Power BI allows call centers to monitor key performance indicators (KPIs) in real-time, providing immediate visibility into call volumes, wait times, agent performance, customer satisfaction scores, and more. This enables proactive management and quick response to potential issues.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MitsuSarkar/Game-sales/tree/main" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MitsuSarkar/Game-sales/tree/main" target="_blank" rel="noreferrer"><h2>GAME SALES DASHBOARD</h2></a>
                <p>The Game Sales Dashboard in Power BI analyzes video game sales data, providing insights into performance, trends, and customer preferences. It features metrics like total sales, top games, platform performance, and regional breakdowns, with interactive filters for detailed exploration. Ideal for stakeholders, it highlights sales trends, market share, and genre analysis, helping optimize strategies and uncover actionable insights in the gaming industry.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;