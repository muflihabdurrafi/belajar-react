const root = document.querySelector("#root");
function tick() {
  const element = /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, new Date().toLocaleTimeString()), /*#__PURE__*/React.createElement("li", null, "Apple"), /*#__PURE__*/React.createElement("li", null, "Orange"), /*#__PURE__*/React.createElement("li", null, "Grape"));
  ReactDOM.render(element, root);
}
setInterval(function () {
  tick();
}, 1000);