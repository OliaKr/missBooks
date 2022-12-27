const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

const { useState } = React
import { AboutIndex } from './cmps/about-index.jsx'
import { Home } from './pages/home.jsx'
import { About } from './pages/about.jsx'
import { Team } from './cmps/team.jsx'
import { Vision } from './cmps/vision.jsx'
import { BookIndex } from './pages/book-index.jsx'
import { AppHeader } from './cmps/app-header.jsx'



import { BookDetails } from './pages/book-details.jsx'


export function App() {

    const [page, setPage] = useState('book')
    console.log('page is', page);


    return <Router>

        <AppHeader />

        <section className="main-layout app ">
            <main className="app-header full main-layout">
                <Routes>
                    <Route element={<Home />} path="/" /> 



                    <Route element={<About />} path="/about">
                        <Route element={<AboutIndex />} path="/about" />
                        <Route element={<Team />} path="/about/team" />
                        <Route element={<Vision />} path="/about/vision" />
                    </Route> 

                    <Route element={<BookIndex />} path="/book" />
                    <Route element={<BookDetails />} path="/book/:bookId" />



                    
                </Routes>
            </main>
            
        </section>
    </Router>
}