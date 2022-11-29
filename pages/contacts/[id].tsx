import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

import { IContactInfo } from "../../types";
import { GetServerSideProps } from "next";

interface IContactProps {
    contact: IContactInfo
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id}: any = context.params;

    console.log(id)

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data: IContactInfo = await res.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            contact: data
        }
    }
}

const Contact = ({contact}: IContactProps) => {
    return (
        <>
            <Head>
                <title>Contact </title>
            </Head>
            <ContactInfo contact={contact}/>
        </>
    )
}

export default Contact;