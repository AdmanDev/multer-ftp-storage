import { Client } from "basic-ftp"
import internal from "stream"
import { FtpConfig } from "./models/FtpConfig"
import { FtpError } from "./exceptions/FtpError"

/**
 * Defines the FTP service.
 */
export class FtpService {
	public readonly basepath: string

	/**
	 * Initializes a new instance of the FTPFileService class.
	 * @param {FtpConfig} ftpConfig - The FTP configuration.
	 */
	constructor(private ftpConfig: FtpConfig) {
		this.basepath = (ftpConfig.basepath || "") + "/"
	}

	/**
	 * Uploads a file to the FTP server.
	 * @param {internal.Readable} file - The file stream to upload.
	 * @param {string} remotePath - The remote path where to upload the file.
	 */
	public async uploadFile(file: internal.Readable, remotePath: string) {
		await this.createFolder(remotePath.split("/").slice(0, -1).join("/") || "/")

		const client = await this.getClient()
		const finalPath = this.basepath + remotePath

		try {
			await client.uploadFrom(file, finalPath)
		} catch (error: Any) {
			throw new FtpError(`Failed to upload file : ${finalPath}`, error)
		} finally {
			client.close()
		}
	}

	/**
	 * Deletes a file from the FTP server.
	 * @param {string} path - The path of the file to delete.
	 */
	public async deleteFile(path: string) {
		if (!path) {
			return
		}

		const client = await this.getClient()
		const finalPath = this.basepath + path

		try {
			await client.remove(finalPath, true)
		} catch (error: Any) {
			throw new FtpError(`Failed to delete file : ${finalPath}`, error)
		} finally {
			client.close()
		}
	}

	/**
	 * Creates a folder on the FTP server.
	 * @param {string} dir - The path of the folder to create.
	 */
	public async createFolder(dir: string) {
		if (!dir) {
			return
		}

		const client = await this.getClient()
		const finalPath = this.basepath + dir

		try {
			await client.ensureDir(finalPath)
		} catch (error: Any) {
			throw new FtpError(`Failed to determine if the directory exists : ${finalPath}`, error)
		} finally {
			client.close()
		}
	}

	/**
	 * Gets FTP client.
	 * @returns {Promise<Client>} The FTP client.
	 */
	private async getClient() {
		try {
			const client = new Client()
			await client.access(this.ftpConfig)

			return client
		} catch (error: Any) {
			throw new FtpError("Failed to connect to the FTP server.", error)
		}
	}
}