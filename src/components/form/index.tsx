import React from "react";
import Botao from "../button";

export default class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <form>
        <div>
          <label htmlFor="tarefa">Adicione uma nova atividade:</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer realizar hoje?"
            required
          />
        </div>
        <div>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00"
            max="01:30"
            required
          />
        </div>
        <Botao />
      </form>
    );
  }
}
