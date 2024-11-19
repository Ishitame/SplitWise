const mongoose=require('mongoose')

const groupschema=mongoose.Schema({
    name:String,
    description:String,
    members:[
       { type: mongoose.Schema.Types.ObjectId,
        ref:'User',
       }

    ],
      
    balance: { 
        toReceive: [
          { payerId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',  
          },
            amount: 
            {type:Number, 
          default: 0, } }
          
        ],
        toPay: [
            { payeeId:{
              type: mongoose.Schema.Types.ObjectId,
              ref: 'User',  
            },
              amount: 
              {type:Number, 
            default: 0, } }
            
          ],
      },

//total balance ki field ek baar dekhlena
createdby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    required: true,
  },

},
      {timestamps: true,}  
    
 
)

module.exports=mongoose.model("Group",groupschema)