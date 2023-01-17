export const getKeys = <T>(obj: T) =>
	Object.keys(
		//@ts-ignore
		obj
	) as Array<keyof T>
