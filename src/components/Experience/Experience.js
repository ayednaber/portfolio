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
                    date={<Date>May 2023 - Aug 2023</Date>}
                    iconStyle={{background: "#3e497a", color: "#fff"}}
                    icon={<img src="https://ayednaber.github.io/portfolio/images/rbc.png" style={{width: '100%', height: '100%', borderRadius: "40%"}}></img>}
                    contentStyle={{ background: '#f0e9f7', color: '#0c1a27' }}
                >
                    <h3 className="vertical-timeline-element-title" style={{color: "black"}}>Software Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: "black"}}>RBC</h4>
                    <ul style={{margin: 0, padding: 0, listStyleType: "disc", marginLeft: "20px", fontSize: "13px", marginTop: "10px"}}>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Led the enhancement and migration of an end-to-end portfolio report engine to Oracle Analytics Server, utilizing deep knowledge of Java, SQL, and UNIX</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Devised an innovative solution to connect Java report engine to Oracle BI Publisher, facilitating uninterrupted project progress and ensuring on-time completion.</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={<Date>Jan 2022 - Dec 2022</Date>}
                    iconStyle={{background: "#3e497a", color: "#fff"}}
                    icon={<img src="https://ayednaber.github.io/portfolio/images/rbc.png" style={{width: '100%', height: '100%', borderRadius: "40%"}}></img>}
                    contentStyle={{ background: '#f0e9f7', color: '#0c1a27' }}
                >
                    <h3 className="vertical-timeline-element-title" style={{color: "black"}}>Full Stack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: "black"}}>RBC</h4>
                    <ul style={{margin: 0, padding: 0, listStyleType: "disc", marginLeft: "20px", fontSize: "13px", marginTop: "10px"}}>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Led development of internal enterprise web application in MEAN stack to generate portfolio reports for Wealth Management clients.</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Implemented new user authentication system, using authorization code flow with PKCE and Azure AD, matching newest security standards.</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Contributed 3 times to RBC's open source GitHub space, helping other teams apply newer solutions.</li>
                        <li style={{margin: 0, padding: 0, listStyleType: "disc"}}>Held biweekly Lunch & Learn upskilling sessions for 30+ employees about Angular & React.js</li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;