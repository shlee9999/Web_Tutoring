import Card from "./components/Card/index";
import "./App.css";

const cardData = [
  {
    title: "Free",
    userNumber: "10",
    color: "button2",
    cost: "0",
    storage: "2",
    support: "Email",
    buttonText: "Sign up for free",
  },
  {
    title: "Pro",
    userNumber: "20",
    color: "button1",
    cost: "15",
    storage: "10",
    support: "Priority email",
    buttonText: "Get started",
  },
  {
    title: "Enterprise",
    userNumber: "30",
    color: "button1",
    cost: "29",
    storage: "15",
    support: "Priority email",
    buttonText: "Contact us",
  },
];

const listData = [
  {
    title: `Features`,
    content: [
      `Cool stuff`,
      `Team feature`,
      `Stuff for developers`,
      `Another one`,
      `Last time`,
    ],
  },
  {
    title: `Resources`,
    content: [
      `Resource`,
      `Resource name`,
      `Another resource`,
      `Final resource`,
    ],
  },
  {
    title: `About`,
    content: [`Team`, `Locations`, `Privacy`, `Terms`],
  },
];
function App() {
  return (
    <div className="App">
      <div className="header">
        <div>
          <p>Company name</p>
        </div>
        <div class="link_box">
          <p className="link_list">Features</p>
          <p className="link_list">Exterprise</p>
          <p className="link_list">Support</p>
          <p className="link_list">Pricing</p>
          <button className="signup_button">Sign up</button>
        </div>
      </div>

      <div className="container">
        <p id="title">Pricing</p>
        <p className="body_text">
          Quickly build an effective pricing table for your potential customers
          with this
          <br />
          Bootstrap example. It's built with default Bootstrap components and
          utilities with
          <br />
          little customization.
        </p>
      </div>

      <div className="card_container">
        {cardData.map((cardItem, index) => (
          <Card {...cardItem} key={`card_item_${index}`}></Card>
        ))}
      </div>
      <hr />
      <footer>
        <div className="footer_container">
          <div>
            <img alt="icon" src="img/bootstrap-solid.svg"></img>
            <p>&#169;2017-2018</p>
          </div>

          {listData.map((value, index) => (
            <div>
              <b key={`title_${index}`}>{value.title}</b>
              <ul>
                {value.content.map((value2, index2) => (
                  <li
                    className="link_list"
                    key={`list${index}_content${index2}`}
                  >
                    {value2}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
export default App;
