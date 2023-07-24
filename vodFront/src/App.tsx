import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LectureProvider } from './contexts/LectureContext';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import VideoLectureList from './pages/VideoLectureList';
import VideoLectureDetail from './pages/VideoLectureDetail';
import About from './pages/About';
import NavBar from "./components/layout/NavBar";
import Career from "./pages/Career";
import Notice from "./pages/Notice";
import Job from "./pages/Job";
import Faq from "./pages/Faq";
import Qaa from "./pages/QAAListPage";
import QAAListPage from "./pages/QAAListPage";
import QAARegisterPage from "./pages/QAARegisterPage";
import LoginPage from "./pages/LoginPage";
import './App.css';  // Add this line to import the CSS file

const App = () => {
    return (
        <LectureProvider>
            <Router>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh'
                }}>
                <Header />
                {/*<NavBar />*/}
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<LoginPage />} />
                    <Route path="/refa/*" element={
                        <>
                            <Routes >
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/career" element={<Career />} />
                                <Route path="/notice" element={<Notice />} />
                                <Route path="/job" element={<Job />} />
                                <Route path="/faq" element={<Faq />} />
                                <Route path="/qaa" element={<QAAListPage />} />
                                <Route path="/qaaregister" element={<QAARegisterPage />} />
                                <Route path="/lectures" element={<VideoLectureList />} />
                                <Route path="/lectures/:id" element={<VideoLectureDetail />} />
                            </Routes>

                        </>
                    }/>
                </Routes>
                    <Footer />
                </div>
            </Router>
        </LectureProvider>
    );
}

export default App;
