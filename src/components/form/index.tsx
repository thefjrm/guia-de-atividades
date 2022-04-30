import Botao from "../button";
import style from "./Form.module.scss";

export default function Form() {
  return (
    <form className={style.novaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione uma nova atividade:</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer realizar hoje?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao>Adicionar</Botao>
    </form>
  );
}
