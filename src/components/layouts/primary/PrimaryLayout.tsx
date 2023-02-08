import Head from 'next/head'

import styles from './PrimaryLayout.module.css'

export interface IPrimaryLayout {
  children?: JSX.Element[] | JSX.Element | string
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default PrimaryLayout
