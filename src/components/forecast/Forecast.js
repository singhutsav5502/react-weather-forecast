import React from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './Forecast.css'
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', "Sunday"];
const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (<>
        <label className="forecast-title">Daily </label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 3).map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt="weather" className="icon-small" src={process.env.PUBLIC_URL + `/icons/${item.weather[0].icon}.png`} />
                                <label className="day">{forecastDays[idx] }</label>
                                <label className="description">{item.weather[0].description}</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>

                    </AccordionItemPanel>
                </AccordionItem>
            ))}

        </Accordion>
    </>)
};
export default Forecast;