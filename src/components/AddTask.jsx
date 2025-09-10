import { useState } from 'react';
import Input from './Input';

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="space-y-4 p-6 bg-blue-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o Titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          onAddTaskSubmit(title, description);
          setTitle('');
          setDescription('');
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium">
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
