
import './App.css';
import Banner from './components/banner/banner';
import NavBar from './components/navBar';
import ScrollingPost from './components/scrollPosters/scrollingPost';
import { comedyUrl,originalsUrl,adventureUrl,animationUrl } from './urls/urls';
function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <ScrollingPost tittle = 'Netflix Originals' url={originalsUrl}/>
     <ScrollingPost tittle = 'Comedy' isSmall url= {comedyUrl} />
     <ScrollingPost tittle = 'Adventure' isSmall url= {adventureUrl} />
     <ScrollingPost tittle = 'Animation' isSmall url= {animationUrl} />
    </div>
  );
}

export default App;
