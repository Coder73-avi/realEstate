import Head from 'next/head'
import React from 'react'
import css from '../styles/View.module.css';

const view = () => {
  return (
    <>
        <Head>
            <title>View Page</title>
        </Head>
        <div className={css.view__page}>
            
        </div>
    </>
  )
}

export default view