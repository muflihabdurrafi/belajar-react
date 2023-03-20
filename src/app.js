const root = document.querySelector("#root");
function App() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <button
                onClick={function () {
                    setCount(count - 1);
                }}
            >
                -1
            </button>
            <span>{count}</span>
            <button
                onClick={function () {
                    setCount(count + 1);
                }}
            >
                +1
            </button>
        </>
    );
}

// const element = (
//     <ul>
//         <li>{new Date().toLocaleTimeString()}</li>
//         <li>Muflih</li>
//         <li>Orange</li>
//         <li>Grape</li>
//     </ul>
// );
ReactDOM.render(<App />, root);
