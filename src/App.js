import Header from './components/Header'
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import NewContainer from './components/NewContainer';
import WatchPage from './components/WatchPage';


const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body/>,
  children : [
    {
      path : '/',
      element : <MainContainer/>
    },
    {
      path : "watch",
      element : <WatchPage/>
    },
    {
      path : '/results/:query',
      element : <NewContainer/>
    }
  ]
}])


function App() {
  return (
    
    <Provider store={store}>
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
