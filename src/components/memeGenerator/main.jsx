import React from "react";

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  console.log("dfgefgwdhgf");

  const [allMemes, setAllMemes] = React.useState([]);

  function memeDisplay() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, imageUrl: newMemeUrl }));
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  return (
    <main className="main">
      <div className="form">
        <div className="form-input">
          <label htmlFor="topText">
            Top Text
            <input
              type="text"
              name="topText"
              placeholder="One does not simply"
              onChange={handleChange}
              value={meme.topText}
            />
          </label>

          <label htmlFor="bottomText">
            Bottom Text
            <input
              type="text"
              name="bottomText"
              placeholder="Walk into Mordor"
              onChange={handleChange}
              value={meme.bottomText}
            />
          </label>
        </div>

        <button onClick={memeDisplay}>Get a new meme image 🖼</button>
      </div>

      <div className="meme">
        <img src={meme.imageUrl} alt="Meme" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
