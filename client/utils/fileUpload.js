import multer from "multer";
import { v4 as uuidv4 } from "uuid";
const fileUpload = (fieldName) => {
    //! this part responsible for save image in local folder
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "uploads");
        },
        filename: (req, file, cb) => {
            cb(null, uuidv4() + "-" + file.originalname);
        },
    });
    //  ! to filter data
    function fileFilter(req, file, cb) {
        if (file.mimetype.startsWith("image")) {
            cb(null, true);
        } else {
            cb("Upload Image Only", false);
        }
    }
    const upload = multer({ storage, fileFilter });
    //? single to publish one photo
    return upload.single(fieldName);
};
export { fileUpload };
//? fieldName refer to field input name in html