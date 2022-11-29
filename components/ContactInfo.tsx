import React from 'react';

import Heading from "./Heading";
import { IContactInfo } from "../types";

interface ContactInfoProps {
    contact: IContactInfo
}

const ContactInfo = ({contact}: ContactInfoProps) => {

    const {name, address, phone, website, id, email} = contact || {};
    const {street, city} = address || {};

    if (!contact) {
        return (
            <Heading tag="h3" text="Contact doesn't exist"/>
        )
    }

    return (
        <>
            <Heading tag="h3" text={name}/>
            <div>
                <strong>Email:</strong>
                {email}
            </div>
            <div>
                <strong>Address:</strong>
                {`${city}, ${street}`}
            </div>
        </>
    )
}

export default ContactInfo;