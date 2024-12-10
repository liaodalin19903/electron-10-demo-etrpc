import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../main/api'

function HelloElectron(props: unknown): JSX.Element {

  const trpcReact = createTRPCReact<AppRouter>()

  let data: {
    text: string | undefined
  } = {
    text: undefined
  }

  trpcReact.subscription.useSubscription(undefined, {
    onData: (data) => {
      console.log(data);
    },
  });

  const clickHandle = () => {

    console.log('clicked')
    const res = trpcReact.greeting.useQuery({ name: 'Electron' });  // when execute this line it report error

    if(res && res.data) { data = res.data }

    console.log('props: ', props)

  }

  return (
    <>
      <div data-testid="greeting">{data ? data!.text : ''}</div>
      <button onClick={clickHandle}>click me</button>
    </>
  )
}

export default HelloElectron
