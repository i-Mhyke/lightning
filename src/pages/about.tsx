import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="About Sneck Jobs"
        description="Find out more about Sneck Jobs"
      />
    }
  >
    <div>About Page</div>
  </Main>
);

export default About;
