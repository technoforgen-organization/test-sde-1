import React, { Component, useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleclick = () => {
//     setCount(count + 1);
//   };

//   useEffect(() => {
//     document.title = `Clicked ${count} times`;
//   });

//   return (
//     <div>
//       <h1> COUNTER APP</h1>
//       <button onClick={handleclick}> Clicked {count}times.</button>
//     </div>
//   );
// };

// class App extends Component {
//   state = {
//     count: 0,
//   };

//   handleClick = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`;
//   }

//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times`;
//   }
//   render() {
//     return (
//       <div>
//         <h1> COUNTER APP</h1>
//         <button onClick={this.handleClick}>
//           {" "}
//           Clicked {this.state.count}times.
//         </button>
//       </div>
//     );
//   }
// }

export default App;
