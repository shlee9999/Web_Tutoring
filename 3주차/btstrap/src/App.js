import './App.css';
export default App;

function Card(props) {

  return <div className="col mb-4">
    <div className="card shadow-lg">
      <div className="card-header">
        <h4>{props.title}</h4>
      </div>
      <div className="card-body">
        <h1><b>{props.cost}</b> <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>{props.usernum} users included</li>
          <li>{props.storage} GB of storage</li>
          <li>{props.support} support</li>
          <li>{props.access}Help center access</li>
        </ul>
        <button className={`btn ${props.color} btn-lg`}>{props.btnBody}</button>
      </div>
    </div>
  </div>
}
function App() {

  return (
    <div className="App">
      <div className="container text-center py-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4">Pricing</h1>
            <p className="lead">Quickly build an effective pricing table for your potential customers with
              this<br />Bootstrap example. It's built with default Bootstrap components and utilities with<br />little customization.</p>
          </div>
        </div>
      </div>

      <div className="container text-center w-100">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <Card title="Free" usernum="10" color="btn-outline-primary" cost="$0" storage="2" support="Email" btnBody="Sign up for free"></Card>
          <Card title="Pro" usernum="20" color="btn-primary" cost="$15" storage="10" support="Priority email" btnBody="Get started"></Card>
          <Card title="Pro" usernum="30" color="btn-primary" cost="$29" storage="15" support="Priority email" btnBody="Contact us"></Card>
        </div>
      </div>


      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous">
      </script>

    </div>
  )

}




