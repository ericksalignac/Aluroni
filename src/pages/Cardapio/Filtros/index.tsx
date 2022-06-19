import filtros from './filtros.json';
import styles from './Filtros.module.scss'

type Iopcao = typeof filtros[0];

export default function Filtros() {
    function selecionarFiltro(opcao: Iopcao) {}
    return(
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={styles.filtros__filtro} key={opcao.id} onClick={( () => selecionarFiltro(opcao))}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}