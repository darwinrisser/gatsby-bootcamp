import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Hello From Gatsby!</h1>
        <h2>Welcome to my project.</h2>
        <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage;