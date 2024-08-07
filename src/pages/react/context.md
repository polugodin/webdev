```tsx
type MyContextType = {
  count: number
}

const MyContext = createContext<MyContextType>({} as MyContextType)

function ProviderComponent() {
  const [count] = useState(0)

  const contextValue = useMemo(
    () => ({
      count,
    }),
    [count],
  )

  return (
    <MyContext.Provider value={contextValue}>
      <ConsumerComponent />
    </MyContext.Provider>
  )
}

function ConsumerComponent() {
  const { count } = useContext(MyContext)

  return count
}
```
