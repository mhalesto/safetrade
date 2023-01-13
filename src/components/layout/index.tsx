import Header from "../header";
const Layout = ({ children }: any) => {

  return (
    <div>
      <Header />
      <div className="content font-mont">
        {children}
      </div>
    </div>
  )
}

export default Layout;