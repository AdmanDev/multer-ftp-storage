import { AccessOptions } from "basic-ftp"

export type FtpConfig = AccessOptions & {
	basepath?: string
}