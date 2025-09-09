import { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { v4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar programação',
      description: 'Revisar conceitos de React, JavaScript e CSS.',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Fazer compras',
      description: 'Comprar leite, pão, ovos e frutas.',
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      // preciso atualizar a tarefa
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //  não precisa atualizar

      return task;
    });

    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    if (window.confirm('realmente deseja deletar a Task?')) {
      const newTask = tasks.filter((task) => task.id != taskId);
      setTasks(newTask);
    }
  }

  function onAddTaskSubmit(title, description) {
    // Valida campos vazios
    if (!title.trim() || !description.trim()) {
      return alert('Preencha o título e a descrição da tarefa.');
    }

    // Verifica duplicidade
    const duplicate = tasks.some(
      (task) =>
        task.title.toLowerCase() === title.trim().toLowerCase() &&
        task.description.toLowerCase() === description.trim().toLowerCase(),
    );

    if (
      duplicate &&
      !window.confirm(
        'Já existe uma tarefa com esse título e descrição. Deseja realmente criar?',
      )
    ) {
      return;
    }

    // Adiciona a nova tarefa
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
