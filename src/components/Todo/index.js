function Todo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className="item-todo">
            <div className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
            >
                <input value={todo.task} />
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                <button>X</button>
            </div>
        </div>
    );
}

export default Todo;
