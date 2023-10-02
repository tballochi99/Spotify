import './App.css';
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Genres from "./pages/Genres";
import ArtistsDetails from "./pages/ArtistsDetails";
import AlbumsDetails from "./pages/AlbumsDetails";
import GenresDetails from "./pages/GenresDetails";
import Search from "./pages/Search";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="Artists" element={<Artists/>}/>
                    <Route path="Albums" element={<Albums/>}/>
                    <Route path="Genres" element={<Genres/>}/>
                    <Route path="/ArtistsDetails/:id" element={<ArtistsDetails/>}/>
                    <Route path="/AlbumsDetails/:id" element={<AlbumsDetails/>}/>
                    <Route path="/GenresDetails/:id" element={<GenresDetails/>}/>
                    <Route path="Search" element={<Search/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));