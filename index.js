const express = require("express");
const server = express();

server.use(express.json());

let projects = [
  {
    id: "1",
    title: "Primeiro Projeto",
    tasks: ["primeira task", "segunda task", "terceira task", "quarta task"]
  },
  {
    id: "2",
    title: "Segundo Projeto",
    tasks: ["primeira task", "segunda task", "terceira task", "quarta task"]
  }
];

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  let lastId = 0;
  lastId = projects.length;
  const { title, tasks } = req.body;

  let newProjects = {
    id: lastId + 1,
    title,
    tasks
  };

  projects = {
    ...projects,
    ...newProjects
  };

  return res.json(projects);
});

server.put("/projects/:id", (req, res) => {
  projects[req.params.id] = {
    ...projects[req.params.id],
    title: req.body.title
  };

  return res.json(projects[req.params.id]);
});

server.listen(3001);
