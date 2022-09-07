
import './style.css'

function App() {
  return (
    <div className="App" >
    <div className="yes">
    <h2 id="sub">SUBSCRIBE</h2>
    <h4 id="next">Sign up with your email address to receive news and updates.</h4>
    <form id="three">
        <label>
        <input type="text" id="fname" name="firstname" placeholder="Your first name.."/>
        </label>
        <label>
        <input type="text" id="sname" name="secondname" placeholder="Your second name.."/>
        </label>
        <label>
        <input type="email" id="mail" name="e-mail" placeholder="Your e-mail.."/>
        </label>
    </form>
    <button className="but" type="submit">Subscribe</button>
    </div>
      
    </div>
  );
}

export default App;
