import Heading from "../../components/Heading";
import Head from "next/head";
import { GetStaticProps } from "next";

import Link from "next/link";

import { Contact } from "../../types";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: Array<Contact> = await res.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            contacts: data
        }
    }
}

interface ContactsProps {
    contacts: Array<Contact>
}

const Contacts = ({contacts}: ContactsProps) => {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text="Contacts list:"/>
            <ul>
                {contacts && contacts.map(({id, name, email}: Contact) => (
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>
                            <strong>{name}</strong> {email}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Contacts;