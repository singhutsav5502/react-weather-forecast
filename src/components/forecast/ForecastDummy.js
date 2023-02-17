import React from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './Forecast.css';
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', "Sunday"];
const ForecastDummy = ({ visibility, suffix, theme }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    <div className={`forecast-container ${visibility}`}>

      <Accordion allowZeroExpanded>
        {forecastDays.slice(0, 5).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={` daily-item ${theme}`}>
                  <img alt="weather" className="icon-small" src={process.env.PUBLIC_URL + `/icons/01d.png`} />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">description</label>
                  <label className="min-max">mt{suffix} / Mt{suffix}</label>

                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={`daily-details-grid ${theme}`}>
                <div className="daily-details-grid-item">
                  <label className="daily-details-grid-desc">Humidity: </label>
                  <label className="daily-details-grid-value">xx %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-grid-desc">Wind Speed: </label>
                  <label className="daily-details-grid-value">xx m/s</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

        ))}

      </Accordion>
    </div>
  )
};
export default ForecastDummy;