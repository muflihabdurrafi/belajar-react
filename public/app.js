const root = document.querySelector("#root");
function App() {
  const [activity, setActivity] = React.useState("");
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState([]);
  function generateID() {
    return Date.now();
  }
  function submitHandler(event) {
    event.preventDefault();
    if (!activity) {
      return setMessage("isi dong");
    }
    setMessage("");
    if (edit.id) {
      const updateTodo = {
        ...edit,
        activity,
        done: false
      };
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updateTodo;

      // console.log(updatedTodos);
      setTodos(updatedTodos);
      return cancelTodoHandler();
    }
    setTodos([...todos, {
      id: generateID(),
      activity,
      done: false
    }]);
    // console.log(todos);
    setActivity("");
  }
  function removeTodoHandler(aktivitasId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id != aktivitasId;
    });
    setTodos(filteredTodos);
    if (edit.id) cancelTodoHandler();
  }
  function editTodoHandler(aktivitas) {
    setActivity(aktivitas.activity);
    setEdit(aktivitas);
  }
  function cancelTodoHandler() {
    console.log("mantap");
    setEdit({});
    setActivity("");
  }
  function doneTodoHandler(aktivitas) {
    // if (aktivitas.done == true) {
    //     aktivitas.done = false;
    // } else {
    //     aktivitas.done = true;
    // }
    const updatedTodo = {
      ...aktivitas,
      done: aktivitas.done ? aktivitas.done = false : aktivitas.done = true
    };
    // console.log(updatedTodo);
    const doneTodoIndex = todos.findIndex(function (todo) {
      return todo.id == aktivitas.id;
    });
    const updatedTodos = [...todos];
    updatedTodos[doneTodoIndex] = updatedTodo;
    setTodos(updatedTodos);
    // console.log(updatedTodos);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple To Do List"), message ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red",
      fontSize: "1rem"
    }
  }, message) : "", /*#__PURE__*/React.createElement("form", {
    onSubmit: submitHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "masukan nama aktivitas",
    value: activity,
    onChange: function (e) {
      setActivity(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? "simpan" : "Tambah"), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelTodoHandler
  }, "Cancel")), todos.length > 0 ? /*#__PURE__*/React.createElement("ol", null, todos.map(function (aktivitas) {
    return /*#__PURE__*/React.createElement("li", {
      key: aktivitas.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: aktivitas.done,
      onChange: doneTodoHandler.bind(this, aktivitas)
    }), aktivitas.activity, aktivitas.done == true ? " (selesai) " : " (Belum selesai) ", /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, aktivitas)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, aktivitas.id)
    }, "Hapus"));
  })) : "tidak ada todos");
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);