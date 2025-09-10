import { ChevronLeftIcon } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Title from '../components/Title';

function TaskPage() {
  const navigate = useNavigate();
  const [serchParams] = useSearchParams();
  const title = serchParams.get('title');
  const description = serchParams.get('description');

  return (
    <div className="w-screen h-screen bg-blue-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-blue-100">
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>
        <div className="bg-blue-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-blue-600">{title}</h2>
          <p className="text-blue-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
