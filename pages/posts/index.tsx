import Head from "next/head";

import Heading from "../../components/Heading";
import { GetStaticProps } from "next";
import { Post } from "../../types";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Array<Post> = await res.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            posts: data
        }
    }
}

interface PostsProps {
    posts: Array<Post>
}

const Posts = ({posts}: PostsProps) => {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading text="Posts list:"/>
            <ul>
                {posts && posts.map(({id, title}: Post) => (
                    <li>
                        <Link href={`/posts/${id}`}>
                            <strong>{title}</strong>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Posts;