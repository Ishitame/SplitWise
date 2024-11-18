UserModel

{
  "_id": ObjectId, // Unique identifier for each user
  "name": "string", // Full name of the user
  "email": "string", // Email address
  "phone": "string", // Optional contact number
  "profilePicture": "string" // URL for the user's profile picture (optional)
}



GruopModel

{
  "_id": ObjectId, // Unique identifier for each group
  "groupName": "string", // Name of the group
  "description": "string", // Short description of the group (optional)
  "createdBy": ObjectId, // Reference to the _id of the user who created the group
  "createdAt": "Date", // Timestamp when the group was created
  "members": [
    {
      "userId": ObjectId, // Reference to the _id of the user
      "joinedAt": "Date" // Timestamp when the user joined the group
    }
  ]
}



ExpenseModel

{
  "_id": ObjectId, // Unique identifier for each expense
  "groupId": ObjectId, // Reference to the _id of the group
  "createdBy": ObjectId, // Reference to the _id of the user who created the expense
  "title": "string", // Short description of the expense
  "totalAmount": "number", // Total amount of the expense
  "date": "Date", // Date when the expense occurred
  "createdAt": "Date", // Timestamp when the expense was added
  "splitDetails": [
    {
      "payerId": ObjectId, // Reference to the _id of the user who paid
      "payeeId": ObjectId, // Reference to the _id of the user who owes money
      "amount": "number" // Amount owed by the payee to the payer
    }
  ]
}