import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';
import Primisc from '@prismicio/client';
import { getPrimiscClient } from '../../services/prismic';
import styles from './styles.module.scss';
import { RichText } from 'prismic-dom'
import React from 'react';
import Link from 'next/link';

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    updatedAt: string;
    id : string;
}
interface PostProps {
    posts: Post[];
}

export default function Posts({ posts }: PostProps) {
    return (
        <>
            <Head>
                <title>Post | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map(post => (
                        // <div key={post.id}>
                        <Link href={`/posts/${post.slug}`} key={post.id} >
                            <a key={post.id}>
                                <time >{post.updatedAt}</time>
                                <strong>{post.title}</strong>
                                <p>{post.excerpt}</p>
                            </a>
                        </Link>
                        // </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
// export const getServerSideProps: GetServerSideProps = async () => {    
    const prismic = getPrimiscClient()

    const response = await prismic.query(
        [Primisc.predicates.at('document.type', 'publication')],
        {
            fetch: ['post.title', 'post.content'],
            pageSize: 50
        }
    )

    debugger;
    const posts = response.results.map(p => {
        return {
            slug: p.uid,
            id : p.id,
            title: RichText.asText(p.data.title),
            excerpt: p.data.content.find(x => x.type === 'paragraph')?.text ?? '',
            updatedAt: new Date(p.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }),
        }
    })

    return {
        props: { posts }
    }
}