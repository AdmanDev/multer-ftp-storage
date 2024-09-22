import { Router, Request, Response } from "express"
import multer from "multer"
import { MulterFtpStorage } from "@admandev/multer-ftp-storage"
import ftpCredential from "./ftpCredential.json"

export class Controller {

	public static init () {
		const ftpStorage = new MulterFtpStorage({
			ftp: {
				host: ftpCredential.host,
				user: ftpCredential.user,
				password: ftpCredential.password,
				basepath: "/ftp-storage"
			},
		})
		const multerConfig = multer({ storage: ftpStorage })

		const router = Router()
		router.post("/", multerConfig.any(), Controller.postFile)

		return router
	}

	private static postFile (req: Request, res: Response) {
		const file = req.files
		if (!file) {
			res.status(400).send("No file uploaded.")
			return
		}
		res.send(file)
	}
}