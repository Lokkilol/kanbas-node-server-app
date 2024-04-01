const assignment = {
  id: 1, title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10", completed: false, score: 0,
};

const module = {
  id: "React101",
    "name": "Introduction to React.JS",
    "description": "Basic principles of rocket propulsion and rocket engines.",
    "course": "CS1234",
    "lessons": [
      {
        "_id": "React101A",
        "name": "What is React.JS?",
        "description": "A brief history of rocketry and space exploration.",
        "module": "CS1234"
      },
      {
        "_id": "React101B",
        "name": "Basic React Principles",
        "description": "Basic principles of react.",
        "module": "CS1234"
      },
      {
        "_id": "React101C",
        "name": "React States",
        "description": "Overview of different types of rocket engines.",
        "module": "CS1234"
      }
    ]
}


const Lab5 = (app) => {
  app.get("/a5/welcome", (req, res) => {
    res.send("Welcome to Assignment 5");
  });
  app.get("/a5/add/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const sum = parseInt(a) + parseInt(b);
    res.send(sum.toString());
  });
  app.get("/a5/subtract/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const sum = parseInt(a) - parseInt(b);
    res.send(sum.toString());
  });
  app.get("/a5/multiply/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const multiply = parseInt(a) * parseInt(b);
    res.send(multiply.toString());
  });
  app.get("/a5/divide/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const divide = parseInt(a) / parseInt(b);
    res.send(divide.toString());
  });

    app.get("/a5/calculator", (req, res) => {
        const { a, b, operation } = req.query;
        let result = 0;
        switch (operation) {
        case "add":
            result = parseInt(a) + parseInt(b);
            break;
        case "subtract":
            result = parseInt(a) - parseInt(b);
            break;
        case "multiply":
            result = parseInt(a) * parseInt(b);
            break;
        case "divide":
            result = parseInt(a) / parseInt(b);
            break;
            
        default:
            result = "Invalid operation";
        }
        res.send(result.toString());
    });

    app.get("/a5/assignment", (req, res) => {
        res.json(assignment);
    });
    app.get("/a5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });
    app.get("/a5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });

    // This is for Module

    app.get("/a5/module", (req, res) => {
        res.json(module)
    })

    app.get("/a5/module/name", (req, res) => {
        res.json(module.name)
    })

    app.get("/a5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
    });

    // Arrays


    const todos = [
        { id: 1, title: "Task 1", completed: false, description: "Create a NodeJS server with ExpressJS", },
        { id: 2, title: "Task 2", completed: true, description: "Create a NodeJS server with ExpressJS", },
        { id: 3, title: "Task 3", completed: false, description: "Create a NodeJS server with ExpressJS", },
        { id: 4, title: "Task 4", completed: true, description: "Create a NodeJS server with ExpressJS", },
    ];

    app.get("/a5/todos", (req, res) => {
        res.json(todos);
        const { completed } = req.query;
        if (completed !== undefined) {
        const completedBool = completed === "true";
        const completedTodos = todos.filter(
        (t) => t.completed === completedBool);
        res.json(completedTodos);
        return;
    }

    });

    app.get("/a5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    res.json(todo);
  });

    app.post("/a5/todos", (req, res) => {
    const newTodo = {
      ...req.body,
      id: new Date().getTime(),
    };
    todos.push(newTodo);
    res.json(newTodo);
  });


    app.delete("/a5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todos.splice(todos.indexOf(todo), 1);
    res.sendStatus(200);
  });


  app.get("/a5/todos/:id/title/:title", (req, res) => {
    const { id, title } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todo.title = title;
    res.json(todos);
  });

  app.get("/a5/todos/:id/completed/:completed", (req, res) => {
    const { id, title } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todo.completed = true;
    res.json(todos);
  });

  app.get("/a5/todos/:id/description/:description", (req, res) => {
    const { description } = req.params;
    const todo = todos.find((t) => t.description === description);

    res.json(todo.description);
  });

  app.put("/a5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.due = req.body.due;
    todo.completed = req.body.completed;
    res.sendStatus(200);
  });





  


};



export default Lab5;