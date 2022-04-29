import logo from './logo.svg';
import './App.css';
import { useFetch } from './ApiReq';
import { useState } from "react"

function App() {
  const [language, setLanguage] = useState("javascript");
  const [ascending, setAscending] = useState(true);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const { data, error, loading } = useFetch(language, 'stars', `${ascending ? 'desc' : 'aesc'}`, page, pageLimit);
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fleo Assignment</h1>

        <div>
          <input placeholder='language' value={language} onChange={(event) => {
            setLanguage(event.target.value);
          }}></input>
          <select id="cars" name="cars" onChange={() => {
            setAscending(!ascending);
          }}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
          <input type="number" name="page_limit" placeholder='Limit' onChange={(event) => {
            setPageLimit(event.target.value);
          }}></input>
          <button >Search</button>
        </div>

        <div>
          <button onClick={() => {
            if (page != 0) {
              setPage(page - 1);
            }
          }}>Previous</button>
          <button onClick={() => {
            setPage(page + 1);
          }}>Next</button>

        </div>

        {loading && <p>Loading...</p>}
        {error && <p>Error :(</p>}
        {data.map(item => {
          return <div>
            <div style={{ width: "600px", height: "auto", marginTop: "20px", marginRight: "10px", marginLeft: "10px", background: "#fff", boxShadow: "2px", display: "block", borderRadius: "8px", paddingRight: "16px", paddingLeft: "16px", paddingTop: "1px" }}>
              <div style={{ marginTop: "20px" }}>
                <div style={{ color: "#000", fontWeight: "bold", marginTop: "16px", width: "max-content" }}>{item.name}</div>
                <p style={{ color: "#000", marginTop: "20px", width: "max-content", fontSize: "20px" }}>Owner Name : {item.owner.login}</p>
                <p style={{ color: "#000", marginTop: "0px", width: "max-content", fontSize: "20px" }}>Stars : {item.stargazers_count}</p>
                <p style={{ color: "#000", marginTop: "0px", width: "max-content", fontSize: "20px" }}>Forks : {item.forks}</p>
                <p style={{ color: "#000", marginTop: "0px", width: "max-content", fontSize: "20px" }}>Language : {item.forks}</p>
                <p style={{ color: "#000", marginTop: "0px", width: "max-content", fontSize: "20px", width: "400px" }}>Description: {item.description}</p>
              </div>
              <form>
              <input type="submit" value="View Repository" style={{ width: "100%", height: "36px", marginTop: "60px", background: "#282c34", borderColor: "#282c34", color: "#fff", borderRadius: "6px", marginBottom: "20px", outlineWidth: 0 }} onClick={() => {
                  window.open(item.html_url, '_blank').focus();
                }} />              </form>
            </div>
          </div>
        })}

        {/* button code */}



      </header>
    </div>
  );
}

export default App;