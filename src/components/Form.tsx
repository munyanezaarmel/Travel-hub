import React from "react";

export default function Form() {
    return (
      <div>
        <div className="bg-white flex justify-center items-start ">
          <table style={{ borderCollapse: "collapse", borderRadius: "30px" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    border: "5px solid #FFB700",
                    width: "250px",
                    borderRadius: "30px",
                    padding: "10px",
                  }}
                >
                  <input
                    type="text"
                    className="outline-none"
                    placeholder="Where are you going?"
                  />
                </td>
                <td
                  style={{
                    border: "5px solid #FFB700",
                    width: "250px",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <input type="date" className="outline-none" />
                </td>
                <td
                  style={{
                    border: "5px solid #FFB700",
                    width: "250px",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Adult"
                    className="outline-none"
                  />
                </td>
                <td
                  style={{
                    border: "5px solid #FFB700",
                    backgroundColor: "#006CE4",
                    width: "50px",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <button className="text-white text-center">Search</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex ml-60 p-5 items-center gap-4">
                <p>I'm travelling for work</p>
                <input type="checkbox" />
        </div>
      </div>
    );
}
