import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading from "../components/Heading";

const Error = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    });

    return (
        <>
            <Heading text="Error 404"/>
            <p>Page not found</p>
        </>
    )
}

export default Error;