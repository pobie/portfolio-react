import { Box, Container, Link } from '@chakra-ui/react';
import FadeInOut from 'src/FadeInOut';
import { Link as ReactRouterLink } from 'react-router-dom';

type PortfolioPageProps = {
  children: React.ReactNode;
};

function PortfolioPage({ children }: PortfolioPageProps) {
  return (
    <FadeInOut>
      <Container mt={4}>
        <Link as={ReactRouterLink} to="/">
          Back
        </Link>
        <br /> <br />
        <Box mt={4}>
          <article>{children}</article>
        </Box>
      </Container>
    </FadeInOut>
  );
}

export default PortfolioPage;
