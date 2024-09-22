import { Request } from "express"

export type StorageOptions = {
	fileNameFn?: (req: Request, file: Express.Multer.File) => string
}