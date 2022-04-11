import Head from 'next/head'

const Title = ({children}) =>{
    return(
        <div>
      <Head>
        <title>{children}</title>
        </Head>
    </div>
    )
}

export default Title;