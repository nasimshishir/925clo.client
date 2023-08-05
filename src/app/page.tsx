import { Herov1 } from '@components'
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import { redirect } from 'next/navigation';


export default function Home() {
  // const { user } = useDropdownMenuContext();
  const user = true;

  if (!user) {
    redirect('/auth')
  }

  return (
    <main className='min-h-screen'>
      <Herov1 />
    </main>
  )
}
