import React from "react";
// import Work from "../Components/Work";
// import { personalDetails, workDetails, eduDetails } from "../Details";
import { personalDetails } from "../Details";
import { Timeline, Event } from "react-timeline-scribble";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-gradient text-dark-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <React.Fragment>
        <h1 className="text-2xl text-gradient text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1><br />
        <Timeline>
          <Event interval={"June 2022 – Present"} title={"Metaverse Executive"} subtitle={"The Small Big Idea, Mumbai"}>
            🔹Job profile revolves around proving effective visualizations and reports to enhance business in the Web3 space.<br/>
            🔹Developed and managed Web3 based websites for clients which includes framework like Reactjs.<br />
            🔹Managed and handled API and Databases (SQL and MongoDB)
          </Event>
          <Event interval={"June 2021 – January 2022"} title={"Associate Developer"} subtitle={"Tekno Point Multimedia Pvt. Ltd., Mumbai"}>
            🔹Handled analytics, visualizations, and thirdparty API(s) using Adobe Analytics.<br />
            🔹Analyzed and managed the journeys of entire user-flow for multiple clients.<br />
            🔹Technology used at workplace is Adobe Experience Manager (AEM) for development and Adobe Analytics for reports and visualization of data.
          </Event>
        </Timeline><br/>

        <h1 className="text-2xl text-gradient text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Internships
        </h1><br />
        <Timeline>
          <Event interval={"June 2020 – December 2020"} title={"Data Science Intern"} subtitle={"Iha Consulting Services Pvt. Ltd., Hyderabad"}>
            🔹Analyzed and processed complex data sets using advanced querying, visualization and analytics tools and python libraries.<br />
            🔹Performed tasks such as prediction of the given dataset, with algorithms viz, Linear Regression, Logistic Regression and Support Vector Machine<br />
            🔹Delivered insightful dashboards and reports which was used by stakeholder to take decisions. For visualization of data, library named Plotly, software - Tableau was used and for data management and storing Excel.<br />
          </Event>
          <Event interval={"August 2020 – September 2020"} title={"Data Analyst Intern"} subtitle={"KPMG, Mumbai"}>
            🔹Assigned tasks like Data Cleaning, Plotting of Data, Data Quality Assessment, Insights of Data and Presentation of data.<br/>
            🔹Analyze and provided the outcomes of dataset given technology used for the same was Python and Microsoft Excel.
            🔹Algorithms used in internship were- Linear Regression, Clustering, Decision Tree and Exploratory Data Analysis (EDA)
          </Event>
        </Timeline>


        <h1 className="text-2xl text-gradient pt-10 text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1><br />
        <Timeline>
          <Event interval={"2020 – 2022"} title={"Master of Science in Computer Science"} subtitle={"Somaiya Vidyavihar University"}> </Event>
          <Event interval={"2017 – 2020"} title={"Bachelor of Science in Computer Science"} subtitle={"University of Mumbai"}></Event>
        </Timeline>
      </React.Fragment>
    </main>
  );
}

export default About;
