import { BrowserRouter, Route, Routes } from "react-router-dom"
import CartPage from "../pages/CartPage/cartPage"
import EachProduct from "../pages/EachProduct/eachProduct"
import LoginPage from "../pages/loginPage/login"
import MyAccountPage from "../pages/MyAccountPage/myAccount"
import { ProductsPage } from "../pages/ProductsPage"
import SignUpPage from "../pages/signUpPage/signup"
import RecPasswordPage from "../pages/RecPasswordPage/resPassword"
import MyPurchasesPage from "../pages/MyPurchasesPage/purchasesPage"
import NotFoundPage from "../pages/NotFoundPage/notFound"
import AdminPage from "../pages/AdminPage/adminPage"
import FinishPurchase from "../pages/FinishPurchase/FinishPurchase"

export const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Signup" element={<SignUpPage/>}/>
                <Route path = "/Carrinho" element={<CartPage/>}/>
                <Route path = "/Produtos" element={<ProductsPage/>}/>
                <Route path = "/MinhaConta" element={<MyAccountPage/>}/>
                <Route path = "/Produto" element={<EachProduct/>}/>
                <Route path = "/Verificar-email" element={<RecPasswordPage/>}/>
                <Route path = "/Minhas-Compras" element={<MyPurchasesPage/>}/>
                <Route path = "/*" element={<NotFoundPage/>}/>
                <Route path = "/Admin" element={<AdminPage/>}/>
                <Route path = "/Finalizando-Compra" element={<FinishPurchase/>}/>
            </Routes>
        </BrowserRouter>
    )
}