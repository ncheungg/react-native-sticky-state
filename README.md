# react-native-sticky-state

Custom hook to persist React Native state using [AsyncStorage](https://github.com/react-native-async-storage/async-storage)

## ⚙️ Installation

In your react-native project folder, run:

```bash
npm i react-native-sticky-state --save
```

## 💻 Example

```js
import useStickyState from "react-native-sticky-state";

const App = () => {
  const [count, setCount] = useStickyState(0, -1, "count");

  return (
    <View>
      <Button onPress={() => setCount(count + 1)}>
        <Text>Increment</Text>
      </Button>

      <Text>{count === -1 ? "loading..." : count}</Text>
    </View>
  );
};
```

## 📚 Usage

```js
const [state, setState] = useStickyState(!defaultValue, !loadingValue, !storageKey);
```

| Property     | Description                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------- |
| defaultValue | The default value used to the state if persistent storage not previously set                                      |
| loadingValue | The value temporarily used while waiting for useStickyState() to asynchronously grab storage value                |
| storageKey   | String key used to persist data using [AsyncStorage](https://github.com/react-native-async-storage/async-storage) |
