import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Post | Ignews</title>                
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>28 de Março de 2021</time>
                        <strong>Criando um Blog com contador de visitas usando NextJS e MongoDB</strong>
                        <p>Neste post vamos aprender a criar um Blog com NextJS, usando o MongoDB para gerenciar um contador de visitas em cada post e exibir no preview da home page. Usaremos a Fetch API para buscar os dados e o SWR para nos auxiliar nas revalidações dos mesmos. No final vamos hospedar em produção usando a Vercel.</p>
                    </a>
                    <a href="#">
                        <time>28 de Março de 2021</time>
                        <strong>Criando um Blog com contador de visitas usando NextJS e MongoDB</strong>
                        <p>Neste post vamos aprender a criar um Blog com NextJS, usando o MongoDB para gerenciar um contador de visitas em cada post e exibir no preview da home page. Usaremos a Fetch API para buscar os dados e o SWR para nos auxiliar nas revalidações dos mesmos. No final vamos hospedar em produção usando a Vercel.</p>
                    </a>
                    <a href="">
                        <time>28 de Março de 2021</time>
                        <strong>Criando um Blog com contador de visitas usando NextJS e MongoDB</strong>
                        <p>Neste post vamos aprender a criar um Blog com NextJS, usando o MongoDB para gerenciar um contador de visitas em cada post e exibir no preview da home page. Usaremos a Fetch API para buscar os dados e o SWR para nos auxiliar nas revalidações dos mesmos. No final vamos hospedar em produção usando a Vercel.</p>
                    </a>
                </div>
            </main>
        </>
    );
}