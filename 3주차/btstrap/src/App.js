import './App.css';
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
          <div className="col mb-4">
            <div className="card shadow-lg">
              <div className="card-header">
                <h4>Free</h4>
              </div>
              <div className="card-body">
                <h1><b>$0</b> <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-outline-primary btn-lg">Sign up for free</button>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-lg">
              <div className="card-header">
                <h4>Pro</h4>
              </div>
              <div className="card-body">
                <h1><b>$15</b> <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-primary btn-lg">Get started</button>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-lg">
              <div className="card-header">
                <h4>Enterprise</h4>
              </div>
              <div className="card-body">
                <h1><b>$29</b><small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-primary btn-lg">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous">
      </script>

    </div>
  )

}

export default App;



