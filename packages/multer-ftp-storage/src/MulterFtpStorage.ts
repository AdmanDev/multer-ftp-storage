import path from "path"
import { Request } from "express"
import { StorageEngine } from "multer"
import { FtpService } from "./FtpService"
import { Config } from "./models/Config"
import { StorageOptions } from "./models/StorageOptions"

const defaultOptions: StorageOptions = {
	fileNameFn: (req, file) => {
		const name = file.originalname
			.split(" ")
			.join("-")
			.replace(/(\W+)/gi, "-")
			+ Date.now()
			+ path.extname(file.originalname)

		return name
	}
}

/**
 * Defines the FTP Multer storage engine.
 */
export class MulterFtpStorage implements StorageEngine {
	private ftpService: FtpService
	private options?: StorageOptions

	/**
	 * Initializes a new instance of the MulterFTPStorage class.
	 * @param {Config} config - The configuration.
	 */
	constructor(config: Config) {
		this.ftpService = new FtpService(config.ftp)
		this.options = config.multer
	}

	/** @inheritdoc */
	public async _handleFile(
		req: Request,
		file: Express.Multer.File,
		cb: (error?: Any, info?: Partial<Express.Multer.File>) => void
	) {
		try {
			const filename = this.options?.fileNameFn?.(req, file) || defaultOptions.fileNameFn?.(req, file) as string
			await this.ftpService.uploadFile(file.stream, filename)
			cb(null, {
				path: file.path,
				size: file.size,
				filename: filename,
				originalname: file.originalname,
				destination: this.ftpService.basepath + filename,
			})
		} catch (error: unknown) {
			cb(error)
		}
	}

	/** @inheritdoc */
	public async _removeFile(req: Request, file: Express.Multer.File, cb: (error: Error | null) => void) {
		try {
			await this.ftpService.deleteFile(file.filename)
			cb(null)
		} catch (error: unknown) {
			cb(error as Error)
		}
	}

}