import Card from "./components/Card";
import "./App.css";
export default App;

function App() {
  return (
    <div className="App">
      <div className="header">
        <div>
          <p>Company name</p>
        </div>
        <div id="linkBox">
          <p>
            <a href="./">Features</a>
          </p>
          <p>
            <a href="./">Exterprise</a>
          </p>
          <p>
            <a href="./">Support</a>
          </p>
          <p>
            <a href="./">Pricing</a>
          </p>
          <button id="signupButton">Sign up</button>
        </div>
      </div>

      <div className="container">
        <p id="title">Pricing</p>
        <p id="bodyText">
          Quickly build an effective pricing table for your potential customers
          with this
          <br />
          Bootstrap example. It's built with default Bootstrap components and
          utilities with
          <br />
          little customization.
        </p>
      </div>

      <div className="cardContainer">
        <Card
          title="Free"
          userNumber="10"
          color="button2"
          cost="$0"
          storage="2"
          support="Email"
          buttonText="Sign up for free"
        ></Card>
        <Card
          title="Pro"
          userNumber="20"
          color="button1"
          cost="$15"
          storage="10"
          support="Priority email"
          buttonText="Get started"
        ></Card>
        <Card
          title="Enterprise"
          userNumber="30"
          color="button1"
          cost="$29"
          storage="15"
          support="Priority email"
          buttonText="Contact us"
        ></Card>
      </div>
      <hr />
      <footer>
        <div className="footerContainer">
          <div>
            <img alt="icon" src="img/bootstrap-solid.svg"></img>
            <p>&#169;2017-2018</p>
          </div>
          <div>
            <b>Features</b>
            <ul>
              <li>
                <a href="./">Cool stuff</a>
              </li>
              <li>
                <a href="./">Random feature</a>
              </li>
              <li>
                <a href="./">Team feature</a>
              </li>
              <li>
                <a href="./">Stuff for developers</a>
              </li>
              <li>
                <a href="./">Another one</a>
              </li>
              <li>
                <a href="./">Last time</a>
              </li>
            </ul>
          </div>
          <div>
            <b>Resources</b>
            <ul>
              <li>
                <a href="./">Resource</a>
              </li>
              <li>
                <a href="./">Resource name</a>
              </li>
              <li>
                <a href="./">Another resource</a>
              </li>
              <li>
                <a href="./">Final resource</a>
              </li>
            </ul>
          </div>
          <div>
            <b>About</b>
            <ul>
              <li>
                <a href="./">Team</a>
              </li>
              <li>
                <a href="./">Locations</a>
              </li>
              <li>
                <a href="./">Privacy</a>
              </li>
              <li>
                <a href="./">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
