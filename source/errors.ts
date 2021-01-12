export enum ErrorCode {
	DeviceNotFound,
	VaporyAppNotOpen,
	WrongMode,
	InvalidInput,
	BadRequest,
	Unknown,
}

export class ErrorWithCode extends Error {
	public readonly code: ErrorCode;

	constructor(message: string, code: ErrorCode) {
		super(message);
		Object.setPrototypeOf(this, ErrorWithCode.prototype);
		this.code = code;
	}
}

export class WrappedError extends ErrorWithCode {
	public readonly data: any;

	constructor(message: string, data: any) {
		super(message, ErrorCode.Unknown);
		this.data = data;
	}
}
