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
                done: false,
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
        setTodos([
            ...todos,
            {
                id: generateID(),
                activity,
                done: false,
            },
        ]);
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
            done: aktivitas.done ? (aktivitas.done = false) : (aktivitas.done = true),
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

    return (
        <>
            <h1>Simple To Do List</h1>
            {message ? <div style={{ color: "red", fontSize: "1rem" }}>{message}</div> : ""}
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="masukan nama aktivitas"
                    value={activity}
                    onChange={function (e) {
                        setActivity(e.target.value);
                    }}
                />
                <button type="submit">{edit.id ? "simpan" : "Tambah"}</button>
                {edit.id && <button onClick={cancelTodoHandler}>Cancel</button>}
            </form>
            {todos.length > 0 ? (
                <ol>
                    {todos.map(function (aktivitas) {
                        return (
                            <li key={aktivitas.id}>
                                <input type="checkbox" checked={aktivitas.done} onChange={doneTodoHandler.bind(this, aktivitas)} />
                                {aktivitas.activity}
                                {aktivitas.done == true ? " (selesai) " : " (Belum selesai) "}
                                <button onClick={editTodoHandler.bind(this, aktivitas)}>Edit</button>
                                <button onClick={removeTodoHandler.bind(this, aktivitas.id)}>Hapus</button>
                            </li>
                        );
                    })}
                </ol>
            ) : (
                "tidak ada todos"
            )}
        </>
    );
}

ReactDOM.render(<App />, root);
