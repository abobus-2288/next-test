import React from "react";

import Heading from "../components/Heading";

import classes from "../styles/Home.module.scss";
import Head from "next/head";

const Hello = () => {
    return (
        <>
            <Head>
                <title>Main</title>
            </Head>
            <div className={classes.wrapper}>
                <Heading text="Hello world!"/>
            </div>
        </>

    )
}

export default Hello;