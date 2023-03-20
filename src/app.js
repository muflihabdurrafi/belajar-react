const root = document.querySelector("#root");
function tick() {
    const element = (
        <ul>
            <li>{new Date().toLocaleTimeString()}</li>
            <li>Apple</li>
            <li>Orange</li>
            <li>Grape</li>
        </ul>
    );
    ReactDOM.render(element, root);
}

setInterval(function () {
    tick();
}, 1000);
