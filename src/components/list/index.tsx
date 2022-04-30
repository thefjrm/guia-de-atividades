export default function List() {
  const tarefas = [
    {
      tarefa: "Fazer café",
      tempo: "00:10",
    },
    {
      tarefa: "Estudar React",
      tempo: "00:30",
    },
  ];
  return (
    <aside>
      <h2>Lista de tarefas</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
