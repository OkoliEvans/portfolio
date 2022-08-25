import './App.css';
import { NavBar } from "./components/NavBar";
import { Contact } from './components/Contact';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectCard } from './components/ProjectCard';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

    return (
        <div className='App'>
            <NavBar />
            <Banner/>
            <Skills />
            <Projects />
            <ProjectCard />
            <Footer />
            <Contact />
        </div>
    );
}

export default App;