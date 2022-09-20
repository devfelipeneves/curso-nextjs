import Link from "next/link"
import styles from "../styles/TelaInicial.module.css"

export default function TelaInicial() {
    return (
        <div className={styles.principal}>
            <h1>Questionário - Teste de Software</h1>
            <span>Desenvolvido por: Felipe Neves</span>
            <div>
                <Link href="/jogo" passHref>
                    <button className={styles.botao}>Iniciar</button>
                </Link>
            </div>
        </div>

        
    )
}

