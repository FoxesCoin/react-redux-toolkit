type SetState<T> = (value: T | ((current: T) => T)) => void;
