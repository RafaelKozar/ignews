import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import { Head } from "next/document";
import { RichText } from "prismic-dom";
import { getPrimiscClient } from "../../services/prismic";

import styles from './post.module.scss';

interface PostProps {
    post: {
        slug: string;
        content: string;
        title: string;
        excerpt: string;
        updatedAt: string;
    }
}

export default function Post({ post }: PostProps) {
    return (
        <>
            <Head>
                <title>{post.title} | Ignews</title>
                <main className={styles.container}>
                    <article className={styles.post}>
                        <h1>{post.title}</h1>
                        <time>{post.updatedAt}</time>
                        <div
                            className={styles.postContent}
                            dangerouslySetInnerHTML={{ __html: post.content }} />
                    </article>
                </main>
            </Head>
        </>
    );
}


export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const session = await getSession({ req });
    debugger;
    // if(!session){}
    const { slug } = params;
    const prismic = getPrimiscClient(req);
    const response = await prismic.getByUID('Post', String(slug), {});
    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }),

    }
    return {
        props: { post }
    };
}