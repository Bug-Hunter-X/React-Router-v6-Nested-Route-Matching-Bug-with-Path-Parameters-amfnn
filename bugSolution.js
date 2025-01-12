import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId/profile" element={<UserProfile />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserProfile() {
  const { userId } = useParams();
  // Add check to ensure userId exists and is valid before rendering
  if (!userId) {
    return <Navigate to="/" replace/>; // Redirect to home if no userId
  }
  return <h1>User Profile {userId}</h1>;
}

function UsersList() {
  return <h1>List of Users</h1>;
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

//Import Navigate for redirection
import { Navigate } from 'react-router-dom';