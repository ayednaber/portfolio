import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Date } from "../TimeLine/TimeLineStyles";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={<Date>April 2025 - Present</Date>}
                    iconStyle={{background: "#3e497a", color: "#fff"}}
                    icon={<img src="https://ayednaber.github.io/portfolio/images/ellisdon.png" style={{width: '100%', height: '100%', borderRadius: "40%"}}></img>}
                    contentStyle={{ background: '#f0e9f7', color: '#0c1a27' }}
                >
                    <h3 className="vertical-timeline-element-title" style={{color: "black"}}>Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: "black"}}>EllisDon</h4>
                    <ul style={{margin: 0, padding: 0, listStyleType: "disc", marginLeft: "20px", fontSize: "13px", marginTop: "10px"}}>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js), contributing to scalable and maintainable codebases.</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Built features and modules for an enterprise wide application using Angular and Java Spring Boot, integrating with a SQL-based relational database.</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Designed and implemented an AI-powered document-processing pipeline in Palantir Foundry to automatically extract submittals from complex project specification documents, improving accuracy and reducing manual review time through collaborative human-in-the-loop workflows.</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Collaborated in an Agile team environment with product owners, QA engineers, and DevOps to design and deliver microservice-based solutions aligned with cloud-native architecture.</li>
                    </ul>
                </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={<Date>May 2023 - Apr 2025</Date>}
                    iconStyle={{background: "#3e497a", color: "#fff"}}
                    icon={<img src="https://ayednaber.github.io/portfolio/images/rbc.png" style={{width: '100%', height: '100%', borderRadius: "40%"}}></img>}
                    contentStyle={{ background: '#f0e9f7', color: '#0c1a27' }}
                >
                    <h3 className="vertical-timeline-element-title" style={{color: "black"}}>Full Stack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: "black"}}>RBC</h4>
                    <ul style={{margin: 0, padding: 0, listStyleType: "disc", marginLeft: "20px", fontSize: "13px", marginTop: "10px"}}>
                    <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Successfully migrated 5 high-impact applications from PCF to OpenShift 4, enabling cloud-native deployments with zero downtime and improved scalability.</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Architected and deployed an asynchronous, event-driven Kafka consumer system using Java Spring Boot across multiple instances on OCP4 Gold Tier, delivering high availability and intelligent load management.</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Built and secured an Azure AD authorization flow for a .NET Web API interacting with a Java microservice, managing credentials via Hashicorp Vault to ensure production readiness and enterprise security compliance.</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Modernized a Java-based report engine by integrating it with Oracle BI Publisher and Oracle Analytics Server, streamlining enterprise reporting and reducing manual overhead.</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Led the development of an OAuth2.0 user authentication system using the authorization code flow with PKCE and Azure AD, aligning with Zero Trust architecture and RBC’s internal security standards.</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={<Date>Jan 2022 - Dec 2022</Date>}
                    iconStyle={{background: "#3e497a", color: "#fff"}}
                    icon={<img src="https://ayednaber.github.io/portfolio/images/rbc.png" style={{width: '100%', height: '100%', borderRadius: "40%"}}></img>}
                    contentStyle={{ background: '#f0e9f7', color: '#0c1a27' }}
                >
                    <h3 className="vertical-timeline-element-title" style={{color: "black"}}>Full Stack Developer (Co-op)</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: "black"}}>RBC</h4>
                    <ul style={{margin: 0, padding: 0, listStyleType: "disc", marginLeft: "20px", fontSize: "13px", marginTop: "10px"}}>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Developed tools and dashboards for an internal enterprise web application using the MEAN stack to support portfolio reporting for Wealth Management clients.</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Contributed to RBC’s open-source GitHub space 3 times, helping other teams adopt modern tooling and practices.</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Hosted tech upskilling sessions for 30+ employees, sharing knowledge on Angular and React.js frameworks.</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Rapidly adapted to enterprise workflows and collaborated across multiple teams, earning trust and increasing responsibilities early in the co-op term.</li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;