import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"
import Document, { Head }  from "next/document"
import { RichText } from "prismic-dom"
import React from "react"
import { getPrimiscClient } from "../../services/prismic"


interface PostProps {
    post: {
        slug: string;
        title: string;
        content: string;
        excerpt: string;
        updatedAt: string;        
    }
}

export default function Post({post} : PostProps){
    return (
        <>
            <Head>
                <title>{post.title} | Ignews</title>                
            </Head>

            <main>
                <article>
                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
                </article>
            </main>
        </>
    )
}

export const getServerSideProps : GetServerSideProps = async ({req, params}) =>{
    const session = await getSession({req})

    const {slug} = params;
    // if(!session)

    const prismic = getPrimiscClient(req);
    const response = await prismic.getByUID('post', String(slug), {})
    const post = {
        slug, 
        title : RichText.asText(response.data.title),
        content : RichText.asHtml(response.data.content),
        updatedAtAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }),
    }

    return {props : {post}}
}