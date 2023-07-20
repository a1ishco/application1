import "./styles.css"


function Home() {  
  const homeTxt =([["Weather forecast for tonight: dark."],["My style varies on my mood or the weather of the day"],["Wherever you go, no matter what the weather, always bring your own sunshine."]]);
  let value = homeTxt[Math.floor(Math.random() * homeTxt.length)];

console.log(value);
    return (
       <>
       <div className="homeText container mt-3">
        <h1 className="homePageTxt mt-5">{value}</h1>
       </div>
       
       </>
    )

}

export default Home