import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [emojiOut, emojiMeaning] = useState("");

  var signsList = {
    "👋": "Waving Hand",
    "🤚": "Raised Back of Hand",
    "🖐️": "Hand with Fingers Splayed",
    "✋": "Raised Hand",
    "🖖": "Vulcan Salute",
    "👌": "OK Hand",
    "🤏": "Pinching Hand",
    "✌": "Victory Hand",
    "🤞": "Crossed Fingers",
    "🤟": "Love-You Gesture",
    "🤘": "Sign of the Horns",
    "🤙": "Call Me Hand",
    "👈": "Backhand Index Pointing Left",
    "👉": "Backhand Index Pointing Right",
    "👆": "Backhand Index Pointing Up",
    "🖕": "Middle Finger",
    "👇": "Backhand Index Pointing Down",
    "☝": "Index Pointing Up",
    "👍": "Thumbs Up",
    "👎": "Thumbs Down",
    "✊": "Raised Fist",
    "👊": "Oncoming Fist",
    "🤛": "Left-Facing Fist",
    "🤜": "Right-Facing Fist",
    "👏": "Clapping Hands",
    "🙌": "Raising Hands",
    "👐": "Open Hands",
    "🤲": "Palms Up Together",
    "🤝": "Handshake",
    "🙏": "Folded Hands",
    "✍": "Writing Hand",
    "💅": "Nail Polish",
    "🤳": "Selfie",
    "💪": "Flexed Biceps",
    "🦾": "Mechanical Arm"
  };

  var displayList = {
    "✌": "Peace Sign",
    "🤘": "Rock On",
    "🤞": "Crossed Fingers",
    "🤝": "Handshake",
    "👏": "Applause"
  };

  var signs = Object.keys(displayList);

  function emojiTranslateHandler(event) {
    var userInput = event.target.value;
    var meaning = signsList[userInput];
    if (meaning === undefined) {
      meaning = "We do not have in our database";
    }
    emojiMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = signsList[emoji];
    emojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> hand-gestures </h1>
      <p> Enter a hand gesture to see its meaning </p>

      <input
        onChange={emojiTranslateHandler}
        placeholder="Enter here"
        style={{ maxWidth: "5rem", height: "4vh" }}
      />

      <div
        style={{ paddingTop: "1.2rem", color: "orange", fontSize: "1.8rem" }}
      >
        {" "}
        {emojiOut}{" "}
      </div>

      <h5> Click below emojis to see its meaning </h5>

      <ul>
        {signs.map((emoji) => {
          return (
            <li
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
              style={{
                display: "inline",
                padding: "0rem 0.8rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {emoji}{" "}
            </li>
          );
        })}
      </ul>

      <p style={{ paddingTop: "0.5rem" }}>
        Tip: Use windows key + ';' / windows key + '.' to enter emojis
      </p>

      <h5>
        back to my projects page
        <a
          style={{ textDecoration: "none" }}
          href="https://pruthvirajmv.netlify.app/projects.html"
        >
          {" "}
          iampruthviraj
        </a>
      </h5>
    </div>
  );
}
