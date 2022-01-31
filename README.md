# react-native-sticky-state

Custom hook to persist React Native state using [AsyncStorage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)

If you're looking to persist React state, check out [use-sticky-state](https://www.npmjs.com/package/use-sticky-state)

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
const [state, setState] = useStickyState(defaultValue, loadingValue, storageKey);
```

| Property     | Description                                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| defaultValue | The default value used if storageKey was not previously set                                                                            |
| loadingValue | The value temporarily used while waiting for `useStickyState()` to asynchronously grab previous value, can be the same as defaultValue |
| storageKey   | Unique string key used to persist data, using [AsyncStorage](https://github.com/react-native-async-storage/async-storage) package      |
