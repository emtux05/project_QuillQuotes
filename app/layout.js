import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/global.css';


export const metadata = {
    title: 'QuillQuotes',
    description: 'Discover and share your Quotes'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>

            <div className='main'>
                <div className='gradiant'/>
            </div>
            <main className='app'>
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout