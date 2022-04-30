import style from "./List.module.scss";

export default function List() {
  const tarefas = [
    {
      tarefa: "Fazer café",
      tempo: "00:10:00",
    },
    {
      tarefa: "Estudar React",
      tempo: "00:30:00",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Lista de tarefas</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index} className="item">
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
