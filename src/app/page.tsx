import { Herov1 } from '@components'
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import { redirect } from 'next/navigation';


export default function Home() {
  // const { user } = useDropdownMenuContext();
  const user = null;

  if (!user) {
    redirect('/auth')
  }

  return (
    <main>
      <Herov1 />
    </main>
  )
}
