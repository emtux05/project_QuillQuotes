import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/global.css';


export const metadata = {
    title: 'Promtopia',
    description: 'Discover and share AI prompt'
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