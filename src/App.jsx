import { Route, Routes } from "react-router-dom"
import LoginPage from "./assets/components/pages/login/LoginPage"
import OrderPage from "./assets/components/pages/order/OrderPage"
import ErrorPage from "./assets/components/pages/error/ErrorPage"


function App(){
  /// state (etat, données)

  /// comportements


  /// render
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:inputValue" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
