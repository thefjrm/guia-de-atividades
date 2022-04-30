import Item from "./item";
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
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
