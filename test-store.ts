import { useEffect, useMemo, useState } from 'react'
import makeObservable from "./makeObservable"

const testStore = makeObservable({ name: "user", count: 0 })

const useTest = () => {
  const [user, setUser] = useState(testStore.get())

  useEffect(() => {
    return testStore.subscribe(setUser)
  }, [])

  const actions = useMemo(() => {
    return {
      setName: (name: string) => testStore.set({ ...user, name }),
      incrementCount: () => testStore.set({ ...user, count: user.count + 1 }),
      decrementCount: () => testStore.set({ ...user, count: user.count - 1 }),
    }
  }, [user])

  return {
    state: user,
    actions
  }
}

export default useTest
