import Link from "next/link"
import styles from "../styles/TelaInicial.module.css"

export default function TelaInicial() {
    return (
        <div className={styles.principal}>
            <h1>Questionário</h1>
            <h2>Teste de Software</h2>
            <span>Desenvolvido por:</span>
            <span>Felipe Neves</span>
            <div>
                <Link href="/jogo" passHref>
                    <button className={styles.botao}>Iniciar</button>
                </Link>
            </div>
            <h6>Análise e Desenvolvimento de Sistemas</h6>
        </div>

        
    )
}

