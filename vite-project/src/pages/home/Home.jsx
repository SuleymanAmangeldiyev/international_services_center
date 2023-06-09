import React from "react";
import "./home.css";

export default function Home() {
  const countriesInfoS = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua", "Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia", "Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica Côte d’Ivoire", "Croatia", "Cuba", "Cyprus", "Czech", "Republic Democratic People’s", "Republic of Korea Democratic", "Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana" , "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy" , "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya","Kiribati", "Kuwait", "Kyrgyzstan", "Lao People’s", "Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico Micronesia (Federated States of)", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua", "New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Republic of Korea", "Republic of Moldova", "Romania", "Russian Federation","Rwanda", "Saint Kitts", "Nevis Saint Lucia", "Saint" , "Vincent",  "the Grenadines", "Samoa", "San Marino", "Sao Tome",  "Principe Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra", "Leone"
  , "Singapore" ,"Slovakia", "Slovenia", "Solomon", "Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",  "Syrian", "Arab Republic", "Tajikistan", "Thailand" ,"Timor-Leste", "Togo", "Tonga", "Trinidad",  "Tobago", "Tunisia", "Turkey" ,"Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom of Great Britain", "Northern", "Ireland", "United Republic of Tanzania", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu","Venezuela (Bolivarian Republic of)", "Viet Nam", "Yemen", "Zambia", "Zimbabwe" ];
  return (
    <div className="home">
      <header className="home-header"></header>
      <nav className="home-nav">
        <div className="home-nav_f1">
          <button>Home</button>
          <button>Chat</button>
          <button>Saved</button>
        </div>
        <div className="home-nav_f1">
          <input type="text" />
          <button type="button">Filter</button>
          <div className="home-nav_f2">
            <button type="button">Profile</button>
            <img src="" alt="avatar" />
          </div>
        </div>
      </nav>
      <section className="home-body">
        <section className="home-body_f1-countries">
          <h2>Countries</h2>
          <div className="home-body_f2-countries">
            {countriesInfoS.map((country) => (
              <button type="button" key={country}>
                {country}
              </button>
            ))}
          </div>
        </section>
        <main>
          <section className="home-sec-f1-s">
            <section className="home-sec-inner_s1">
              <div className="home-sec-inner_int1">
                <div></div>
                <div></div>
              </div>
              <div className="home-sec-inner_int2"></div>
            </section>
            <section className="home-sec-inner_s1"></section>
          </section>
          <section className="home-sec-f1-s"></section>
          <section className="home-sec-f1-s"></section>
        </main>
      </section>
    </div>
  );
}
