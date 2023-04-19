import Navbar from '../common/navbar/Navbar'
import Footer from '../common/footer/Footer'

const NavbarAndFooterLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
       {children}
      <Footer />
    </div>
  )
}

export default NavbarAndFooterLayout
