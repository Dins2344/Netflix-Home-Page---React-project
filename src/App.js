
import './App.css';
import Banner from './components/banner/banner';
import NavBar from './components/navBar';
import ScrollingPost from './components/scrollPosters/scrollingPost';
import { comedyUrl,originalsUrl,adventureUrl,animationUrl } from './urls/urls';

const posts = [
  { title: 'Comedy', isSmall: true, url: comedyUrl },
  { title: 'Adventure', isSmall: true, url: adventureUrl },
  { title: 'Animation', isSmall: true, url: animationUrl }
];
function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <ScrollingPost tittle = 'Netflix Originals' url={originalsUrl}/>
     {posts.map(post => (
       <ScrollingPost 
         key={post.title} 
         title={post.title} 
         isSmall={post.isSmall} 
         url={post.url}
       />
     ))}
    </div>
  );
}

export default App;
