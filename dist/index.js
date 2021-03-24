// import { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-community/async-storage";

const _interopDefault = (ex) =>
  ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;

const { useState, useEffect } = _interopDefault(require("react"));
const AsyncStorage = _interopDefault(require("@react-native-community/async-storage"));

const useStickyState = (defaultValue, loadingDefaultValue, key) => {
  const [value, setValue] = useState(loadingDefaultValue);

  useEffect(() => {
    const fetchFromAsyncStorage = async () => {
      const stickyValue = await AsyncStorage.getItem(key);
      const finalValue = stickyValue === null ? defaultValue : JSON.parse(stickyValue);
      setValue(finalValue);
    };
    fetchFromAsyncStorage();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

module.exports.useStickyState = useStickyState;
