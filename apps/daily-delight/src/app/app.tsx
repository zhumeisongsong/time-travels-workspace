import styled from '@emotion/styled';

import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';
import { Button } from '@shared/ui/button';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Button>Click me</Button>
    </StyledApp>
  );
}

export default App;
