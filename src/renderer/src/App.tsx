import { ipcLink } from 'electron-trpc/renderer';
import superjson from 'superjson';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useState } from 'react';

import HelloElectron from './HelloElectron'


import { trpcReact } from './trpcClient'


function App(): JSX.Element {

  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpcReact.createClient({
      links: [ipcLink()],
      transformer: superjson
    })
  )

  return (
     <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <HelloElectron />
      </QueryClientProvider>
    </trpcReact.Provider>
  )
}




export default App
