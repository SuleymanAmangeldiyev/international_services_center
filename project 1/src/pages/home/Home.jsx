import React, { useState } from "react";
import "./home.css";
import Header from "./header/Header";
import Ghome from "./hopeP/Ghome";
import All from "./all/All";
import Best from "./best/Best";
import Filter from "./filter/Filter";
import Loved from "./loved/Loved";
import News from "./news/News";
import Wn from "./wn/Wn";
import Search from "./search/Search";

export default function Home() {
  const [nvs, setNvs] = useState({
    home: true,
    all: false,
    loved: false,
    best: false,
    wn: false,
    news: false,
    chat: false,
    connections: false,
    mainProfile: false,
    myProfile: false,
    search: false,
    filter: false,
  });
 
  const navhandilling = (e) => {
    setNvs({
      home: false,
      all: false,
      loved: false,
      best: false,
      wn: false,
      news: false,
      chat: false,
      connections: false,
      mainProfile: false,
      myProfile: false,
      search: false,
      filter: false,
      [e.target.name]: true
    });
  }

  const countriesInfoS = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua",
    "Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia",
    "Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica Côte d’Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech",
    "Republic Democratic People’s",
    "Republic of Korea Democratic",
    "Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s",
    "Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico Micronesia (Federated States of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua",
    "New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts",
    "Nevis Saint Lucia",
    "Saint",
    "Vincent",
    "the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome",
    "Principe Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra",
    "Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon",
    "Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian",
    "Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad",
    "Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom of Great Britain",
    "Northern",
    "Ireland",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  return (
    <div className="home">
      <Header />
      <nav className="nav">
        <ul className="nav-general">
          <li className="nav-g_firstLine">
            <div className="nav-g_btns">
              <button
                onClick={(e) => navhandilling(e)}
                type="button"
                name="home"
              >
                Home
              </button>
              <div></div>
              <button
                onClick={(e) => navhandilling(e)}
                type="button"
                name="all"
              >
                ALL
              </button>
            </div>
            <div className="nav-g_btns">
              <button
                onClick={(e) => navhandilling(e)}
                type="button"
                name="loved"
              >
                Loved
              </button>
              <div></div>
              <button
                onClick={(e) => navhandilling(e)}
                type="button"
                name="best"
              >
                Best
              </button>
            </div>
            <div className="nav-g_btns">
              <button onClick={(e) => navhandilling(e)} type="button" name="wn">
                W / N
              </button>
              <div></div>
              <button
                onClick={(e) => navhandilling(e)}
                type="button"
                name="news"
              >
                News
              </button>
            </div>
          </li>
          <li className="nav-g_firstLine">
            <div className="nav-g_btns">
              <button
                onClick={(e) => navhandilling(e)}
                type="button"
                name="search"
              >
                Search
              </button>
              <div></div>
              <button
                onClick={(e) => navhandilling(e)}
                type="button"
                name="filter"
              >
                Filter
              </button>
            </div>
            <div className="nav-g_btns">
              <button
                onClick={(e) => navhandilling(e)}
                type="button"
                name="chat"
              >
                Chat
              </button>
              <div></div>
              <button
                onClick={(e) => navhandilling(e)}
                type="button"
                name="connections "
              >
                Connection
              </button>
            </div>
            <div className="nav-g_btns">
              <button
                onClick={(e) => navhandilling(e)}
                type="button"
                name="mainProfile"
              >
                Profile
              </button>
              <img src="" alt="" />
            </div>
          </li>
        </ul>
      </nav>
      <main style={{ display: "flex" }}>
        <section className="aside-home-s">
          {countriesInfoS.map((country, i) => (
            <button type="button" key={country + i}>
              {country}
            </button>
          ))}
        </section>
        <section>
          {nvs.home && <Ghome />}
          {nvs.all && <All />}
          {nvs.best && <Best />}
          {nvs.filter && <Filter />}
          {nvs.loved && <Loved />}
          {nvs.news && <News />}
          {nvs.wn && <Wn />}
          {nvs.search && <Search />}
          
        </section>
      </main>
    </div>
  );
}
