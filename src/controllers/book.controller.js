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

exports.getBookById = async(req,res)=>{
    try {
         const {id} = req.params;
         const data = await Book.findOne({_id:id});
         if(!data){
            return res.send({
                status:true,
                statusCode:200,
                msg:"No Book Found!"
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

exports.bookUpdate = async(req,res)=>{
    try {
        const {id} = req.params; 
        const data = await Book.findByIdAndUpdate({_id:id},req.body);
        if(!data){
            return res.send({
                status:true,
                statusCode:200,
                msg:"No Book Found!"
            })
        }
        return res.send({
            status:true,
            statusCode:200,
            msg:"Book Updated Sucessfully"
        })
    } catch (error) {
        return res.send({
            status:false,
            statusCode:400,
            msg:"Something Went Wrong"

        })
    }
}

exports.deleteBook = async(req,res)=>{
    try {
        const {id} = req.params;
        const data = await Book.findOne({_id:id});
        if(!data){
            return res.send({
                status:true,
                statusCode:200,
                msg:"No Book Found!"
            })
        }
        await Book.deleteOne({_id:id});
        return res.send({
            status:true,
            statusCode:200,
            msg:"Book Deleted Sucessfully"
        })
    } catch (error) {
        return res.send({
            status:false,
            statusCode:400,
            msg:"Something Went Wrong"

        })
    }
}