const Book = require('../db/models/books.model');

exports.addBooks = async(req,res)=>{
    try {
        const {title,author,summary} = req.body;
        if (!title || !author || !summary) {
            return res.status(400).json({
              msg: "All fields are required",
              status: false,
            });
          }
        await Book.create({title,author,summary});
        return res.send({
            status:true,
            statusCode:200,
            msg:"Books Added Sucessfully"
        });
    } catch (error) {
        return res.send({
            status:false,
            statusCode:400,
            msg:"Something Went Wrong"

        })
    }
}

exports.getAllBooks = async(req,res)=>{
    try {
        const data = await Book.find({});
        if(!data){
            return res.send({
                status:true,
                statusCode:200,
                msg:"No Books Found!"
            })
        }
        return res.send({
            status:true,
            statusCode:200,
            data:data
        })
    } catch (error) {
        
        return res.send({
            status:false,
            statusCode:400,
            msg:"Something Went Wrong"

        })
    }
}