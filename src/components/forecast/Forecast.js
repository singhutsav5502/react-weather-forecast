import React from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './Forecast.css';
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', "Sunday"];
const Forecast = ({ data, visibility, isCelc, suffix }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    <div className={`forecast-container ${visibility}`}>

      <Accordion allowZeroExpanded>
        {data.list.splice(0, 5).map((item, idx) => {

          let temp_min = Math.round(item.main.temp_min);
          let temp_max = Math.round(item.main.temp_max);
          if (!isCelc) {
            temp_min = Math.round((temp_min * 1.8) + 32);
            temp_max = Math.round((temp_max * 1.8) + 32);
          }
          else {
            temp_min = Math.round(item.main.temp_min);
            temp_max = Math.round(item.main.temp_max);
          }

          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img alt="weather" className="icon-small" src={process.env.PUBLIC_URL + `/icons/${item.weather[0].icon}.png`} />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">{item.weather[0].description}</label>
                    <label className="min-max">{`${temp_min}${suffix} / ${temp_max}${suffix}`}</label>

                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label className="daily-details-grid-desc">Humidity: </label>
                    <label className="daily-details-grid-value">{item.main.humidity} %</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label className="daily-details-grid-desc">Wind Speed: </label>
                    <label className="daily-details-grid-value">{item.wind.speed} m/s</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>

          )
        })}

      </Accordion>
    </div>
  )
};
export default Forecast;