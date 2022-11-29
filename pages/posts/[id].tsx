import React from 'react';
import { GetServerSideProps } from "next";
import { Contact, IContactInfo, Post } from "../../types";
import Heading from "../../components/Heading";
import PostInfo from "../../components/PostInfo";


export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id}: any = context.params;

    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const postData: Post = await postRes.json();

    const contactRes = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`)
    const contactData: IContactInfo = await contactRes.json();

    if (!postData) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post: postData,
            contact: contactData
        }
    }
}

interface IPostProps {
    post: Post
    contact: IContactInfo
}

const Post = ({post, contact}: IPostProps)  =>
{
    return(
        <>
            <PostInfo post={post} contact={contact}/>
        </>
     )
}

export default Post;