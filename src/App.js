import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Quizes from './components/Quizes/Quizes';
import Statistics from './components/Statistics/Statistics';
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
