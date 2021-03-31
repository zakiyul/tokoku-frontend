import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const ProductList = React.lazy(() => import("./pages/Product/List"));
const ProductSingle = React.lazy(() => import("./pages/Product/Single"));
const ProductCreate = React.lazy(() => import("./pages/Product/Create"));
const ProductUpdate = React.lazy(() => import("./pages/Product/Update"));
const TokoList = React.lazy(() => import("./pages/Toko/List"));
const TokoSingle = React.lazy(() => import("./pages/Toko/Single"));
const TokoCreate = React.lazy(() => import("./pages/Toko/Create"));
const TokoUpdate = React.lazy(() => import("./pages/Toko/Update"));

const routes = [
  { path: "/toko/update/:tokoId", Component: TokoUpdate },
  { path: "/toko/create", Component: TokoCreate },
  { path: "/toko/single/:tokoId", Component: TokoSingle },
  { path: "/toko", Component: TokoList },
  { path: "/product/single/:productId", Component: ProductSingle },
  { path: "/product/create", Component: ProductCreate },
  { path: "/product/update/:productId", Component: ProductUpdate },
  { path: "/product", Component: ProductList },
  { path: "/", Component: Home },
];

export default routes;
