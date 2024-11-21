import { useQuery } from '@tanstack/react-query';

// Query function to fetch user data
const getUser = async () => {
  const response = await fetch('http://localhost:15001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer YOUR_AUTH_TOKEN', // Optional: if you need authentication
    },
    body: JSON.stringify({
      query: `
    query {
  getUser(id: "673d671b72b5a4abd193e083") {
    id
    name
  }
}
    `,
    }),
  });

  // Parse the response
  const { data, errors } = await response.json();

  // If there are errors, throw an error
  if (errors) {
    throw new Error(errors[0].message);
  }

  // Return the user data
  return data.user;
};

export function NxWelcome({ title }: { title: string }) {
  const query = useQuery({ queryKey: ['user'], queryFn: getUser });

  console.log(query.data);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    html {
      -webkit-text-size-adjust: 100%;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
      line-height: 1.5;
      tab-size: 4;
      scroll-behavior: smooth;
    }
    body {
      font-family: inherit;
      line-height: inherit;
      margin: 0;
    }
    h1,
    h2,
    p,
    pre {
      margin: 0;
    }
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: currentColor;
    }
    h1,
    h2 {
      font-size: inherit;
      font-weight: inherit;
    }
    a {
      color: inherit;
      text-decoration: inherit;
    }
    pre {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
    }
    svg {
      display: block;
      vertical-align: middle;
      shape-rendering: auto;
      text-rendering: optimizeLegibility;
    }
    pre {
      background-color: rgba(55, 65, 81, 1);
      border-radius: 0.25rem;
      color: rgba(229, 231, 235, 1);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
      overflow: auto;
      padding: 0.5rem 0.75rem;
    }

    .shadow {
      box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    .rounded {
      border-radius: 1.5rem;
    }
    .wrapper {
      width: 100%;
    }
    .container {
      margin-left: auto;
      margin-right: auto;
      max-width: 768px;
      padding-bottom: 3rem;
      padding-left: 1rem;
      padding-right: 1rem;
      color: rgba(55, 65, 81, 1);
      width: 100%;
    }
    #welcome {
      margin-top: 2.5rem;
    }
    #welcome h1 {
      font-size: 3rem;
      font-weight: 500;
      letter-spacing: -0.025em;
      line-height: 1;
    }
    #welcome span {
      display: block;
      font-size: 1.875rem;
      font-weight: 300;
      line-height: 2.25rem;
      margin-bottom: 0.5rem;
    }
          `,
        }}
      />
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome {title} 👋
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NxWelcome;
