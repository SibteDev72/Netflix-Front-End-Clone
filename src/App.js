import './App.css';
import Footer from './components/footer/Footer';
import HomePage from './components/homepage/HomePage';
import MoviesLists from './components/moviesLists/MoviesLists';
import Navbar from './components/Navbar';
import TrendingMoviesList from './components/trendingmovieslist/TrendingMoviesList';

const App = () => {
  
  return (
    <div className="App">     
          <Navbar />
          <HomePage />
          <MoviesLists
          title = "Continue Watching" 
          />
          <MoviesLists
            title = "New & Popular"
          />
          <TrendingMoviesList 
          title = "Top 10 Movies in Pakistan Today" />  
          <MoviesLists 
            title = "Action" 
          /> 
          <MoviesLists 
          title = "Comedies" 
          /> 
          <Footer />
    </div>
  );
}

export default App;
