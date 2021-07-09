import React from "react";
import "./banner.css";
let g;
const b = [
  [
    "Black Mirror",
    "https://picfiles.alphacoders.com/175/175575.jpg",
    "A contemporary British re-working of The Twilight Zone with stories that tap into the collective unease about our modern world.  Over the last ten y...",
  ],
  [
    "The Witcher",
    "https://1.bp.blogspot.com/-NjoFBaND3ZA/XcIgfcmoJeI/AAAAAAAAgZI/SvNRkZJ_FNwU96IkUSbd4R_b9TXxm3I2wCLcBGAsYHQ/s2560/the-witcher-henry-cavill-4k-new-8s-2560x1440.jpg",
    "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts",
  ],
  [
    "Breaking Bad",
    "https://wallpapercave.com/wp/KD5fyjQ.jpg",
    "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future",
  ],
  [
    "Vikings",
    "https://images2.alphacoders.com/691/thumb-1920-691802.jpg",
    "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean",
  ],
  [
    "Sherlock",
    "https://i.pinimg.com/originals/fa/8d/e8/fa8de8a38a9759b66e7389d1892539de.jpg",
    "A modern update finds the famous Sherlock Holmes and his doctor partner solving crime in 21st century London",
  ],
];
function rand(maxLimit = 5) {
  let rand = Math.random() * maxLimit;
  return Math.floor(rand);
}
g = rand(5);

function Banner() {
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${b[g][1]})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{b[g][0]}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_d">{b[g][2]}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
}
export default Banner;
