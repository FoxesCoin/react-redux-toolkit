type TypeConstant = string;

export function action<T extends TypeConstant, P>(
  type: T,
  payload: P
): { type: T; payload: P };

export function action<T extends TypeConstant>(type: T): { type: T };

export function action<T extends TypeConstant, P = undefined>(
  type: T,
  payload?: P
) {
  return { type, payload } as any;
}
