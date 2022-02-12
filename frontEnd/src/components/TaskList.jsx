import StatusDropdown from "./StatusDropdown";


const data = [
  {
    context: 'Adicionar Algo',
    status: 'pendente'
  },
  {
    context: 'Remover Algo',
    status: 'pronto'
  }
]

function TaskList() {
  return (
    <ul style={ { listStyleType: 'none' } }>
      { data.map((task) => (
        <li key={ task.context }>
          { task.context }
          <StatusDropdown status={ task.status } />
          <button>-</button>
          <button>x</button>
        </li>
      )) }
    </ul>
  );
}

export default TaskList;
