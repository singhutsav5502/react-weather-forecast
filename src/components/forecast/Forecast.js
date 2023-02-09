import React from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './Forecast.css';
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', "Sunday"];
const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <div className='forecast-container'>
            <label className="forecast-title">Daily </label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 5).map((item, idx) => (
                    // div instead of accordion
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={process.env.PUBLIC_URL + `/icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>

                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </div>
    )
};
export default Forecast;