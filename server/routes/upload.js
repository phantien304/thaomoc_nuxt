//const fileType = require('file-type');

exports = module.exports = function(config) {
    const express = require('express');

    const router = express.Router();

    const upload = require('../services/upload');

    const miltiUpload = upload.array('files');

    router.post('/files/uploadFiles', function(req, res) {
        miltiUpload(req, res, function(err) {
            if (err) {
                return res.json({
                    errorCode: 422,
                    message: err.message,
                    success: false
                });
            }
            var data = [];
            req.files.forEach( (file) => {
                var ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
                var type = file.mimetype.substring(0,file.mimetype.indexOf('/') );
                data.push({
                    'url':  file.location,
                    'ext':  ext,
                    'type': type,
                    'size': file.size,
                    'path': '/' + file.key,
                    'mime': file.mimetype,
                    'origin': file.originalname,
                    'encoding': file.encoding,
                    'filename': file.filename
                })
            } );
            return res.json({
                errorCode: 0,
                message: "Success",
                success: true,
                data: data
            });
        });
    });

    return router;
}
