import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About</h1>
        <h2>I am a front end web developer from Austin, TX</h2>
        <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
      </div>
    </Layout>
  )
}

export default About;