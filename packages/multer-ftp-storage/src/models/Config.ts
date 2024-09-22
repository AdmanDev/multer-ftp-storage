import { FtpConfig } from "./FtpConfig"
import { StorageOptions } from "./StorageOptions"

export type Config = {
	ftp: FtpConfig
	multer?: StorageOptions
}