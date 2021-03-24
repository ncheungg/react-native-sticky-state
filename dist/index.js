import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

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
