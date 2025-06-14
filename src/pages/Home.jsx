import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h1>Charms Dancewear</h1>
		<img src="./images/HomeBanner.jpg" width={'1000px'} alt="dancer" />
        <p>
          Add some charm to your dance wardrobe
        </p>
        <nav>
          <Link to="/products">Shop Now</Link> | {" "}
          <Link to="/about">Learn More About Charms Dancewear</Link>
        </nav>
      </main>
    </>
  )
};

