/**
 * Define a custom error class for FTP errors.
 */
export class FtpError extends Error {
	public innerError?: Error

	/**
	 * Initializes a new instance of the FtpError class.
	 * @param {string} message - The error message.
	 * @param {Error} innerError - The inner error.
	 */
	constructor(message: string, innerError?: Error) {
		super(innerError ? `${message}\n${innerError.message}` : message)
		this.name = this.constructor.name
		this.innerError = innerError
	}

	/** @inheritdoc */
	public toString() {
		return this.innerError ? `${this.message}\n${this.innerError.toString()}` : this.message
	}
}