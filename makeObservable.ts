type Subscriber<T> = (value: T) => void;

export default function makeObservable<T>(target: T) {
  let subscribers: Array<Subscriber<T>>= []
  let value = target

  function get() {
    return value
  }

  function set(newValue: T) {
    if (value === newValue) return
    value = newValue
    subscribers.forEach((l) => l(value))
  }

  function subscribe(listenerFunc: Subscriber<T>) {
    subscribers.push(listenerFunc)
    return () => unsubscribe(listenerFunc) 
  }

  function unsubscribe(listenerFunc: Subscriber<T>) {
    subscribers = subscribers.filter((l) => l !== listenerFunc)
  }

  return {
    get,
    set,
    subscribe,
  }
}
