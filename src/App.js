import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Quizes from './components/Quizes/Quizes';
import Statistics from './components/Statistics/Statistics';
import Topic from './components/Topic/Topic';
import Main from './layout/Main';



function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Home></Home>,
          },

          {
            path: '/quiz/:quizId',
            loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
            element: <Quizes></Quizes>,
          },
          {
            path: '/statistics',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Statistics></Statistics>,
          },
          {
            path: "/blog",
            element: <Blog></Blog>
          },
          {
            path: "/*",
            element: <Error></Error>
          }
        ]
      }
    ]
  )
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
