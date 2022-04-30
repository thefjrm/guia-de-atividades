import Button from "../button";
import style from "./Cronometro.module.scss";
import Relogio from "./relogio/index";

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
