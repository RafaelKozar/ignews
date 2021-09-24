import { GetStaticProps } from 'next';
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
                {posts.map(post => (
                    <div className={styles.posts}>
                        <Link href={`/posts/${post.slug}`}>
                            <a href="#" key={post.slug}>
                                <time>{post.updatedAt}</time>
                                <strong>{post.title}</strong>
                                <p>{post.excerpt}</p>
                            </a>
                        </Link>
                    </div>
                ))}
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrimiscClient()

    const response = await prismic.query(
        [Primisc.predicates.at('document.type', 'post')],
        {
            fetch: ['post.title', 'post.content'],
            pageSize: 50
        }
    )

    debugger;
    const posts = response.results.map(p => {
        return {
            slug: p.uid,
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