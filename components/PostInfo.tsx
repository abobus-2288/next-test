import React from 'react';

import Heading from "./Heading";
import { Contact, IContactInfo, Post } from "../types";

interface ContactInfoProps {
    post: Post
    contact: IContactInfo
}

const PostInfo = ({post, contact}: ContactInfoProps) => {

    const {id, userId, title, body} = post || {};

    if (!post) {
        return (
            <Heading tag="h3" text="Post doesn't exist"/>
        )
    }

    return (
        <>
            <Heading tag="h3" text={title}/>
            <div>
                {body}
            </div>
            <div>
                <strong>User:</strong>
                <div>
                    {contact.email}
                </div>
                <div>
                    {`${contact.address.city}, ${contact.address.street}`}
                </div>
            </div>
        </>
    )
}

export default PostInfo;